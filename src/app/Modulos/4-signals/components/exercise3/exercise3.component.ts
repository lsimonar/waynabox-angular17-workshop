import { Component, effect, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise3Service } from './exercise3.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'exercise3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercise3.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise3Component {

  trackUserName = '';
  userName = signal('');
    
  constructor(private exercise3Service: Exercise3Service) {

      //implementar el effect aqui
   }

  setUserName() {
    this.userName.set(this.trackUserName);
  }
}
