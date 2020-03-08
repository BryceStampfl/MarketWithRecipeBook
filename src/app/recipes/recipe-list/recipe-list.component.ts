import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test description',
      'https://bit.ly/2THlG5K'),
    new Recipe('Test Recipe', 'This is a test description',
      'https://bit.ly/2THlG5K'),
    new Recipe('Test Recipe', 'This is a test description',
      'https://bit.ly/2THlG5K'),
    new Recipe('Test Recipe', 'This is a test description',
      'https://bit.ly/2THlG5K')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
