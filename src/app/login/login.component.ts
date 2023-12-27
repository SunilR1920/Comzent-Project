import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { InputfieldComponent } from '../components/inputfield/inputfield.component';
import { ButtoncompComponent } from '../components/buttoncomp/buttoncomp.component';
import { Router, RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    InputfieldComponent,
    ButtoncompComponent,
    SignupComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showPage: string='login';

  loginForm: FormGroup; 
  linkText: string = '';
  linkUrl: string = '';

  userIdValue:string='userid';
  userIdPlaceholder:string='Enter your user Id';

  passwordValue:string='password';
  passwordPlaceholder:string='Enter your password';

  buttonTitle:string='Login';
  type:string='submit';

  signupForm: FormGroup;
  firstNamePlaceholder:string ="First Name";
  firstNameValue:string ="firstName"; 
  lastNamePlaceholder:string ="Last Name";
  lastNameValue:string ="lastName";

  emailPlaceholder:string="Enter your email";
  emailValue:string="email"
  mobileNoPlaceholder:string="Mobile No.";
  mobileNoValue:string="mobileNo";

  typeValue:string="radio";
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
  passwordPlaceholderS:string="Password";
  passwordValueS:string="password";
  conPasswordPlaceholder:string="Confirm Password";
  conPasswordValue:string="conPassword";
  roleValue:string="role";

  value:string="Post Data"
  buttonTitleS:string="Register";

  


  
  constructor (private formBuilder: FormBuilder, router: Router){
    this.loginForm=formBuilder.group({
      userid:['',Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')],
      password:['',Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')],
    }),
    this.signupForm=formBuilder.group({
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
  
  PostLoginForm(loginForm:any){
    this.userIdValue=loginForm.controls.userIdValue.value;
    this.passwordValue=loginForm.controls.passwordValue.value;
    console.log(this.loginForm.value);
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

  get userid(){
    return this.loginForm.get('userid');
  }
  
  get password(){
    return this.loginForm.get('password');
  }

  
  showLogin(){
    this.showPage='login'
  }

  showSignup(){
    this.showPage='Signup'
  }


  // onChange(e){
  //   this.showPage=e.target.value;
  // }

  // showLogin(){
  //   const loginForm = document.querySelector("form.login") as HTMLElement;
  //   const loginText = document.querySelector(".title-text .login") as HTMLElement;
  //   loginForm.style.marginLeft = "0%";
  //   loginText.style.marginLeft = "0%";
  // }

  // showSignup(){
  //   const loginForm = document.querySelector("form.login") as HTMLElement;
  //   const loginText = document.querySelector(".title-text .login") as HTMLElement;
  //   loginForm.style.marginLeft = "-50%";
  //   loginText.style.marginLeft = "-50%";
  // }

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

}
