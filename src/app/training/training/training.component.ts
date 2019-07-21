import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  isTrainingGoing:boolean=false;
  constructor(private trainExer:TrainingService) { }

  ngOnInit() {

    this.trainExer.currentExercise.subscribe(exercise=>{
        if(exercise){
          this.isTrainingGoing =true;
        }else{
          this.isTrainingGoing =false;
        }
    })
  }
  // onTrainingStarted(){
  //   this.isTrainingGoing=true;
  // }

  onCurrentTrainingExit(e){
       this.isTrainingGoing=false;
  }
}
