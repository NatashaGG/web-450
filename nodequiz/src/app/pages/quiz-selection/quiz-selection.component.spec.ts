/*
=====================================
  ; Title: quiz-selection.component.spec.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: quiz-selection.component.spec.ts
======================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSelectionComponent } from './quiz-selection.component';

describe('QuizSelectionComponent', () => {
  let component: QuizSelectionComponent;
  let fixture: ComponentFixture<QuizSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
