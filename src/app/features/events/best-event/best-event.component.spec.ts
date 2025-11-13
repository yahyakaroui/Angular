import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestEventComponent } from './best-event.component';

describe('BestEventComponent', () => {
  let component: BestEventComponent;
  let fixture: ComponentFixture<BestEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
