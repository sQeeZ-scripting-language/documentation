import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private languages: Language[] = [{ 
    id: 'gb', 
    name: 'English'
  }, { 
    id: 'es', 
    name: 'Español' 
  }, { 
    id: 'fr', 
    name: 'Français' 
  },
  { 
    id: 'de', 
    name: 'Deutsch'
  }];

  constructor() { }

  getLanguages(): Language[] {
    return this.languages;
  }
}
