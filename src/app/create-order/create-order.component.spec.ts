import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderComponent } from './create-order.component';

describe('CreateOrderComponent', () => {
  let component: CreateOrderComponent;
  let fixture: ComponentFixture<CreateOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrderComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CreateOrderComponent);
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
