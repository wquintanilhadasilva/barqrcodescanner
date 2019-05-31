import { Component, VERSION, OnInit, ViewChild} from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

/**
 * "@zxing/library": "^0.11.0",
 *  "@zxing/ngx-scanner": "^1.5.1"
 */

@Component({
  selector: 'app-barqrcode',
  templateUrl: './barqrcode.component.html',
  styleUrls: ['./barqrcode.component.scss']
})
export class BarqrcodeComponent implements OnInit {

  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;

  clearResult(): void {
    this.qrResultString = null;
  }

  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.availableDevices = devices;
      this._selectBackfaceCamera(devices);
    });
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  stateToEmoji(state: boolean): string {

    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };

    return states['' + state];
  }

  private _selectBackfaceCamera(devices: MediaDeviceInfo[]) {
    // selects the devices's back camera by default
    for (const device of devices) {
      if (/back|rear|environment/gi.test(device.label)) {
        this.currentDevice = device;
        break;
      }
    }
  }

}
