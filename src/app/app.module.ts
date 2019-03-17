import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './app.router.module';
import { AppComponent } from './app.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    CustomerProfileComponent,
    AgentProfileComponent
  ],
  imports: [
    BrowserModule,

    // routing
    AppRouterModule,
    
    // store
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
