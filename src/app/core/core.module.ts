import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ListComponent } from '../components/list/list.component';
import { DocumentsComponent } from '../components/documents/documents.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        DashboardComponent,
        ErrorPageComponent,
        ProfileComponent,
        ListComponent,
        DocumentsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CoreRoutingModule
    ],
    exports: [
        HomeComponent
    ]
})
export class CoreModule {
}
