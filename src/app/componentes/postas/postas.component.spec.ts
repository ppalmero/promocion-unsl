import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostasComponent } from './postas.component';

describe('PostasComponent', () => {
  let component: PostasComponent;
  let fixture: ComponentFixture<PostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
