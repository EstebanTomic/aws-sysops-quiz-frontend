import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pregunta } from './pregunta';


@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  // Define API
  apiURL = 'http://localhost:8080/pregunta';

  constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }


   getRandomPregunta(): Observable<Pregunta> {
    return this.http.get<Pregunta>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getLife() {
    return this.http.get('http://localhost:8080/pregunta');
  }

   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
