// create-product.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  productForm: FormGroup;

  @Output() createSuccess = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
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
      // Get logged-in user's ID from local storage
      const loggedInUserJson = localStorage.getItem('user');
      if (loggedInUserJson) {
        const loggedInUser = JSON.parse(loggedInUserJson);
        const userId: string = loggedInUser._id;

        // Include user ID in the product creation payload
        const productPayload = { ...this.productForm.value, user: userId };

        this.productService.createProduct(productPayload).subscribe(
          (createdProduct) => {
            console.log('Product created successfully:', createdProduct);
            // Close the modal
            // Assuming your modal component has a close method
            // Adjust this based on how your modal is implemented
            this.closeModal();

            // Refresh the page by navigating to the current route
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            const currentUrl = this.router.url;
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate([currentUrl]);
              });
          },
          (error) => {
            console.error('Error creating product:', error);
            // Handle error
          }
        );
      } else {
        console.error('Error: User not found in local storage');
      }
    } else {
      // Handle form validation errors
      console.log('Form is not valid');
    }
  }

  closeModal(): void {
    // You need to implement the close method in your modal component
    // This will depend on how your modal is implemented
  }
}
