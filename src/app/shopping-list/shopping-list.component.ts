import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Aaaaa', 1),
    new Ingredient('Bbbbb', 6),
  ];

  constructor() { }

  ngOnInit() {
  }

}
