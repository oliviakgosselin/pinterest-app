import {Component, OnInit, OnDestroy} from '@angular/core';

import {BoardsStore} from '../services/boards.store';
import {BoardsEndpoint} from '../services/boards.endpoint';
import {Subject} from 'rxjs';
import {Board} from '../types/board';

@Component({
    templateUrl: './boards.view.html',
    styleUrls: ['./boards.view.scss'],
    providers: [BoardsStore, BoardsEndpoint],
})
export class BoardsView implements OnInit, OnDestroy {
    private ngUnsubscribe$: Subject<undefined> = new Subject();

    constructor(public store: BoardsStore) {}

    ngOnInit(): void {
        this.store.init();
        this.store.reloadBoards();

        console.log(this.store.state.boards);
    }

    addBoard(): void {
        const board: Board = {
            id: '6',
            name: 'OliviaTest2',
            url: 'OliviaTest2URL',
        };
        this.store.addBoard(board);
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
