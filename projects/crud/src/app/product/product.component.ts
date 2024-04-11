// core
import { Component, OnInit } from '@angular/core';
// my components
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
// services
import { ProductService } from './product.service';
// interfaces
import { Product } from './product';
// primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AddEditProductComponent, TableModule, ButtonModule, ToastModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  displayAddModal: boolean = false;

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

  showAddModal() {
    this.displayAddModal = true;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddModal = !isClosed;     
  }

  saveProductToList(newData: any) {
    this.products.unshift(newData);
  }
}
