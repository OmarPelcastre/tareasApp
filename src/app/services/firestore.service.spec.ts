import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

describe('FirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
    ],
    providers: [
      AngularFirestore
    ],
  }));

  it('should be created', () => {
    const service: FirestoreService = TestBed.get(FirestoreService);
    expect(service).toBeTruthy();
  });
});
