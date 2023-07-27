import { Component, OnInit} from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  template:`
  <section class="products">
    <app-product [product]="product"
    *ngFor="let product of products"
    (addToCartClick)="addToCart($event)">
    </app-product> 
  </section>`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products!:Product[];
  //ACA SE INYECTA EL SERVICIO CREADO EN ESTE CASO ES shoppingCartSvc 
  constructor(private productSvc:ProductsService, private shoppingCartSvc: ShoppingCartService){}

  ngOnInit(): void {
    this.productSvc.getProducts().pipe(tap((products:Product[])=>this.products =products)).subscribe();
    
  }
  addToCart(product: Product): void {
    this.shoppingCartSvc.updateCart(product);
  }
}
