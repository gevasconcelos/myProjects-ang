import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projeto Sem Título';

  senha = new FormControl('', [Validators.required, Validators.email]);
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageSenha() {
    if (this.senha.hasError('required')) {
      return 'Digite a senha';
    }

    return this.email.hasError('senha') ? 'Senha incorreta' : '';
  }
}
