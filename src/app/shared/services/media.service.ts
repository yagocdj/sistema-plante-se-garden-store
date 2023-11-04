import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private matches = new ReplaySubject<boolean>(1);
  public match$ = this.matches.asObservable();

  constructor(
    @Inject('query') public readonly query: string
  ) {
    if (window) {
      const mediaQueryList = window.matchMedia(this.query);
      const listener = (event: any) => this.matches.next(event.matches);
      listener(mediaQueryList);
      mediaQueryList.addEventListener('change', listener);
    }
  }
}
