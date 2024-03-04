import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Auth, User, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;


  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
        //handle user state changes here. Note, that user will be null if there is no currently logged in user.
     console.log(aUser);
    })

    
    const aCollection = collection(this.firestore, 'recipes')
    this.items$ = collectionData(aCollection);
  }
}
