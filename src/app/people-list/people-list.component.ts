import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service'

@Component({
  selector: 'app-people-list',
  template: `
    <p>
      people-list Works!
    </p>
    <ul>
      <li *ngFor = 'let pers of people'>
        <a href="#" (click)="selectPerson(pers)">
          {{pers.firstname}}
        </a>
      </li>
    </ul>

    <app-person-details [person]="selectedPerson"></app-person-details>
  `,
  styleUrls: ['./people-list.component.scss'],
  providers: [PeopleService]
})

export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  selectedPerson : Person;

  constructor( private peopleService : PeopleService) { 
    this.people = peopleService.getall();
  }

  selectPerson(person){
      this.selectedPerson = person;
  }

  ngOnInit() {
  }

}
