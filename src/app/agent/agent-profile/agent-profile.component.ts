import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as CustActions from '../../actions/customer.actions';
import * as AgentActs from '../../actions/agent.actions';
import { AgentProfileModel } from '../../models/agent-profile.model';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgentProfileComponent implements OnInit {

  agents: Observable<AgentProfileModel[]>;
  refCounter: number;

  constructor(private store: Store<AppState>) { 
    this.agents = this.store.select('agentReducer');
  }

  ngOnInit() {
    this.refCounter = 10022;
  }

  
  createAgentHandler() {

    let newAgent = new AgentActs.AddAgent({ 
      name: 'test',
      agRefId: this.refCounter++,
      role: 'agent'
    });

    this.store.dispatch(newAgent);
  }

  changeRoleHandler(agRefId: number) {


    this.store.dispatch(new AgentActs.ChangeRole(agRefId));

    let newCustomer = new CustActions.AddCustomer({
      name: 'test',
      role: 'customer',
      custRefId: agRefId,
      location: 'san deago'
    });

    this.store.dispatch(newCustomer);
  
  }

  getLatestHandler() {
    this.agents.subscribe(rs => {
      console.log(rs)
    })
  }
}
