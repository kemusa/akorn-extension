import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UkHoldTagComponent } from './uk-hold-tag.component';

describe('UkHoldTagComponent', () => {
  let component: UkHoldTagComponent;
  let fixture: ComponentFixture<UkHoldTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkHoldTagComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UkHoldTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
