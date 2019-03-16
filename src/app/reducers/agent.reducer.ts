import { Action } from '@ngrx/store';
import { AgentProfileModel } from '../models/agent-profile.model';
import * as AgentActions from '../actions/agent.actions';

const initialAgentState: AgentProfileModel = {
    name: 'prudential insurance',
    agRefId: 2001,
    role: 'agent'
}

export const agentReducer = 
    (state: AgentProfileModel[] = [initialAgentState], action: AgentActions.AgentAction) => {

        switch(action.type) {

            case AgentActions.ADD_AGENT :
                return [...state, action.agentData];
            
            default :
                return state;
        }
}