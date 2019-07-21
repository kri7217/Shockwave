import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from 'src/app/training.service';
import { Exercise } from 'src/app/exercise.model';

@Component({
  selector: 'app-new-trainings',
  templateUrl: './new-trainings.component.html',
  styleUrls: ['./new-trainings.component.css']
})
export class NewTrainingsComponent implements OnInit {
@Output('newTrainingStarted') startedTraining= new EventEmitter()
  exercises:Exercise[];
  selectedExercise:string
  constructor(private trainSer:TrainingService) {
    this.exercises = this.trainSer.getAvailableExercises()
   }

  ngOnInit() {
  }

  onTrainingSelected(selectedExercise){
this.selectedExercise=selectedExercise
  }

  startTraining(e){
//this.startedTraining.emit();
this.trainSer.startNewExercise(this.selectedExercise)
  }

}
