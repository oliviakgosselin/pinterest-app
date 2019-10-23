import {Subject} from 'rxjs';
import {Injectable, OnDestroy} from '@angular/core';
import {takeUntil, tap, retry, switchMap} from 'rxjs/operators';

import {Store} from 'src/app/shared/types/store';
import {BoardsStoreState} from './boards.store.state';
import {BoardsEndpoint} from './boards.endpoint';
import {StoreRequestStateUpdater} from 'src/app/shared/types/storeRequestStateUpdater';
import {Board} from '../types/board';
import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';

@Injectable()
export class BoardsStore extends Store<BoardsStoreState> implements OnDestroy {
    private ngUnsubscribe$: Subject<undefined> = new Subject();
    private storeRequestStateUpdater: StoreRequestStateUpdater;
    private reloadBoards$: Subject<undefined> = new Subject();

    constructor(private endpoint: BoardsEndpoint) {
        super(new BoardsStoreState());
    }

    init(): void {
        this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
            this
        );
        this.initReloadBoards$();
    }

    private initReloadBoards$(): void {
        this.reloadBoards$
            .pipe(
                switchMap(() => {
                    return this.endpoint.listBoards(
                        this.storeRequestStateUpdater
                    );
                }),
                tap(boards => {
                    this.updateBoardsState(boards);
                }),
                retry(),
                takeUntil(this.ngUnsubscribe$)
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    reloadBoards(): void {
        this.reloadBoards$.next();
    }

    addBoard(board: Board): void {
        this.endpoint
            .addBoard(board)
            .pipe(tap(() => this.reloadBoards()))
            .subscribe();
    }

    private updateBoardsState(boards: Board[]): void {
        this.setState({
            ...this.state,
            boards,
        });
    }
}
