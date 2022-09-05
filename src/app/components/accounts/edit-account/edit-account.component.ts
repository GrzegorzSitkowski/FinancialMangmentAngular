import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountEdit } from 'src/app/models/accounts/accountEdit.model';
import * as accountsService from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  accountDetails: AccountEdit = {
    id: '',
    name: '',
    amount: 0,
    typeId: 0
  };

  constructor(private route: ActivatedRoute, private accountService: accountsService.AccountsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.accountService.getAccount(id)
          .subscribe({
            next: (response) => {
              this.accountDetails = response;
              console.log('Id: ' + this.accountDetails.id);
            }
          });
        }
      }
    })
  }

  updateAccount(){
    this.accountService.updateAccount(this.accountDetails.id, this.accountDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['accounts']);
        console.log('Id: ' + this.accountDetails.id + ' Name: ' + this.accountDetails.name + ' Amount: ' + this.accountDetails.amount);
        console.log('Done!');
      }
    });
  }

  deleteAccount(id: string){
    this.accountService.deleteAccount(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['accounts']);
      }
    })
  }

}
