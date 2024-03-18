import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ingredient, Recipe } from 'src/app/models/interfaces';
import { RecipeService } from 'src/app/services/recipe.service';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-view-recipe',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './view-recipe.page.html',
  styleUrls: ['./view-recipe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewRecipePage implements OnInit {
  ingredients: Ingredient[] =[{name: "Tomaten",amount: 110, unit: "g"}];
  moment = dayjs();
  recipe: Recipe = {author: "admin", name: "", category: "", ingredients: this.ingredients, instructions: [""], searchTerm: [], dateTs: this.moment.unix()}
  


  constructor(private recService: RecipeService, private modalCtrl: ModalController, private router: Router, public locationStrategy: LocationStrategy) {
  }

  ngOnInit(
  ) {

  }
  addIngredient(){
    let blankIngredient:Ingredient = {name: "", amount: 0, unit: ""};
    this.ingredients.push(blankIngredient);
    console.log(this.ingredients);
  }
  removeIngredient(id: number){
    this.ingredients.splice(id, 1)
  }
  createRecipe(){
    console.log(this.recipe);
    this.ingredients.forEach((ing)=>{
      this.recipe.searchTerm.push(ing.name);
    })
    this.recService.createRecipe(this.recipe);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  confirm() {
    return this.modalCtrl.dismiss(this.createRecipe(), 'confirm');
  }
  navBack(){
    this.locationStrategy.back()
  }
}
