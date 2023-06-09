import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavBlockComponent } from './admin-nav-block.component';

describe('AdminNavBlockComponent', () => {
  let component: AdminNavBlockComponent;
  let fixture: ComponentFixture<AdminNavBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNavBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
