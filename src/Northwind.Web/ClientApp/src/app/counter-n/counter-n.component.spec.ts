import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNComponent } from './counter-n.component';

describe('CounterNComponent', () => {
  let component: CounterNComponent;
  let fixture: ComponentFixture<CounterNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Counter N');
  }));

  it('should start with count 0, then increments by 2 when clicked', async(() => {
    const countElement = fixture.nativeElement.querySelector('strong');
    expect(countElement.textContent).toEqual('0');

    const incrementInput = debugElement.query( By.css('[data-testid="enter-input"]'));
    incrementInput.nativeElement.value = '4'
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('2');
  }));});