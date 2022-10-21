import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroHomeComponent } from './intro-home.component';

describe('IntroHomeComponent', () => {
  let component: IntroHomeComponent;
  let fixture: ComponentFixture<IntroHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
