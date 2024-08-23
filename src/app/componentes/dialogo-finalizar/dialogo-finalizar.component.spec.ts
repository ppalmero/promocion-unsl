import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoFinalizarComponent } from './dialogo-finalizar.component';

describe('DialogoFinalizarComponent', () => {
  let component: DialogoFinalizarComponent;
  let fixture: ComponentFixture<DialogoFinalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoFinalizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogoFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
