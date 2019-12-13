import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Activity } from '../Activity';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  //Crea un nuevo gato
  public createActivity(data: Activity){
    return this.firestore.collection('activities').add(data);
  }

  // createActivity(data) {
  //   return new Promise<any>((resolve, reject) =>{
  //       this.firestore
  //           .collection("activities")
  //           .add(data)
  //           .then(res => {}, err => reject(err));
  //   });
//}

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
