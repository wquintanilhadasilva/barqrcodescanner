import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

/**
 * "core-js": "^2.5.4",
 * "ngx-barcode-scanner": "0.0.6",
 */

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit, AfterViewInit {

  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;

  constructor() { }

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  ngOnInit(): void {

  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
  }

}
