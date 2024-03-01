import { Injectable } from '@angular/core';

import { inject } from '@angular/core';
import { getDocs, where, query, DocumentData, Firestore, collection, collectionData, setDoc, doc, addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recipe } from '../models/interfaces';

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
  async createRecipe(recipe:Recipe){
    await addDoc(collection(this.firestore, 'recipes'), recipe);
  }
  async queryRecipes(term: String){
    let q = query(collection(this.firestore, "recipes"), where("name", ">=", term), where ("name", "<=", term + '\uf8ff'));
    let results = await getDocs(q);
    let data: any[] = [];
    results.forEach((res) => {
      data.push(res.data());
    });
    return data;
  }
}
