import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToVoteComponent } from './how-to-vote.component';

describe('HowToVoteComponent', () => {
  let component: HowToVoteComponent;
  let fixture: ComponentFixture<HowToVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToVoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
