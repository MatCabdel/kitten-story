import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatRegister } from '../../models/catRegister.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {

  @Input()
  kittenData!: CatRegister;

  @Output()
  sendAdoptedCat : EventEmitter<CatRegister> = new EventEmitter();


  onAdopt() {
    const adoptedCat = this.kittenData;
    this.sendAdoptedCat.emit(adoptedCat)
  }
}
