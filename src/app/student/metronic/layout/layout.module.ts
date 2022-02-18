import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout.component';
import { ExtrasModule } from '../partials/layout/extras/extras.module';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScriptsInitComponent } from './components/scripts-init/scripts-init.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AsideMenuComponent } from './components/aside/aside-menu/aside-menu.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PageTitleComponent } from './components/header/page-title/page-title.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { DrawersModule, DropdownMenusModule, ModalsModule, EngagesModule} from '../partials';
import {EngagesComponent} from "../partials/layout/engages/engages.component";
import {UserType} from "../../../shared/models/auth/userType";
import {UserTypeGuard} from "../../../shared/guards/user-type.guard";
import {TranslationModule} from "../../../shared/modules/i18n";
import {SharedModule} from "../../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    runGuardsAndResolvers: 'always',
    data: {userType: UserType.Student},
    canActivate: [UserTypeGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('../../student.module').then(m => m.StudentModule)
      }
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    ToolbarComponent,
    AsideMenuComponent,
    TopbarComponent,
    PageTitleComponent,
    HeaderMenuComponent,
    EngagesComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslationModule,
        InlineSVGModule,
        NgbDropdownModule,
        NgbProgressbarModule,
        ExtrasModule,
        ModalsModule,
        DrawersModule,
        EngagesModule,
        DropdownMenusModule,
        NgbTooltipModule,
        TranslateModule,
        SharedModule,
    ],
  exports: [RouterModule],
})
export class LayoutModule {}
