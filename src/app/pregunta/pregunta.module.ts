import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPreguntaComponent } from './view-pregunta/view-pregunta.component';
import { RandomPreguntaComponent } from './random-pregunta/random-pregunta.component';
import { TestPreguntaComponent } from './test-pregunta/test-pregunta.component';
import {MatButtonModule} from '@angular/material/button';

import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from '../app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { PreguntaService } from './pregunta.service';
import { FormsModule } from '@angular/forms';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ViewPreguntaComponent, RandomPreguntaComponent, TestPreguntaComponent, LoadingBarComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [
    ViewPreguntaComponent,
  ],
  providers: [PreguntaService]
})
export class PreguntaModule { }
