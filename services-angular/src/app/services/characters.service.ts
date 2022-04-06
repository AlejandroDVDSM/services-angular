import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private api = "https://rickandmortyapi.com/api/character"

  constructor(private http: HttpClient) { }

  public getAllCharacters(): Observable<any> {
    return this.http.get(this.api)
  }
}
