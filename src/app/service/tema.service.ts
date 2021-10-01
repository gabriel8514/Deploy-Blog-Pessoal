import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://bloggabrielreis.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://bloggabrielreis.herokuapp.com/tema/${id}`, this.token) 
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>("https://bloggabrielreis.herokuapp.com/tema", tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>("https://bloggabrielreis.herokuapp.com/tema", tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://bloggabrielreis.herokuapp.com/tema/${id}`, this.token)
  }
}

// CODIGO DO THIAGO 

// import { environment } from './../../environments/environment.prod';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Tema } from '../model/Tema';

// @Injectable({
//   providedIn: 'root'
// })
// export class TemaService {

//   constructor(private http: HttpClient) { }

//   token = {
//     headers: new HttpHeaders().set('Authorization', environment.token)
//   }

//   getAllTema():Observable<Tema[]>{
//     return this.http.get<Tema[]>('https://turma26backend.herokuapp.com/temas', this.token)
//   }

//   getByIdTema(id: number): Observable<Tema>{
//     return this.http.get<Tema>(`https://turma26backend.herokuapp.com/temas/${id}`,this.token )
//   }
//   //template literals (passar uma rota com string e variavel ao mesmo tempo)
  
//   postTema(tema: Tema): Observable<Tema>{
//     return this.http.post<Tema>('https://turma26backend.herokuapp.com/temas',tema, this.token)
//   }

//   putTema(tema: Tema): Observable<Tema>{
//     return this.http.put<Tema>('https://turma26backend.herokuapp.com/temas',tema, this.token)
//   }

//   deleteTema(id: number){
//     return this.http.delete(`https://turma26backend.herokuapp.com/temas/${id}`, this.token)
//   }

// }