import { Component } from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css'],
  directives:[AlertComponent, DATEPICKER_DIRECTIVES]
})
export class TestComponent { 
  date: Date = new Date();
}
