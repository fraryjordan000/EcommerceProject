import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReRouterComponent } from './re-router.component';

describe('ReRouterComponent', () => {
  let component: ReRouterComponent;
  let fixture: ComponentFixture<ReRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
