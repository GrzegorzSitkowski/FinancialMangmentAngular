import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models/accounts/account.model';
import { AccountAdd } from 'src/app/models/accounts/accountAdd.model';
import { AccountEdit } from 'src/app/models/accounts/accountEdit.model';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseApiUrl + '/api/accounts');
  }

  addAccount(addAccountRequest: AccountAdd): Observable<AccountAdd>{
    return this.http.post<AccountAdd>(this.baseApiUrl + '/api/accounts', addAccountRequest);
  }

  getAccount(id: string): Observable<AccountEdit>{
    return this.http.get<AccountEdit>(this.baseApiUrl + '/api/accounts/' + id);
  }

  updateAccount(id: string, updateAccountRequest: AccountEdit): Observable<AccountEdit> {
    return this.http.put<AccountEdit>(this.baseApiUrl + '/api/accounts/' + id, updateAccountRequest);
  }

  deleteAccount(id: string): Observable<AccountEdit>{
    return this.http.delete<AccountEdit>(this.baseApiUrl + '/api/accounts/' + id);
  }
}
