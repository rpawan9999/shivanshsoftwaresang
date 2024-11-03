import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFeaturesComponent } from './more-features.component';

describe('MoreFeaturesComponent', () => {
  let component: MoreFeaturesComponent;
  let fixture: ComponentFixture<MoreFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
