import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = {};
  visibility: boolean = false;
  id: string = "";

  constructor(private service: CharactersService) { }

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe(characters => {
      this.characters = characters.results;
    });
  }

  showDetails(character_id: string): void {
    this.id = character_id;
    this.visibility = !this.visibility;
  }
}
