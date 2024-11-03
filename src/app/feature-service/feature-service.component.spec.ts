import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureServiceComponent } from './feature-service.component';

describe('FeatureServiceComponent', () => {
  let component: FeatureServiceComponent;
  let fixture: ComponentFixture<FeatureServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
