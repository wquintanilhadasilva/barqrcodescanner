import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarqrcodeComponent } from './barqrcode.component';

describe('BarqrcodeComponent', () => {
  let component: BarqrcodeComponent;
  let fixture: ComponentFixture<BarqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
