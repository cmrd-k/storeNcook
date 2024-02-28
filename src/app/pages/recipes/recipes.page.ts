import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RecipeService } from 'src/app/services/recipe.service';

import { inject } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class Tab1Page {
  recipes: Observable<any[]> = this.fetchRecipes();

  constructor(private recService: RecipeService) {}

  fetchRecipes(){
    let recipeList = this.recService.getAllRecipes();
    return recipeList;
  }
}
