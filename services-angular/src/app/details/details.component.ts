import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() character: any;
  @Input() isVisible: any;
  @Input() card_id: any;

  constructor() { }

  ngOnInit(): void { }

}
