import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NgModule} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Patient } from './Patient';

let checked=false;
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddPatientComponentDialog, {
      width: '60%',
      minHeight: '400px',
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
      diagnosis: new FormControl(),
      notes: new FormControl(),
      date: new FormControl(),
      examined: new FormControl(false)
    });
  }
  constructor(
    public dialogRef: MatDialogRef<AddPatientComponentDialog>,
    ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(patient) {
    console.log(patient);
  }
  activate() {
    checked=!checked;
    console.log(checked)
  }

}