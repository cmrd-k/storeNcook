import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RecipeService } from 'src/app/services/recipe.service';

import { inject } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/interfaces';

@Component({
  selector: 'app-tab1',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class Tab1Page {
  allRecipes: Recipe[] = []
  showRecipes: Recipe[] = [];

  constructor(private recService: RecipeService, private router: Router) {
    this.fetchRecipes();
  }

  fetchRecipes(){
    let recipeList: Recipe[] = [];
    this.recService.getAllRecipes().subscribe((list)=>{
      this.showRecipes = list;
      this.allRecipes = list;
    });
  }

  openCreateRecipe(){
    this.router.navigate(['/view-recipe'])
  }

  async searchName(event: any){
    console.log(event.target.value);
    this.recService.queryRecipes(event.target.value).then((value) => {
      this.showRecipes = value;
    });
  }
}