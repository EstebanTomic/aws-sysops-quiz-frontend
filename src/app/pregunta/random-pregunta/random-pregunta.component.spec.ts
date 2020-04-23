import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPreguntaComponent } from './random-pregunta.component';

describe('RandomPreguntaComponent', () => {
  let component: RandomPreguntaComponent;
  let fixture: ComponentFixture<RandomPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
