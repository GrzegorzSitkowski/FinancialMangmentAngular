import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEdit } from 'src/app/models/products/productEdit.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productDetail: ProductEdit = {
    id: '',
    product: '',
    price: 0,
    done: false
  };

  constructor(private route:ActivatedRoute, private productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.productService.getProduct(id)
          .subscribe({
            next: (response) => {
              this.productDetail = response;
            }
          });
        }
      }
    })
  }

  updateProduct(){
    this.productService.updateProduct(this.productDetail.id, this.productDetail)
    .subscribe({
      next: (response) => {
        this.router.navigate(['products']);
      }
    });
  }

}
