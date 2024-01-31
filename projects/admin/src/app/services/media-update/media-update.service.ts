import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaUpdateService {
  // tworzymy nowego Subject
  private mediaUpdatedSource = new Subject<void>();
  // tworzymy strumien (Observable)
  mediaUpdated$ = this.mediaUpdatedSource.asObservable();

  constructor() {}

  // metoda emitująca zdarzenie za pomocą next(). emit informuje tez subskrybenta o aktualizacji
  mediaUploaded(): void {
    this.mediaUpdatedSource.next();
  }
}
