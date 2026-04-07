import { TestBed } from '@angular/core/testing';
import { ProfileService } from './profileService';
import { Auth, NextOrObserver, Unsubscribe, User } from '@angular/fire/auth';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Auth,
          useValue: {
            onAuthStateChanged: (auth: Auth, nextOrObserver: NextOrObserver<User>): Unsubscribe => {
              return () => { }
            }
          }
        },
      ]
    });
    service = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
