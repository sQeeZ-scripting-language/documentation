import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language.interface';
import { Content } from '../interfaces/content.interface';
import { DeviceService } from './device.service';

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

  private routes: string[] = ['/', '/getting-started', '/getting-started/installation', '/getting-started/usage', '/getting-started/first-program', '/programming', '/programming/variables', '/programming/operators', '/programming/control-structures', '/programming/functions', '/programming/lists', '/programming/objects', '/common-error-messages'];

  constructor(private deviceService: DeviceService) {}

  getLanguages(): Language[] {
    return this.languages;
  }

  getContent(): Content[] {
    return this.content;
  }

  nextRoute(): string {
    const currentIndex = this.routes.indexOf(this.deviceService.activeRoute);
    return this.routes[currentIndex + 1];
  }

  previousRoute(): string {
    const currentIndex = this.routes.indexOf(this.deviceService.activeRoute);
    return this.routes[currentIndex - 1];
  }
  
}
