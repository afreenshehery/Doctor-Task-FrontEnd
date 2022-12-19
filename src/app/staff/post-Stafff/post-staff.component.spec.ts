import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStaffComponent } from './post-staff.component';

describe('PostStaffComponent', () => {
  let component: PostStaffComponent;
  let fixture: ComponentFixture<PostStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostStaffComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
