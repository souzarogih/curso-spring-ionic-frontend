import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        cardTitle: ['CartãoNubank',[Validators.required, Validators.maxLength(50)]],
        cardNumber: ['5234217904470389',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
        cvv : ['368',[Validators.required, Validators.maxLength(3)]],
        validThru : ['11/20',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
        portador : ['HIGOR S ANDRADE',[Validators.required]],
        cardFlag : ['MASTERCARD',[Validators.required]],
        emitter : ['Nubank',[Validators.required]],
        idCard : ['1',[]]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
