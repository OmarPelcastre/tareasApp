import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ CreateComponent ],
      providers: [
        AngularFirestore
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has 31 days', () => {
    expect(component.dias.length).toEqual(31);
  });
  it('should has 12 months', () => {
    expect(component.meses.length).toEqual(12);
  });

});
