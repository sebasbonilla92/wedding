import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingThereComponent } from './getting-there.component';

describe('GettingThereComponent', () => {
  let component: GettingThereComponent;
  let fixture: ComponentFixture<GettingThereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettingThereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GettingThereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
