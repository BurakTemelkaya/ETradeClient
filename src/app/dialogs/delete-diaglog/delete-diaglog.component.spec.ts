import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDiaglogComponent } from './delete-diaglog.component';

describe('DeleteDiaglogComponent', () => {
  let component: DeleteDiaglogComponent;
  let fixture: ComponentFixture<DeleteDiaglogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDiaglogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDiaglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
