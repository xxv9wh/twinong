import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaluploadComponent } from './modalupload.component';

describe('ModaluploadComponent', () => {
  let component: ModaluploadComponent;
  let fixture: ComponentFixture<ModaluploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaluploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaluploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
