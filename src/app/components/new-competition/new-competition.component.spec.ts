import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompetitionComponent } from './new-competition.component';

describe('NewCompetitionComponent', () => {
  let component: NewCompetitionComponent;
  let fixture: ComponentFixture<NewCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCompetitionComponent]
    });
    fixture = TestBed.createComponent(NewCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
