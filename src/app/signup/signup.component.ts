import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputfieldComponent } from '../components/inputfield/inputfield.component';
import { ButtoncompComponent } from '../components/buttoncomp/buttoncomp.component';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputfieldComponent,
    ButtoncompComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm: FormGroup;
  firstNamePlaceholder:string ="First Name";
  firstNameValue:string ="firstName"; 
  lastNamePlaceholder:string ="Last Name";
  lastNameValue:string ="lastName";

  emailPlaceholder:string="Enter your email";
  emailValue:string="email"
  mobileNoPlaceholder:string="Mobile No.";
  mobileNoValue:string="mobileNo";

  type:string="radio";
  forMaleGender:string="Male";
  gender:string="gender";
  forFemaleGender:string="Female";
  

  addressPlaceholder:string="Address";
  addressValue:string="address";
  cityPlaceholder:string="City";
  cityValue:string="city";
  regionPlaceholder:string="Region";
  regionValue:string="region";
  pincodePlaceholder:string="Pincode";
  pincodeValue:string="pincode";
  countryPlaceholder:string="Country";
  countreyValue:string="countrey";

  useridPlaceholder:string="User ID";
  useridValue:string="userid";
  passwordPlaceholder:string="Password";
  passwordValue:string="password";
  conPasswordPlaceholder:string="Confirm Password";
  conPasswordValue:string="conPassword";
  roleValue:string="role";

  value:string="Post Data"
  buttonTitle:string="Register";

  

  constructor(private formbuilder:FormBuilder){
    this.signupForm=formbuilder.group({
      firstNameValue: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]),
      lastNameValue: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]),
      emailValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.email]),
      mobileNoValue: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$')]),
      gender: new FormControl([Validators.required]),
      addressValue: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]+$')]),
      cityValue: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]+$')]),
      regionValue: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]+$')]),
      pincodeValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9]+$')]),
      countreyValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z]+$')]),
      useridValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')]),
      passwordValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')]),
      conPasswordValue: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')]),
      roleValue: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]+$')])
    })
  }

  ngOnInit(){

  }

  PostData(signupForm:any){
    this.firstNameValue=signupForm.controls.firstName.value;
    this.lastNameValue=signupForm.controls.lastName.value;
    this.emailValue=signupForm.controls.emailValue.value;
    this.mobileNoValue=signupForm.controls.mobileNoValue.value;
    this.gender=signupForm.controls.gender.value;
    this.addressValue=signupForm.controls.addressValue.value;
    this.cityValue=signupForm.controls.cityValue.value;
    this.regionValue=signupForm.controls.regionValue.value;
    this.pincodeValue=signupForm.controls.pincodeValue.value;
    this.countreyValue=signupForm.controls.countreyValue.value;
    this.useridValue=signupForm.controls.useridValue.value;
    this.passwordValue=signupForm.controls.passwordValue.value;
    this.conPasswordValue=signupForm.controls.conPasswordValue.value;
    this.roleValue=signupForm.controls.roleValue.value;
    console.log(signupForm.controls);
  }

  displayAddress=false;
  showAddress(){
    this.displayAddress=true;
  }
  addressTextareaRows:number=1;
  minColsForIncrease:number=30;
  onAddressTextareaInput(event:any){
    const currentCols = event.target.cols;
    if(currentCols> this.minColsForIncrease){
      const numberRows = Math.ceil(event.targt.vlaue.lenth/currentCols);
      this.addressTextareaRows=numberRows;
    }
  }

  // userRegisterData:any={};
  // getSignupFormValue(){
  //   console.log(this.signupForm.value)
  // }

  
}
