import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Activity';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  dias: string[] = [];
  meses: string[] = [];
  horas: string[] = [];
  tareas: string[] = [];
  activity: Activity;

  dia;
  hora;
  mes;

  miFormulario;



  constructor(
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    private router: Router
  ) {
    this.miFormulario = this.fb.group({
      nombre: [''],
      telefonos: this.fb.array([this.fb.group({ tarea: [''] })])
    });
  }

  ngOnInit() {
    this.initDias();
    this.initHoras();
    this.initMeses();
    this.tareas = [];
    this.tareas.push("");
  }


  onSubmit(formValue: any) {

    this.activity = {
      activity: formValue.nombre,
      dia: this.dia,
      hora: this.hora,
      mes: this.mes,
      tareas: formValue.telefonos

    }
    // activity.activity = formValue.nombre;
    // //activity.tareas = formValue.telefonos;
    // activity.tareas = ['hola', 'prueba']
    // activity.dia = this.dia;
    // activity.hora = this.hora;
    // activity.mes = this.mes;
    // console.log(activity);

    this.firestoreService.createActivity(this.activity).then(res => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }




  get getTelefonos() {
    return this.miFormulario.get('telefonos') as FormArray;
  }

  addTelefono() {
    const control = <FormArray>this.miFormulario.controls['telefonos'];
    control.push(this.fb.group({ tarea: [] }));
  }

  removeTelefono(index: number) {
    const control = <FormArray>this.miFormulario.controls['telefonos'];
    control.removeAt(index);
  }

  addTarea() {
    this.tareas.push("");
  }

  initDias() {

    for (let index = 1; index < 32; index++) {
      this.dias.push(String(index));
    }
  }
  initMeses() {
    this.meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ]
  }

  initHoras() {
    for (let index = 1; index < 13; index++) {
      this.horas.push(String(index) + ':00 pm')
    }


    for (let index = 1; index < 13; index++) {
      this.horas.push(String(index) + ':00 am')
    }
  }


  setDia(dia) {
    console.log(dia);
    this.dia = dia;
  }
  setMes(mes) {
    this.mes = mes;
  }
  setHora(hora) {
    this.hora = hora;
  }

}
