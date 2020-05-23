import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureOutputComponent } from './signature-output.component';

describe('SignatureOutputComponent', () => {
  let component: SignatureOutputComponent;
  let fixture: ComponentFixture<SignatureOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
