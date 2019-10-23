import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardsView} from './views/boards.view';
import {BoardDetailsComponent} from './components/board-details/board-details.component';
import {BoardsRoutingModule} from './boards-routing.module';
import {AddBoardComponent} from './components/add-board/add-board.component';
import {RemoveBoardComponent} from './components/remove-board/remove-board.component';

@NgModule({
    declarations: [
        BoardsView,
        BoardDetailsComponent,
        AddBoardComponent,
        RemoveBoardComponent,
    ],
    imports: [BoardsRoutingModule, CommonModule],
})
export class BoardsModule {}
