import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'top', component: TopComponent },
  // { path: '**', redirectTo: TopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
