// create-product.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      countInStock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  createProduct(): void {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(
        (createdProduct) => {
          console.log('Product created successfully:', createdProduct);
          // Handle success, e.g., redirect to the product list page
        },
        (error) => {
          console.error('Error creating product:', error);
          // Handle error
        }
      );
    } else {
      // Handle form validation errors
      console.log('Form is not valid');
    }
  }
}
