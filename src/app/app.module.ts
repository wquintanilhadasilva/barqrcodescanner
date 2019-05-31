import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { BarqrcodeComponent } from './barqrcode/barqrcode.component';


@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent,
    BarcodeComponent,
    BarqrcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarecodeScannerLivestreamModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
