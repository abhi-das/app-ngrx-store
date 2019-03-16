import { Action } from '@ngrx/store';
import { CustomerProfileModel } from '../models/customer-profile.model';

export const ADD_CUSTOMER = "[CUSTOMER] Add";
export const REMOVE_CUSTOMER = "[CUSTOMER] Remove";

export class AddCustomer implements Action {
    
    readonly type = ADD_CUSTOMER;
    constructor(public customerData: CustomerProfileModel ) { }
}

export class RemoveCustomer implements Action {

    readonly type = REMOVE_CUSTOMER;
    constructor(public custRefId: number ) { }
}

export type CustomerAction = AddCustomer | RemoveCustomer;