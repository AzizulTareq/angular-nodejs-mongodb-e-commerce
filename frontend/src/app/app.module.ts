// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, CreateProductComponent, ModalComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule], // Add FormsModule, ReactiveFormsModule, and QuillModule here
  bootstrap: [AppComponent],
})
export class AppModule {}

