import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingfunComponent } from './routingfun.component';

describe('RoutingfunComponent', () => {
  let component: RoutingfunComponent;
  let fixture: ComponentFixture<RoutingfunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingfunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
