import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = {};
  isVisible: boolean = false;
  card_id: string = ""

  constructor(private service: CharactersService) { }

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe(characters => {
      this.characters = characters.results;
    });
  }

  showDetails(index: string): void {
    this.card_id = document.getElementsByTagName('mat-card')[parseInt(index) - 1].id
    this.isVisible = !this.isVisible;
   }
}
