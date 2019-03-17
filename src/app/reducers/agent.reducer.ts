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

            case AgentActions.CHANGE_ROLE :

                let rr = state.map( rs => {
                    rs.agRefId === action.agRefId ?
                    state.splice(state.indexOf(rs), 1): null;
                });

                return state;

            default :
                return state;
        }
}