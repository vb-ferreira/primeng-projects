// core
import { Component, OnInit } from '@angular/core';
// services
import { ProductService } from './product.service';
// interfaces
import { Product } from './product';
// primeng
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [TableModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }
    )
  }
}
