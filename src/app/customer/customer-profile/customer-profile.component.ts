import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CustActions from '../../actions/customer.actions';
import { CustomerProfileModel } from '../../models/customer-profile.model';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerProfileComponent implements OnInit {

  customers: Observable<CustomerProfileModel[]>;
  refCounter: number;

  constructor(private store: Store<AppState>) {
    this.customers = this.store.select('customerReducer');
  }

  ngOnInit() {
    this.refCounter = 10022;
  }

  createCustomerHandler() {

    let newCustomer = new CustActions.AddCustomer({
      name: 'test',
      role: 'customer',
      custRefId: this.refCounter++,
      location: 'san deago'
    });

    this.store.dispatch(newCustomer);
  }
}
