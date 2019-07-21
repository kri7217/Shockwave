import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from '../stop-training/stop-training.component';
import { TrainingService } from 'src/app/training.service';
import { Exercise } from 'src/app/exercise.model';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output('trainingExitStatus') trainingExitStatus = new EventEmitter<number>()
  trainingProgress: number = 0;
  interval;
  seconds: number;
  minutes: number;
  hours: number;
  currTraining: Exercise;

  constructor(private dialog: MatDialog, private trainSer: TrainingService) { }

  ngOnInit() {
    // this.trainSer.currentExercise.subscribe(res=>{
    //   if(res){
    //     this.currTraining=res
    //   }
    // })
    this.currTraining = this.trainSer.getTheCurrentExercise()
    this.startTimer();
  }

  startTimer() {
    let step = this.currTraining.duration / 100 * 1000
    this.interval = setInterval(() => {
      this.trainingProgress += 1;
      console.log(this.trainingProgress)

      if (this.trainingProgress >= 100) {
        clearInterval(this.interval);
        this.trainSer.completeExercise()
        console.log('cleared')
      }
    }, step);
  }
  onStopTraining() {
    clearInterval(this.interval);
    let dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progress: this.trainingProgress }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.trainSer.cancelledExercise(this.trainingProgress)
      } else {
        this.startTimer()
      }
    })

  }
  getSeconds() {
    this.seconds = this.trainingProgress % 60
  }

  getMinutes() {
    this.minutes = (Math.floor(this.trainingProgress / 60)) % 60
  }

  getHours() {
    this.hours = Math.floor((this.trainingProgress / 60) / 60)
  }

}
