import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(OrderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('contains field to search a meal', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').textContent).toContain('');
  });

});
