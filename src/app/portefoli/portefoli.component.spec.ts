import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefoliComponent } from './portefoli.component';

describe('PortefoliComponent', () => {
  let component: PortefoliComponent;
  let fixture: ComponentFixture<PortefoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortefoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
