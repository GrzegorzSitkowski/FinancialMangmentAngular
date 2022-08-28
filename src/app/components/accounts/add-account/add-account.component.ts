import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountAdd } from 'src/app/models/accounts/accountAdd.model';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  addAccountRequest: AccountAdd = {
    name: '',
    amount: 0,
    typeId: 0
  }
  constructor(private accountService: AccountsService, private router: Router) { }

  ngOnInit(): void {
  }

  addAccount(){
    this.accountService.addAccount(this.addAccountRequest)
    .subscribe({
      next: (account) => {
        this.router.navigate(['accounts']);
      }
    });
  }

}
