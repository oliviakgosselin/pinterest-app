import {Component, OnInit, Input} from '@angular/core';
import {Board} from '../../types/board';

@Component({
    selector: 'tst-board-details',
    templateUrl: './board-details.component.html',
    styleUrls: ['./board-details.component.scss'],
})
export class BoardDetailsComponent implements OnInit {
    @Input() board: Board;

    constructor() {}

    ngOnInit() {}
}
