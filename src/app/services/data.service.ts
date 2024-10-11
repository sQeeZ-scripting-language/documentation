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
      path: 'installation',
    }, {
      title: 'USAGE',
      path: 'usage'
    }, {
      title: 'FIRST_PROGRAM',
      path: 'first-program'
    }]
  }, {
    title: 'PROGRAMMING',
    path: 'programming',
    content: [{
      title: 'VARIABLES',
      path: 'variables'
    }, {
      title: 'OPERATORS',
      path: 'operators'
    }, {
      title: 'CONTROL_STRUCTURES',
      path: 'control-structures'
    }, {
      title: 'FUNCTIONS',
      path: 'functions'
    }, {
      title: 'LISTS',
      path: 'lists'
    }, {
      title: 'OBJECTS',
      path: 'objects'
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
