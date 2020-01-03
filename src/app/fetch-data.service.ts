import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FetchDataService {

  constructor(private http: HttpClient) { }

  data$;

  ngOnInit() {
    this.fetchProjects();
  }
  fetchProjects(): Observable<Object> {
    return this.http.get('/assets/data/projectsDatabase.json');

  }
  projectsFetched() {
    this.data$ = this.fetchProjects()
  }
}
