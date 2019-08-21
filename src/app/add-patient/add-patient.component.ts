import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import { Patient } from './Patient';

let data: Patient;
// export interface DialogData {
//   firstname: string;
//   lastname: string;
// }

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  // animal: string;
  // name = "mar";
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPatientComponentDialog, {
      width: '60%',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log( lastname, 'The dialog was closed');
      // this.animal = result;
    });
  }
}

@Component({
  selector: 'app-add-patient-dialog',
  templateUrl: './add-patient-dialog.component.html',
})
export class AddPatientComponentDialog {
  
  constructor(
    public dialogRef: MatDialogRef<AddPatientComponentDialog>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}
  data = new Patient(1,'','');
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(patient) {
    console.log(patient);
  }

}