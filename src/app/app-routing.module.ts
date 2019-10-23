import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {routingPaths as boardsRoutingPaths} from './features/boards/boards-routing.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: boardsRoutingPaths.boards,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
