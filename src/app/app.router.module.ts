import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerProfileComponent
  },
  {
    path: 'agent',
    component: AgentProfileComponent
  },
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
