import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {ApiResponse} from '../../../shared/types/apiResponse';

import {BOARDS_CONFIG} from '../boards.config';
import {Board} from '../types/board';
import {StoreRequestStateUpdater} from '../../../shared/types/storeRequestStateUpdater';
import {
    listOfBoards,
    addedBoard,
} from 'src/app/testing/boards-example.service.stub';
import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';

@Injectable()
export class BoardsEndpoint {
    constructor(private http: HttpClient) {}

    listBoards(
        requestStateUpdater: StoreRequestStateUpdater
    ): Observable<Board[]> {
        const request = BOARDS_CONFIG.requests.listBoards;
        requestStateUpdater(request.name, {inProgress: true});
        console.log(requestStateUpdater);
        // MOCK: return of(listOfBoards).pipe(
        return this.http.get<ApiResponse<Board[]>>(request.url).pipe(
            map(response => {
                requestStateUpdater(request.name, {inProgress: false});
                return response.data;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }

    addBoard(board: Board): Observable<null> {
        const url = `${BOARDS_CONFIG.requests.addBoard.url}&name=${board.name}`;

        console.log(url);
        // MOCK: return of(addedBoard).pipe(
        return this.http.post<ApiResponse<null>>(url, null).pipe(
            map(() => null),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        );
    }
}
