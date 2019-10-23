import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LeftSidePanelComponent} from './left-side-panel/left-side-panel.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, LeftSidePanelComponent],
    exports: [HeaderComponent, FooterComponent, LeftSidePanelComponent],
    imports: [RouterModule],
    providers: [],
})
export class LayoutModule {
    constructor() {}
}
