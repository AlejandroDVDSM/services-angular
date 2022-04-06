import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = {};
  info: any = {};
  isVisible: boolean = false;
  card_id: string = ""

  constructor(private service: CharactersService) { }

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe(characters => {
      this.characters = characters.results;
      this.info = characters.info;
    });
  }

  showDetails(card_id: string): void {
    this.card_id = card_id
    this.isVisible = !this.isVisible;
  }

  nextPage() {
    this.service.setAPI(this.info.next).subscribe(characters => {
      this.characters = characters.results;
      this.info = characters.info;
    })
  }
  
  prevPage() {
    this.service.setAPI(this.info.prev).subscribe(characters => {
      this.characters = characters.results;
      this.info = characters.info;
    })
  }
}
  