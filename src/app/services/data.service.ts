import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language.interface';
import { Content } from '../interfaces/content.interface';

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

  private content: Content[] = [{
    title: 'GETTING_STARTED',
    path: 'getting-started',
    content: [{
      title: 'INSTALLATION',
      path: 'getting-started/installation',
    }, {
      title: 'USAGE',
      path: 'getting-started/usage'
    }, {
      title: 'FIRST_PROGRAM',
      path: 'getting-started/first-program'
    }]
  }, {
    title: 'PROGRAMMING',
    path: 'programming',
    content: [{
      title: 'VARIABLES',
      path: 'programming/variables'
    }, {
      title: 'OPERATORS',
      path: 'programming/operators'
    }, {
      title: 'CONTROL_STRUCTURES',
      path: 'programming/control-structures'
    }, {
      title: 'FUNCTIONS',
      path: 'programming/functions'
    }, {
      title: 'LISTS',
      path: 'programming/lists'
    }, {
      title: 'OBJECTS',
      path: 'programming/objects'
    }]
  }, {
    title: 'COMMON_ERROR_MESSAGES',
    path: 'common-error-messages'
  }];

  constructor() {}

  getLanguages(): Language[] {
    return this.languages;
  }

  getContent(): Content[] {
    return this.content;
  }
}
