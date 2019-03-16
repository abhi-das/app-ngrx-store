import { Action } from '@ngrx/store';
import { AgentProfileModel } from '../models/agent-profile.model';

export const ADD_AGENT = '[AGENT] Add';
export const REMOVE_AGENT = '[AGENT] Remove';

export class AddAgent implements Action {

    readonly type = ADD_AGENT;
    constructor(public agentData: AgentProfileModel) {}
}

export class RemoveAgent implements Action {

    readonly type = REMOVE_AGENT;
    constructor(public agRefId: number) {}
}

export type AgentAction = AddAgent | RemoveAgent;