import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PreguntaModule } from './pregunta/pregunta.module';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';

import { Routes, RouterModule } from '@angular/router';
import { RandomPreguntaComponent } from './pregunta/random-pregunta/random-pregunta.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { PreguntaService } from './pregunta/pregunta.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random', component: RandomPreguntaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PreguntaModule,
    RouterModule.forRoot(rutas, {
      onSameUrlNavigation: 'reload'
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [PreguntaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
