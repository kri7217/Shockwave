import { Exercise } from './exercise.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrainingService {
    private availableExercises: Exercise[];
    private finishedExercises:Exercise[]=[]
    private currentlyRunningExercise: Exercise;
    currentExercise = new Subject<Exercise>()
    constructor() {
        this.availableExercises = [
            { calories: 350, duration: 30, id: 'cycling', name: 'Cycling' },
            { calories: 400, duration: 30, id: 'jog', name: 'Jogging' },
            { calories: 300, duration: 60, id: 'walking', name: 'Walking' }
        ]
    }

    startNewExercise(selectedExercise: string) {
        this.currentlyRunningExercise = this.availableExercises.find(ex => ex.id == selectedExercise)
        this.currentExercise.next({ ...this.currentlyRunningExercise })
    }

    completeExercise(){
        this.finishedExercises.push({...this.currentlyRunningExercise,date:new Date(),state:'Completed'})
        this.currentlyRunningExercise=null;
        this.currentExercise.next(null)
    }

    cancelledExercise(progress:number){
        this.finishedExercises.push({...this.currentlyRunningExercise,
            date:new Date(),
            duration: this.currentlyRunningExercise.duration *(progress/100),
            calories:this.currentlyRunningExercise.calories *(progress/100),
            state:'Cancelled'})
        this.currentlyRunningExercise=null;
        this.currentExercise.next(null)
    }

    getAvailableExercises() {
        return this.availableExercises.slice()
    }

    getCompletedOrCancelledExercises(){
        return this.finishedExercises.slice();
    }

    getTheCurrentExercise() {
        return { ...this.currentlyRunningExercise }
    }
}