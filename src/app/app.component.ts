import { Component } from '@angular/core';
import { CatRegister } from './models/catRegister.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  catList: CatRegister[] = [
    {
      name: 'José',
      race: 'Gouttiere',
      birthday: '14/08/90',
      picture: 'https://picsum.photos/id/237/200/300',
    },
    {
      name: 'Bobo',
      race: 'Siamois',
      birthday: '14/09/2020',
      picture: 'https://picsum.photos/id/275/200/300',
    },
  ];

  adoptedCatList: CatRegister[]= [];

  onReceiveNewAdoptedCat(event: CatRegister): void {
    this.adoptedCatList.push(event);
    this.catList = this.catList.filter((cat)=> cat.name !== event.name)
    console.log('chat adopté:', this.adoptedCatList)
  }

  onReceiveNewCat(event: CatRegister): void {
    this.catList.push(event);
    console.log(this.catList);
  }
}
