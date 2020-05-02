import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueComponent } from './dialogue.component';

describe('DialogComponent', () => {
  let component: DialogueComponent;
  let fixture: ComponentFixture<DialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
