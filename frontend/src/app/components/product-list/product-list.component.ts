import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] | undefined;
  loggedInUserId: string | null = null;

  constructor(
    private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loggedInUserId = this.getLoggedInUserId();
    this.loadProducts();
  }

  getLoggedInUserId(): string | null {
    try {
      if (isPlatformBrowser(this.platformId) && localStorage) {
        const userJson = localStorage.getItem('user');
        const user = userJson ? JSON.parse(userJson) : null;
        return user ? user._id : null;
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }

    return null;
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  isUserMatched(productUserId: string): boolean {
    return this.loggedInUserId === productUserId;
  }

  editProduct(product: any): void {
    console.log('Editing product:', product);
  }

  deleteProduct(productId: any): void {
    console.log('Deleting product with id:', productId);

    this.productService.deleteProduct(productId).subscribe(
      (data) => {
        console.log('Product deleted successfully:', data);
        this.loadProducts();
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
