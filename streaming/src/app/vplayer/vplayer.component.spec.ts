import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VplayerComponent } from './vplayer.component';

describe('VplayerComponent', () => {
  let component: VplayerComponent;
  let fixture: ComponentFixture<VplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
