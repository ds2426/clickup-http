import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectData {
    constructor(private http: Http) {
    }
    getSomeProjects = (): Observable<any> => {
        return this.http.get('https://api.github.com/users/karan/repos').map(res => res.json());
    }
}