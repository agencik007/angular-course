import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  show = false;
  buttonClickedCounter = [];

  onButtonClick(){
    this.show = !this.show;
    this.buttonClickedCounter.push(this.buttonClickedCounter.length + 1);
    
  }
}
