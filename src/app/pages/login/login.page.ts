import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Auth, getAuth } from '@angular/fire/auth';
import { firebaseui, firebase } from 'firebaseui-angular';


import { environment } from 'src/environments/environment';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgIf]
})
export class LoginPage implements OnInit{
  credentials!: FormGroup;
  auth: Auth = inject(Auth);

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private loadingController: LoadingController, private alertController: AlertController) { 
    
  }

  ngOnInit(){
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
    });
    this.authUi()
    
  }

  get email(){
    return this.credentials.get('email')
  }
  get password(){
    return this.credentials.get('password')
  }
  async register(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.credentials.value);
    loading.dismiss();

    if(user){
      this.router.navigateByUrl('', {replaceUrl:true});
    } else{
      this.showAlert('registration failed', 'please try again');
    }
  }
  async login(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home', {replaceUrl:true});
    } else{
      this.showAlert('login failed', 'please try again');
    }
  }
  async showAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header,message, buttons: ['OK'],
    });
    await alert.present();
  }

  authUi(){ 
     let ui = new firebaseui.auth.AuthUI(this.auth);
     var uiConfig = {
       callbacks: {
         signInSuccessWithAuthResult: function () {
           console.log(getAuth().currentUser);
           return true;
         },
       },
       // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
       signInFlow: 'popup',
       signInSuccessUrl: './',
       signInOptions: [
         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
         firebase.auth.EmailAuthProvider.PROVIDER_ID
       ],
       // Terms of service url.
       tosUrl: '<your-tos-url>',
       // Privacy policy url.
       privacyPolicyUrl: '<your-privacy-policy-url>'
     };
     ui.start('#firebaseui-auth-container', uiConfig);
   }
}