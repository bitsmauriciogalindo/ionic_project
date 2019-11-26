import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddingbookPage } from './addingbook.page';

describe('AddingbookPage', () => {
  let component: AddingbookPage;
  let fixture: ComponentFixture<AddingbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddingbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
