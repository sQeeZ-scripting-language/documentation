import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { isPlatformBrowser } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { Language } from './interfaces/language.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatTooltipModule, MatMenuModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'documentation';
  public mobileQuery!: MediaQueryList;
  public currentTheme: string = 'dark';
  public languages: Language[] = [{
    name: 'English',
    i18n: 'en',
    flag: 'fi fi-gb'
  }, {
    name: 'Español',
    i18n: 'es',
    flag: 'fi fi-es'
  }, {
    name: 'Français',
    i18n: 'fr',
    flag: 'fi fi-fr'
  }, {
    name: 'Deutsch',
    i18n: 'de',
    flag: 'fi fi-de'
  }];
  public currentLanguage: Language = {
    name: 'English',
    i18n: 'en',
    flag: 'fi fi-gb'
  };
    
  public fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.currentTheme = this.getSystemTheme();
    this.setTheme();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  setLanguage(language: Language): void {
    this.currentLanguage = language;
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme();
  }

  private getSystemTheme(): string {
    return (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  private setTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('dark-theme', this.currentTheme === 'dark');
      document.body.classList.toggle('light-theme', this.currentTheme === 'light');
    }
  }
}