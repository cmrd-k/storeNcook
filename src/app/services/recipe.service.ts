import { Injectable } from '@angular/core';

import { inject } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  firestore: Firestore = inject(Firestore)
  recipeCollection: any;

  constructor() {
    this.recipeCollection = collection(this.firestore, 'recipes');
  }
  getAllRecipes() : Observable<any[]>{
    let items$ = collectionData(this.recipeCollection);
    items$.subscribe(recipes=>{console.log(recipes)});
    return items$;
  }
}
