import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private firestoreService: FirestoreService
  ){

  }

  ngOnInit() {
    
  }
  title = 'ListaActividades';

  
}


