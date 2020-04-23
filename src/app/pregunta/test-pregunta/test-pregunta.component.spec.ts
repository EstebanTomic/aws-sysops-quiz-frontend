import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPreguntaComponent } from './test-pregunta.component';

describe('TestPreguntaComponent', () => {
  let component: TestPreguntaComponent;
  let fixture: ComponentFixture<TestPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
