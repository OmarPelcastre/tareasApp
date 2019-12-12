import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}


  //Crea un nuevo gato
  public createActivity(data: {nombre: string, url: string}) {
    return this.firestore.collection('activities').add(data);
  }
  //Obtiene un gato
  public getActivity(documentId: string) {
    return this.firestore.collection('activities').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los gatos
  public getActivities() {
    return this.firestore.collection('activities').snapshotChanges();
  }
  //Actualiza un gato
  public updateActivity(documentId: string, data: any) {
    return this.firestore.collection('activities').doc(documentId).set(data);
  }
}
