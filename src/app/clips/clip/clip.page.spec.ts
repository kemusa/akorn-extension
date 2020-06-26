import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClipPage } from './clip.page';

describe('ClipPage', () => {
  let component: ClipPage;
  let fixture: ComponentFixture<ClipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
