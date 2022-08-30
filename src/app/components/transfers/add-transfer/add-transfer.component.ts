import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferAdd } from 'src/app/models/transfers/transferAdd.model';
import { TransfersService } from 'src/app/services/transfers/transfers.service';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.css']
})
export class AddTransferComponent implements OnInit {
  addTransferRequest: TransferAdd = {
    name: '',
    amount: 0,
    typeId: 0,
    categoryId: 0,
    date: new Date(2022,1,1),
    description: '',
    accountId: 0
  }
  constructor(private transferService: TransfersService, private router: Router) { }

  ngOnInit(): void {
  }

  addTransfer(){
    this.transferService.addTransfer(this.addTransferRequest)
    .subscribe({
      next: (transfer) => {
        this.router.navigate(['transfers']);
      }
    });
  }

}
