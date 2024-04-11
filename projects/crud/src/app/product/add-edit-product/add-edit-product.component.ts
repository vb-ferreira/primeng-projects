import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProductService } from '../product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, DialogModule, InputTextModule, InputNumberModule, InputTextareaModule],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.scss'
})
export class AddEditProductComponent {
  @Input() displayAddModal: boolean = false; 
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  // Envia os dados para o elemento pai para serem exibidos na tabela.
  // Isso simula a inserção dos dados na base, uma vez que se trata de uma API fake
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();

  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    description: [''],
    category: ['', Validators.required],
    image: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private productService: ProductService, private messageService: MessageService) {}

  closeModal() {
    this.productForm.reset();
    this.clickClose.emit(true);
  }

  addProduct() {
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value).subscribe(
      response => {
        this.clickAdd.emit(response);
        this.closeModal();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product added' });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
        console.log('Error occured');
      }
    )
  }
}
