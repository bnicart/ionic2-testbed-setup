import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';

let component: HomePage;
let fixture: ComponentFixture<HomePage>;
let debug: DebugElement;
let element: HTMLElement;

describe('Page: Home Page', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [MyApp, HomePage],

      providers: [
        NavController
      ],

      imports: [
        IonicModule.forRoot(MyApp)
      ]

    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;

  });

  afterEach(() => {
    fixture.destroy();
    component = null;
    debug = null;
    element = null;
  });

  it('is created', () => {

    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();

  });

  it('initialises with a title of My Page', () => {
    expect(component['title']).toEqual('My Page');
  });

  it('can set the title to a supplied value', () => {

    debug = fixture.debugElement.query(By.css('ion-title'));
    element = debug.nativeElement;

    component.changeTitle('Your Page');
    fixture.detectChanges();
    expect(component['title']).toEqual('Your Page');
    expect(element.textContent).toContain('Your Page');
  });

});