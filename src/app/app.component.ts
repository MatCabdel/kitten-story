import { Component } from '@angular/core';
import { CatRegister } from './models/catRegister.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  catList: CatRegister[]= []

  onReceiveNewCat(event: CatRegister): void {

    this.catList.push(event);
    console.log(this.catList)
  }
  }

