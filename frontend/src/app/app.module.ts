// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { QuillModule } from 'ngx-quill';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, CreateProductComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, QuillModule.forRoot()], // Add FormsModule, ReactiveFormsModule, and QuillModule here
  bootstrap: [AppComponent],
})
export class AppModule {}

