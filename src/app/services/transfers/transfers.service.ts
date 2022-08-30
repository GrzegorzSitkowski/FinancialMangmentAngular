import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from 'src/app/models/transfers/transfer.model';
import { TransferAdd } from 'src/app/models/transfers/transferAdd.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {
  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getTransfers(): Observable<Transfer[]>{
    return this.http.get<Transfer[]>(this.baseApiUrl + '/api/transfers');
  }

  addTransfer(addTransferRequest: TransferAdd): Observable<TransferAdd>{
    return this.http.post<TransferAdd>(this.baseApiUrl + '/api/transfers', addTransferRequest);
  }
}
