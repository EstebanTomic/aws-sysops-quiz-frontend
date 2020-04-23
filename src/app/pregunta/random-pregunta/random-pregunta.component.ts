import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../pregunta.service';
import { Pregunta } from '../pregunta';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-random-pregunta',
  templateUrl: './random-pregunta.component.html',
  styleUrls: ['./random-pregunta.component.css']
})
export class RandomPreguntaComponent implements OnInit {

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  preguntas: any = [];
  respuesta: string;
  muestra: boolean;
  respondio: boolean;
  respuestaCorrecta: string;
  mySubscription: any;
  loading = false;
  constructor(private service: PreguntaService) { }


  ngOnInit() {
    this.loading = true;
    this.muestra = false;
    this.respondio = false;
    this.leeRandom();
    this.respuestaCorrecta = this.preguntas.opcionCorrecta;
    console.log('preguntas:',  this.preguntas);
  }

  // Get employees list
    leeRandom() {
      return this.service.getLife().pipe(
        finalize(() => this.loading = false)
      ).subscribe((data: {}) => {
        this.preguntas = data;
        console.log('data:', data);
        console.log('this.preguntas:', this.preguntas);
      });
    }

    leeRandom2() {
      return this.service.getLife().subscribe((data: {}) => {
        for (const d of (data as any)) {
        this.preguntas.push({
          correcta: d.correcta,
          idPregunta: d.idPregunta
        });
        }
        console.log(this.preguntas);
      });
    }

    responder() {
      if (this.respuesta === this.preguntas.opcionCorrecta) {
        this.muestra = true;
        this.respondio = true;
      } else {
        this.muestra = false;
        this.respondio = true;
      }
    }

      refrescar() {
        this.muestra = false;
        this.respondio = false;
        this.leeRandom();
        this.respuestaCorrecta = this.preguntas.opcionCorrecta;
        console.log('preguntas:',  this.preguntas);
        }
    }


  /*
  ngOnInit(): void {

    this.service.getRandomPregunta()
    .subscribe(
      (data) => { // Success
        this.preguntas = data['preguntas'];
      },
      (error) => {
        console.error(error);
      }
    );
    console.log('scope is', this.preguntas);
  }
*/
