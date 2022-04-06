import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() status: any;
  @Input() species: any;
  @Input() origin: any;
  @Input() gender: any;
  @Input() location: any;


  constructor() { }

  ngOnInit(): void {
  }

}
