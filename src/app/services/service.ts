
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TestService {
    private testURL = 'https://jsonplaceholder.typicode.com/users';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    testService(): Observable<any> {
        console.log('Inside test service ===>>>');
        return this.http.get(this.testURL)
            .pipe(
                map((rss) => {
                    console.log('Inside map----');
                    console.log(rss);
                    return rss;
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}