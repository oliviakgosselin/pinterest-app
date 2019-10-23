import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'tst-add-board',
    templateUrl: './add-board.component.html',
    styleUrls: ['./add-board.component.scss'],
})
export class AddBoardComponent {
    @Output()
    onAddBoard = new EventEmitter<null>();
}
