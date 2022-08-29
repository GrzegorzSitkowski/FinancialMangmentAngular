import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountAdd } from 'src/app/models/accounts/accountAdd.model';
import { Product } from 'src/app/models/products/product.model';
import { ProductAdd } from 'src/app/models/products/productAdd.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseApiUrl + '/api/products');
  }

  addproduct(addProductRequest: ProductAdd): Observable<AccountAdd>{
    return this.http.post<AccountAdd>(this.baseApiUrl + '/api/products', addProductRequest);
  }
}
