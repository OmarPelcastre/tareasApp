import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
