import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutrePagreComponent } from './autre-pagre.component';

describe('AutrePagreComponent', () => {
  let component: AutrePagreComponent;
  let fixture: ComponentFixture<AutrePagreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutrePagreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutrePagreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
