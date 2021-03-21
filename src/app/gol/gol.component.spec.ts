import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { GolComponent } from './gol.component';

describe('GolComponent', () => {
  let component: GolComponent;
  let fixture: ComponentFixture<GolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('all cells should be dead', () => {
    const comp = new GolComponent();
    comp.ngOnInit();
    comp.clear();    
    expect(comp.board.filter(cell => cell.alive).length).toBe(0, 'All cells should be dead');
  });
  it('1 cell should be alive', () => {
    const comp = new GolComponent();
    comp.ngOnInit();
    comp.clear();
    expect(comp.board.filter(cell => cell.alive).length).toBe(0, 'All cells should be dead');
    const cell = comp.board.find(c => c.location === 1);
    comp.toggleLife(cell);
    expect(comp.board.filter(c => c.alive).length).toBe(1, 'should have 1 cell alive');
  });
  it('3 alive cells should turn to 4 in a corner and stay that way', fakeAsync(() => {
    const comp = new GolComponent();
    comp.ngOnInit();
    comp.clear();
    const cells = comp.board.filter(c => c.location === 1 || c.location === 2 || c.location === 11);
    cells.forEach(c => comp.toggleLife(c));
    comp.start();
    tick(1000);
    comp.stop();
    expect(comp.generations).toBe(1, '1 generation should have passed');
    const cell = comp.board.find(c => c.location === 12);
    expect(cell.alive).toBeTrue();
    comp.start();
    tick(1000);
    comp.stop();
    expect(comp.generations).toBe(2, 'should be on second generation');
    expect(comp.board.filter(c => c.alive).length).toBe(4, 'there should be 4 cells alive');
  }));
});
