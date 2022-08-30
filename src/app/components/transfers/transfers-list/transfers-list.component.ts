import { Component, OnInit } from '@angular/core';
import { Transfer } from 'src/app/models/transfers/transfer.model';
import { TransfersService } from 'src/app/services/transfers/transfers.service';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.css']
})
export class TransfersListComponent implements OnInit {

  transfers: Transfer[] = [];
  constructor(private transferService: TransfersService) { }

  ngOnInit(): void {
    this.transferService.getTransfers()
    .subscribe({
      next: (transferApi) => {
        this.transfers = transferApi as Transfer[];
        console.log(this.transfers);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
