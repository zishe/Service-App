import { Component, OnInit } from '@angular/core';

import { Dish } from '../models/dish/dish';
import { DishService } from '../models/dish/dish.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-order',
  template: `
    <br/>
    Find a Dish:
    <div>
      <input type="text" placeholder="type a name" value="">
    </div>
    <li *ngFor="let dish of dishes">
      {{dish.name}}
    </li>
  `,
  styles: [],
  providers: [DishService]
})
export class OrderComponent implements OnInit {
  newAccount: Dish = new Dish();
  dishes: Dish[] = [];
  errorMessage: String = null;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.findAll()
      .subscribe(dishes => this.dishes = dishes, error => this.errorMessage = error);
  }

}
