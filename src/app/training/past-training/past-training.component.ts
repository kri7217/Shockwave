import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Exercise } from 'src/app/exercise.model';
import { TrainingService } from 'src/app/training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Date', 'Name', 'Calories', 'Duration', 'State']
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private trainingSer: TrainingService) {
    this.dataSource.data = this.trainingSer.getCompletedOrCancelledExercises()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort    
    this.dataSource.paginator=this.paginator
  }

  ngOnInit() {;
  }

}
