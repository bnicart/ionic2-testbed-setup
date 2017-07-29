import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

let component: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [MyApp],

      providers: [
        StatusBar,
        SplashScreen
      ],

      imports: [
        IonicModule.forRoot(MyApp)
      ]

    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;

  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('is created', () => {

    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();

  });

  it('initialises with a root page of HomePage', () => {
    expect(component['rootPage']).toBe(HomePage);
  });

});