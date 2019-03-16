import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store } from '@ngrx/store';

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

  constructor(private store: Store<AppState>) { 
    this.agents = this.store.select('agentReducer');
  }

  ngOnInit() {
  }

  
  createAgentHandler() {

    let newAgent = new AgentActs.AddAgent({ 
      name: 'test',
      agRefId: 10024,
      role: 'agent'
    });

    this.store.dispatch(newAgent);
  }
}
