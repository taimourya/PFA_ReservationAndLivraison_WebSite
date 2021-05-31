import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborezComponent } from './collaborez.component';

describe('CollaborezComponent', () => {
  let component: CollaborezComponent;
  let fixture: ComponentFixture<CollaborezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
