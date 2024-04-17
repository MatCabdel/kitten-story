import { Component, Input } from '@angular/core';
import { CatRegister } from '../../models/catRegister.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.scss'
})
export class UserKittenComponent {

  @Input()
  adoptedCatData!: CatRegister;

  }
