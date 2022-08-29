import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountAdd } from 'src/app/models/accounts/accountAdd.model';
import { Product } from 'src/app/models/products/product.model';
import { ProductAdd } from 'src/app/models/products/productAdd.model';
import { ProductEdit } from 'src/app/models/products/productEdit.model';
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

  addProduct(addProductRequest: ProductAdd): Observable<ProductAdd>{
    return this.http.post<ProductAdd>(this.baseApiUrl + '/api/products', addProductRequest);
  }

  getProduct(id: string): Observable<ProductEdit>{
    return this.http.get<ProductEdit>(this.baseApiUrl + '/api/products/' + id);
  }

  updateProduct(id: string, updateProductRequest: ProductEdit): Observable<ProductEdit>{
    return this.http.put<ProductEdit>(this.baseApiUrl + '/api/products/' + id, updateProductRequest);
  }
}
