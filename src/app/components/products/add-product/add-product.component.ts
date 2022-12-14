import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAdd } from 'src/app/models/products/productAdd.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductRequest: ProductAdd = {
    product: '',
    price: 0,
    done: true
  };

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.addProductRequest)
    .subscribe({
      next: (product) => {
        this.router.navigate(['products']);
      }
    });
  }

}
