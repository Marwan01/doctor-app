import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  patients: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.patients = db.collection('patients').valueChanges();
  }
  title = 'Doctor App';
}
