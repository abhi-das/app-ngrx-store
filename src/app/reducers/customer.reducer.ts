import { Action } from '@ngrx/store';
import { CustomerProfileModel } from '../models/customer-profile.model';
import * as CustomerActions from '../actions/customer.actions';

const initialState: CustomerProfileModel = {
    name: 'robert mill',
    role: 'customer',
    custRefId: 1001,
    location: 'peterborough'
}

export const customerReducer = 
    (state: CustomerProfileModel[] = [initialState], action: CustomerActions.CustomerAction) => {

        switch(action.type) {

            case CustomerActions.ADD_CUSTOMER : 
                return [...state, action.customerData];
            
            default : 
                return state;

        }
}


