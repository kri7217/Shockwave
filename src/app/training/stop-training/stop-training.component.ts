import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stop-training',
  template: `<h2 mat-dialog-title>Completed {{passedData.progress}}%  .Do you want to end ??</h2>
                        <div mat-dialog-actions>
                        <button mat-button [mat-dialog-close]='false'>No</button>
                        <button mat-button [mat-dialog-close]='true'>Yes</button>
                        </div>`,
  styleUrls: ['./stop-training.component.css']
})
export class StopTrainingComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<StopTrainingComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData:number) { }

  ngOnInit() {
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
