import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Exercise3Service {

  getTimeWithUser = (user: string) => new Observable<string>(observer => {
    setTimeout(() => {
      
    fetch('https://worldtimeapi.org/api/timezone/Etc/UTC')
      .then(response => response.json())
      .then(data => {
        const result = `User: ${user}, Time: ${data.datetime}`;
        observer.next(result);
        observer.complete();
      })
      .catch(error => observer.error(error));
    }, 3000);
  });

  saveUser(user: string) {
    return this.getTimeWithUser(user);
  }
}
