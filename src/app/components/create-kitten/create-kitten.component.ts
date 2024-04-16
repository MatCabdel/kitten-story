import { Component, EventEmitter, Output } from '@angular/core';
import { CatRegister } from '../../models/catRegister.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {
    newCat : CatRegister = {
    name: "",
    race: "",
    birthday: "",
    picture: ""
  }

  @Output()
    sendCat : EventEmitter<CatRegister> = new EventEmitter();
  
    createCat(): void {
      const catCreate = this.newCat
       this.sendCat.emit(catCreate);
      console.log(catCreate)
    }
}
