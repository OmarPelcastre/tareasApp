import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './services/firestore.service';
import { Activity } from './Activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activities: Activity[];

  constructor(
    private firestoreService: FirestoreService
  ){

  }



  ngOnInit() {
    
    this.getActivities();
    console.log(this.activities)
    
  }
  title = 'ListaActividades';

  getActivities(){
    this.firestoreService.getActivities().subscribe(async data => {
      this.activities = await data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Activity
      })
    })
    console.log(this.activities)
  }


  imprimir(){
    console.log(this.activities);
  }

}


