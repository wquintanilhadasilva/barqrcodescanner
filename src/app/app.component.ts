import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barqrcodescanner';

  // tslint:disable-next-line:variable-name
  _typeCam: string;

  setType(typeCam: string): void {
    this._typeCam = typeCam;
  }

}
