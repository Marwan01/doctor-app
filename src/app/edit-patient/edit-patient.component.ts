import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Patient } from '../add-patient/Patient';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


export var clickedPatient: Patient;

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {
	@Input() cp: Patient;
	constructor(public dialog: MatDialog) {}
	openDialog(): void {
		this.dialog.open(EditPatientComponentDialog, {
			width: '40%',
			minHeight: '400px',
		});
	}

}

@Component({
	selector: 'edit-add-patient-dialog',
	templateUrl: './edit-patient-dialog.component.html',
})
export class EditPatientComponentDialog {

  patientsCollection: AngularFirestoreCollection<Patient>;
  patients: Observable<Patient[]>;
  form;
  checked = false;
  ngOnInit() {
  	this.patientsCollection = this.db.collection('patients');
  	this.patients = this.patientsCollection.valueChanges();
  	this.form = new FormGroup({
  		id: new FormControl(),
  		firstname: new FormControl('', Validators.compose([Validators.required,
  			Validators.pattern('[\\w\\-\\s\\/]+')])),
  		lastname: new FormControl('', Validators.compose([Validators.required,
  			Validators.pattern('[\\w\\-\\s\\/]+')])),
  		diagnosis: new FormControl('', Validators.compose([Validators.required,
  			Validators.pattern('[\\w\\-\\s\\/]+')])),
  		notes: new FormControl(),
  		examinedOn: new FormControl(null),
  		examined: new FormControl(false),
  	});
  }
  constructor(private db: AngularFirestore,
              public dialogRef: MatDialogRef<EditPatientComponentDialog>,
  ) {}
  onNoClick(): void {
  	this.dialogRef.close();
  }
   onEdit(patient) {
	   console.log(this.dialogRef)
	this.db.collection('patients')
    .get()
    .subscribe((snapshot) => {
      snapshot.forEach(doc => {
		  if(patient.firstname === doc.data().firstname && patient.lastname === doc.data().lastname && patient.diagnosis === doc.data().diagnosis){
			console.log(doc.data())
			this.db.collection('patients').doc(doc.id).set({
				firstname: patient.firstname,
				lastname: patient.lastname,
				diagnosis: patient.diagnosis,
				examinedOn: patient.examinedOn,
				examined: patient.examined,
				notes: patient.notes
			}).then(function() {
				console.log("Document successfully written!");
			})
			.catch(function(error) {
				console.error("Error writing document: ", error);
			});
		  }
		});
	});
}

}