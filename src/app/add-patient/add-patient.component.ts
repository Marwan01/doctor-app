import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms'


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
  checked = false;
  ngOnInit() {
    this.form = new FormGroup({ 
      id: new FormControl(),
      firstname: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')])),
      lastname: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')])),
      diagnosis: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')])),
      notes: new FormControl(),
      date: new FormControl(null),
      examined: new FormControl(false),
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

}