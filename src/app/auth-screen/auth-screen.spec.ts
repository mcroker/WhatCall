import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthScreenComponent } from './auth-screen';
import { FirebaseApp } from '@angular/fire/app';
import { provideFirebaseUI, provideFirebaseUIPolicies } from '@firebase-oss/ui-angular';
import { autoAnonymousLogin, autoUpgradeAnonymousUsers, initializeUI, providerPopupStrategy } from '@firebase-oss/ui-core';
import { Auth, NextOrObserver, Unsubscribe, User } from '@angular/fire/auth';

describe('AuthScreenComponent', () => {
  let component: AuthScreenComponent;
  let fixture: ComponentFixture<AuthScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: FirebaseApp,
          useValue: {
          }
        },
        {
          provide: Auth,
          useValue: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onAuthStateChanged: (auth: Auth, nextOrObserver: NextOrObserver<User>): Unsubscribe => {
              return () => { }
            }
          }
        },
        provideFirebaseUI((apps) => initializeUI({
          app: apps[0],
          behaviors: [
            autoAnonymousLogin(),
            autoUpgradeAnonymousUsers(),
            providerPopupStrategy()
          ],
        })),
        provideFirebaseUIPolicies(() => ({
          termsOfServiceUrl: 'https://www.google.com',
          privacyPolicyUrl: 'https://www.google.com',
        })),
      ],
      imports: [AuthScreenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AuthScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
