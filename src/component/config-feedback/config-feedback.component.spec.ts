import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFeedbackComponent } from './config-feedback.component';

describe('ConfigFeedbackComponent', () => {
  let component: ConfigFeedbackComponent;
  let fixture: ComponentFixture<ConfigFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
