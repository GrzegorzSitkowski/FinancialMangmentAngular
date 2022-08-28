import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/accounts/account.model';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})

export class AccountsListComponent implements OnInit {

  accounts: Account[] = [];
  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {  
    this.accountsService.getAccounts()
    .subscribe({
      next: (accountsApi) => {
        this.accounts = accountsApi as Account[];
        console.log(this.accounts);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
