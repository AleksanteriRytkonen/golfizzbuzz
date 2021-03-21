import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzComponent } from './fizzbuzz.component';

describe('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzbuzzComponent ]
    })
    .compileComponents();
  });

  it('Should be Buzz in the end after 100 rounds', () => {
    const comp = new FizzbuzzComponent();
    expect(comp.lastOccurence).toBe(0, 'should be 0 at start');
    comp.ngOnInit();
    expect(comp.lastOccurence).toBe('Buzz', 'should be Buzz');
  });

  it('Should be FizzBuzz in the end after 30 rounds', () => {
    const comp = new FizzbuzzComponent();
    expect(comp.lastOccurence).toBe(0, 'Should be 0');
    comp.timesToRun = 30;
    comp.ngOnInit();
    expect(comp.lastOccurence).toBe('FizzBuzz', 'Should be FizzBuzz');
  });

  it('Should be fizz if it is divisible by 3 or has 3 in it', () => {
    const comp = new FizzbuzzComponent();
    comp.timesToRun = 23;
    comp.ngOnInit();
    expect(comp.lastOccurence).toBe('Fizz', 'Should be Fizz');
  });

  it('Should be buzz if it is divisible by 5', () => {
    const comp = new FizzbuzzComponent();
    comp.timesToRun = 50;
    comp.ngOnInit();
    expect(comp.lastOccurence).toBe('Buzz', 'should be buzz');
  })

  it('Should be Buzz if it has 5 in it', () => {
    const comp = new FizzbuzzComponent();
    comp.timesToRun = 52;
    comp.ngOnInit();
    expect(comp.lastOccurence).toBe('Buzz', 'Should be Buzz');
  });
});
