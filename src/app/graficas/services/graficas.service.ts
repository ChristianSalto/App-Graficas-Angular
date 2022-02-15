import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getDataRedesSocial() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getDataRedesSocialDestructuring() {
    return this.getDataRedesSocial()
    .pipe(
      delay(1500),
      map((data) => {
        const labels = Object.keys(data);
        const values: any = Object.values(data);
        return { labels, values };
      })
    );
  }
}
