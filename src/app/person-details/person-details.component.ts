import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../person";

@Component({
  selector: 'app-person-details',
  template: `
   <section *ngIf="person">
    <h2>You selected: {{person.firstname}}</h2>
    <h3>Description</h3>
    <p>
       {{person.firstname}} weights {{person.weight}} and is {{person.lastname}} tall.
    </p>
  </section>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  
  @Input() person : Person;
  constructor() { }

  ngOnInit() {
  }

}
