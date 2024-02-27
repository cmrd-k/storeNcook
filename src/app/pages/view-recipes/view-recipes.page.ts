import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.page.html',
  styleUrls: ['./view-recipes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewRecipesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
