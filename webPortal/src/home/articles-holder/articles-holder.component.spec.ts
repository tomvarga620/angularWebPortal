import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHolderComponent } from './articles-holder.component';

describe('ArticlesHolderComponent', () => {
  let component: ArticlesHolderComponent;
  let fixture: ComponentFixture<ArticlesHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
