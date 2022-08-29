import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe({
      next:(productApi) => {
        this.products = productApi as Product[];
        console.log(this.products);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
