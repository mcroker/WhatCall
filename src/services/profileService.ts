import { Injectable } from '@angular/core';
import { Profile } from '../types/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  getProfile(): Profile {
    return {
      name: 'John Doe'
    }
  }

  updateProfile(profile: Profile): void {
    console.log('Profile updated:', profile);
  }

}
