import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../app.state'; 
import { customerReducer } from './customer.reducer';
import { agentReducer } from './agent.reducer';

export const appReducer: ActionReducerMap<any> = {
    customerReducer: customerReducer,
    agentReducer: agentReducer
}