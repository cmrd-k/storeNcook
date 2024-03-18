import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut, getAuth, authState} from '@angular/fire/auth';
import { signInWithEmailAndPassword, onAuthStateChanged, User } from '@firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  auth: Auth = inject(Auth);

  constructor() {
  console.log("auth");
  }

  async register ({email, password}:{email:string, password:string}){
    try{
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      return;
    } catch(e){
      return null;
    }
  }

  async login({email, password}:{email:string, password:string}){
    try{
      this.user = await signInWithEmailAndPassword(this.auth, email, password);
      return this.user;
    } catch(e){
      return null;
    }
  }
  
  logout(){
    return signOut(this.auth)
  }
}
