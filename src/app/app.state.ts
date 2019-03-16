import { CustomerProfileModel } from './models/customer-profile.model';
import { AgentProfileModel } from './models/agent-profile.model';

export interface AppState {
    readonly customerProfile: CustomerProfileModel[];
    readonly agentProfile: AgentProfileModel[];
}