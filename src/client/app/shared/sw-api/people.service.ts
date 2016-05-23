import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

export class People {

  constructor(private name:string, private eyeColor:string, private_hairColor: string) {}
}

/**
 * This class provides the Star Wars People service with its methods.
 */
@Injectable()
export class PeopleService {
     
  private peoples: People[] = [];  
  
  private people: People; 
   
  /**
   * Contains the currently pending requests.
   * @type {Observable<People[]>}
   */
  private requestAll: Observable<People[]>;
  
  private requestOne: Observable<People>;

  /**
   * Creates a new PeopleService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http, @Inject('API_BASE_URL') private apiBaseUrl: string ) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource. If there was a previous successful request
   * (the local names array is defined and has elements), the cached version is returned
   * @return {string[]} The Observable for the HTTP request.
   */
  getAll(): Observable<People[]> {
    if (this.peoples && this.peoples.length) {
      return Observable.from([this.peoples]);
    }
    if (!this.requestAll) {
      this.requestAll = this.http.get(this.apiBaseUrl + '/people')
        .map((response: Response) => response.json().results)
        .map((data: People[]) => {
          this.requestAll = null;
          return this.peoples = data;
        });
    }
    return this.requestAll;
  }
}