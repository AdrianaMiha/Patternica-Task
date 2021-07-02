import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/interfaces/product.interface';
import { Product } from '../../shared/modules/product.module';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.scss']
})
export class SupermarketComponent implements OnInit {
  foodList: Array<IProduct> = [
    { name: 'Яблуко', countNeeded: '5 шт.', countBought: 0, isReady: false },
    { name: 'Огірок', countNeeded: '3 шт.', countBought: 0, isReady: false },
    { name: 'Молоко', countNeeded: '1 л', countBought: 0, isReady: false },
    { name: 'Куряче філе', countNeeded: '1 кг', countBought: 0, isReady: false },
    { name: 'Хліб', countNeeded: '1 шт.', countBought: 0, isReady: false },
    { name: 'Яйця', countNeeded: '10 шт.', countBought: 0, isReady: false },
    { name: 'Помідори', countNeeded: '2 кг', countBought: 0, isReady: false },
  ];
  prod: string;
  count: string;
  countBought = 0;
  isReady = false;
  isChecked = false;
  show = true;
  listToBuy: Array<IProduct> = [];
  chosenFilter: string = '';
    
  constructor() { }

  ngOnInit(): void {
    this.checkList();
  }

  filterBy(str, event): void{
    document.querySelectorAll('.chooseFilter').forEach(elem => elem.classList.remove('active'))
    this.chosenFilter = str;
    let elem = event.currentTarget;
    elem.classList.add('active');
  };
  

  checkList(): void {
    this.listToBuy = this.foodList.filter(prod => prod.isReady === false);
  }

  changeStatus(food): void {
    food.isReady = !food.isReady;
    if (food.isReady) {
      food.countBought = parseInt(food.countNeeded);
    }
    else {
      food.countBought = '0';
    }    
    this.checkList();
  }

  addProd(): void {
    const newProd: IProduct = new Product(this.prod, this.count, this.countBought, this.isReady);
    this.foodList.push(newProd);
    this.prod = "";
    this.count = '';
    this.show = true;
    this.checkList();
  }

  deleteProduct(prod): void {
    this.foodList.splice(prod, 1);
    this.checkList();
  }

  checkAll(): void {
    if (this.isChecked === true) {
      this.foodList.forEach(product => {
        product.isReady = false;
        this.isChecked = false;
        product.countBought = 0;
      });
    }
    else {
      this.foodList.forEach(product => {
        product.isReady = true;
        this.isChecked = true;
        product.countBought = parseInt(product.countNeeded);
      });
    }
    this.checkList();
  }

  deleteAllProducts(): void {
    this.foodList = [];
    this.show = false;
    this.checkList();
  }

}
