import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DocumentsComponent } from '../components/documents/documents.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from '../components/list/list.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, canActivateChild: [AuthGuard] },
            { path: 'list', component: ListComponent },
            { path: 'documents', component: DocumentsComponent }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CoreRoutingModule {
}
