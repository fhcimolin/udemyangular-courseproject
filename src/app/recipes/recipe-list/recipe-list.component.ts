import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test','Decription',"https://lh3.googleusercontent.com/ogw/ADea4I4pVVqd3WE_fOJ2Q6k7ngg6zd6e8rhF4Q-dLqWHSw=s32-c-mo"),
    new Recipe('Test','Decription',"https://lh3.googleusercontent.com/ogw/ADea4I4pVVqd3WE_fOJ2Q6k7ngg6zd6e8rhF4Q-dLqWHSw=s32-c-mo"),
    new Recipe('Test','Decription',"https://lh3.googleusercontent.com/ogw/ADea4I4pVVqd3WE_fOJ2Q6k7ngg6zd6e8rhF4Q-dLqWHSw=s32-c-mo"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
