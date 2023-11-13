import { Component } from '@angular/core';
import { CepService } from '../Service/cep.service';

@Component({
  selector: 'app-cep-cliente',
  templateUrl: './cep-cliente.component.html',
  styleUrls: ['./cep-cliente.component.css'],
})
export class CepClienteComponent {
  cepData: any;
  cep: string = '';

  constructor(private cepService: CepService) {}

  searchCep() {
    this.cepService.getCepInfo(this.cep).subscribe(
      (data) => {
        this.cepData = data;
      },
      (error) => {
        console.error('Error fetching CEP data', error);
      }
    );
  }
}
