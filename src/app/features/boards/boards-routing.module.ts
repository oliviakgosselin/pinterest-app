import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BoardsView} from './views/boards.view';

export const routingPaths = {
    boards: 'boards',
};

const routes: Routes = [
    {
        path: routingPaths.boards,
        component: BoardsView,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BoardsRoutingModule {}
