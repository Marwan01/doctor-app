import { Component, OnInit, Input} from '@angular/core';
import { Patient } from '../add-patient/Patient';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: Patient;

  constructor( private db: AngularFirestore) {
  }
  ngOnInit() {
  }

  onDelete(patient) {
    this.db.collection('patients')
    .get()
    .subscribe((snapshot) =>{
      snapshot.forEach(doc => {
        if(patient.firstname === doc.data().firstname && patient.lastname === doc.data().lastname && patient.diagnosis === doc.data().diagnosis) {
          this.db.collection('patients').doc(doc.id).delete()
        }
      });
    })
  }
}
