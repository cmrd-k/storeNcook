import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RecipeService } from 'src/app/services/recipe.service';

import { inject } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Recipe, RecipeCollection } from 'src/app/models/interfaces';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-tab1',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class Tab1Page {
  allRecipes: Recipe[] = [];
  showRecipes: Recipe[] = [];
  searchByName: Boolean = true;

  constructor(private recService: RecipeService, private router: Router) {
    this.fetchRecipes();
  }

  fetchRecipes(){
    let data;
    this.recService.getAllRecipes().subscribe((list)=>{
      let data = list;
      console.log("recipeCollection data from Firestore: ")
      console.log(data)
      data.forEach((recipeCollection)=>{
        recipeCollection.recipes.forEach((recipe: any)=>{
          console.log(recipe)
          this.allRecipes.push(recipe);
          this.showRecipes = this.allRecipes;
          console.log("allRecipes")
          console.log(this.allRecipes)
        })
      })
    });
  }

  openCreateRecipe(){
    this.router.navigate(['/view-recipe'])
  }
  openLogin(){
    this.router.navigate(['login'])
  }

  async searchName(event: any){
    if(this.searchByName){
      console.log("search By Name: ");
      this.showRecipes = this.allRecipes.filter(r => String(r.name).startsWith(event.target.value));
    }else{
      console.log("search By Ingredient: ");
      this.showRecipes = this.allRecipes.filter(r => r.ingredients.some(i => i.name.includes(event.target.value)));
      console.log(this.showRecipes);
    }
  }

  async searchIngredient(event: any){
    
  }
  radioIngredientSelect(){
    this.searchByName = false;
    console.log(this.searchByName);
  }
  radioNameSelected(){
    this.searchByName = true;
    console.log(this.searchByName);
  }
}