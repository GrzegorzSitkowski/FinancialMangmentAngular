import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferEdit } from 'src/app/models/transfers/transferEdit.model';
import { TransfersService } from 'src/app/services/transfers/transfers.service';

@Component({
  selector: 'app-edit-transfer',
  templateUrl: './edit-transfer.component.html',
  styleUrls: ['./edit-transfer.component.css']
})
export class EditTransferComponent implements OnInit {

  transferDetails: TransferEdit = {
    id: '',
    name: '',
    typeId: 0,
    categoryId: 0,
    date: new Date(2022,1,1),
    description: ''
  };
  constructor(private route:ActivatedRoute, private transferService: TransfersService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.transferService.getTransfer(id)
          .subscribe({
            next: (response) => {
              this.transferDetails = response;
            }
          });
        }
      }
    })
  }

  updateTransfer(){
    this.transferService.updateTransfer(this.transferDetails.id, this.transferDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['transfers']);
      }
    });
  }

  deleteTransfer(id: string){
    this.transferService.deleteTransfer(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['transfers']);
      }
    });
  }

}
