import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import { Patient } from './Patient';
import { FormGroup, FormControl } from '@angular/forms'


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPatientComponentDialog, {
      width: '60%',
      minHeight: '400px',
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
  form;
  ngOnInit() {
    this.form = new FormGroup({ 
      id: new FormControl(0),
      firstname: new FormControl(),
      lastname: new FormControl(),
    });
  }
  constructor(
    public dialogRef: MatDialogRef<AddPatientComponentDialog>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(patient) {
    console.log(patient);
  }

}