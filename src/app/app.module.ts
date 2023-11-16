import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CepClienteComponent } from './cep-cliente/cep-cliente.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CepClienteComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
