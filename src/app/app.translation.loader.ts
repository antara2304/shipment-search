import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class ShipmentTranslateHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    public prefix: string = './assets/i18n/',
    public suffix: string = '.json'
  ) {}
  public getTranslation(lang: string): Observable<any> {
    return this.http.get('http//localhost:4200', { withCredentials: true });
  }
}
