import { Component } from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import { PeopleService } from '../shared/index';

/**
 * This class represents the lazy loaded TestComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css'],
  directives: [AlertComponent, DATEPICKER_DIRECTIVES]
})
export class TestComponent { 
  date: Date = new Date();
  
  /**
   * Creates an instance of the Test with the injected
   * PeopleService.
   *
   * @param {PeopleService} peopleService - The injected PeopleService.
   */
  constructor(public peopleService: PeopleService) {}
  
}
