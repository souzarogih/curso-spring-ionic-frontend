import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: ['Joaquim',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['joaquim@gmail.com',[Validators.required, Validators.email]],
        tipo : ['1',[Validators.required]],
        cpfOuCnpj : ['74222523089',[Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha : ['123',[Validators.required]],
        logradouro : ['Marizete da Silva',[Validators.required]],
        numero : ['88',[Validators.required]],
        complemento : ['Casa',[]],
        bairro: ['Mangabeira',[]],
        cep: ['58058300',[Validators.required]],
        telefone1 : ['988589659',[Validators.required]],
        telefone2 : ['',[]],
        telefone3 : ['',[]],
        estadoId : [null,[Validators.required]],
        cidadeId : [null,[Validators.required]]
      });
  }

  signupUser() {
    console.log("enviou o form");
  }
}
