import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Activity';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
