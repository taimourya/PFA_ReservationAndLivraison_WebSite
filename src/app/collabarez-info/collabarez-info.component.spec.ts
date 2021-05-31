import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabarezInfoComponent } from './collabarez-info.component';

describe('CollabarezInfoComponent', () => {
  let component: CollabarezInfoComponent;
  let fixture: ComponentFixture<CollabarezInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollabarezInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabarezInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
