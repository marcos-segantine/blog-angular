import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHomeComponent } from './articles.component';

describe('ArticlesHomeComponent', () => {
  let component: ArticlesHomeComponent;
  let fixture: ComponentFixture<ArticlesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
