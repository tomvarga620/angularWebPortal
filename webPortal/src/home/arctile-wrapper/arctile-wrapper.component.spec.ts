import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArctileWrapperComponent } from './arctile-wrapper.component';

describe('ArctileWrapperComponent', () => {
  let component: ArctileWrapperComponent;
  let fixture: ComponentFixture<ArctileWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArctileWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArctileWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
