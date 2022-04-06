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
      this.characters = characters.results; // Get all the characters of the actual page
      this.info = characters.info; // Get all the info about the actual page
    });
  }

  showDetails(card_id: string): void { // Display details
    this.card_id = card_id
    this.isVisible = !this.isVisible;
  }

  nextPage() { // Navigate to the next page of the API
    this.service.setAPI(this.info.next).subscribe(characters => {
      this.characters = characters.results;
      this.info = characters.info;
    })
  }
  
  prevPage() { // Navigate to the previos page of the API
    this.service.setAPI(this.info.prev).subscribe(characters => {
      this.characters = characters.results;
      this.info = characters.info;
    })
  }
}
  