import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewRecipePage } from './view-recipe.page';

describe('ViewRecipePage', () => {
  let component: ViewRecipePage;
  let fixture: ComponentFixture<ViewRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
