import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

interface Patient {
  id: number,
  firstname: string,
  lastname: string,
  diagnosis: string, 
  examined: boolean,
  examinedOn?: Date,
  notes?: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  patientsCollection: AngularFirestoreCollection<Patient>
  patients: Observable<Patient[]>;

  constructor( private db: AngularFirestore) {
  }

  ngOnInit() {
    this.patientsCollection = this.db.collection('patients')
    this.patients = this.patientsCollection.valueChanges()
  }


  title = 'Doctor App';
}
