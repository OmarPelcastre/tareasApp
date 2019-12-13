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



  public createActivity(data: Activity) {
    return this.firestore.collection('activities').add(data);
  }


  public getActivity(documentId: string) {
    return this.firestore.collection('activities').doc(documentId).snapshotChanges();
  }

  public getActivities() {
    return this.firestore.collection('activities').snapshotChanges();
  }

  public updateActivity(documentId: string, data: any) {
    return this.firestore.collection('activities').doc(documentId).set(data);
  }

  public deleteActivity(documentId: string){
    return this.firestore.collection('activities').doc(documentId).delete();
  }


}
