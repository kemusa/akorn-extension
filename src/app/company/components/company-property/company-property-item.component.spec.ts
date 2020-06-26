import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyPropertyItemComponent } from './company-property-item.component';

describe('CompanyPropertyItemComponent', () => {
  let component: CompanyPropertyItemComponent;
  let fixture: ComponentFixture<CompanyPropertyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyPropertyItemComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyPropertyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
