import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// https://github.com/schmich/instascan
declare var Instascan: any;

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  @ViewChild('webcam')
  webcam: ElementRef;

  contentScan: string;
  showVideo = false;

  constructor() { }

  ngOnInit() {
  }

  configCam(): void {

    this.contentScan = 'Nenhum';

    const video: HTMLVideoElement = this.webcam.nativeElement;

    // tslint:disable-next-line:object-literal-shorthand
    const scanner = new Instascan.Scanner({ video: video, scanPeriod: 1, refractoryPeriod: 3000, continuous: true});

    scanner.addListener('scan', content => {
      console.log('scan');
      this.contentScan = content;
      console.log(this.contentScan);
      this.showVideo = false;
      scanner.stop();
    });

    Instascan.Camera.getCameras().then(cameras => {
      console.log(cameras);
      if (cameras.length > 0) {
        console.log(cameras[0]);
        console.log('start');
        scanner.start(cameras[0]);
        this.showVideo = true;
      } else {
        console.error('No cameras found.');
      }
    }).catch(e => {
      console.error(e);
      scanner.stop();
      this.contentScan = e;
    });
  }

}
