import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ingredients } from 'src/app/models/interfaces';

@Component({
  selector: 'app-view-recipe',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './view-recipe.page.html',
  styleUrls: ['./view-recipe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewRecipePage implements OnInit {
  ingredients: Ingredients[] =[{name: "Tomaten",amount: 110, unit: "g"}];
  constructor() { }

  ngOnInit() {
  }
  addIngredient(){
    let blankIngredient:Ingredients = {name: "", amount: 0, unit: ""};
    this.ingredients.push(blankIngredient);
    console.log(this.ingredients);
  }
  removeIngredient(id: number){
    this.ingredients.splice(id, 1)
  }
}
