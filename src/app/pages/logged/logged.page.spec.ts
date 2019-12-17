import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoggedPage } from './logged.page';

describe('LoggedPage', () => {
  let component: LoggedPage;
  let fixture: ComponentFixture<LoggedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoggedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
