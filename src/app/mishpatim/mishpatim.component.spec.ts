import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MishpatimComponent } from './mishpatim.component';

describe('MishpatimComponent', () => {
  let component: MishpatimComponent;
  let fixture: ComponentFixture<MishpatimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MishpatimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MishpatimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
