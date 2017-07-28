import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PeopleService {

  getall() : Person[] {
    return [
      {id: 1, firstname: 'Luke* Skywalker', lastname: 'khanna', weight: 70},
      {id: 42, firstname: 'Gaurav', lastname: 'khanna', weight: 70}
  ]};

  constructor() { }

}
