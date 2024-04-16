import { Component, Input } from '@angular/core';
import { CatRegister } from '../../models/catRegister.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {

  @Input()
  kittenData!: CatRegister;
}
