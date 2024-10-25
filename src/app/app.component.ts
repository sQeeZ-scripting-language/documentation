import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { Language } from './interfaces/language.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DataService } from './services/data.service';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { Content } from './interfaces/content.interface';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, TranslateModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatTooltipModule, MatMenuModule, MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelHeader],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'documentation';
  public mobileQuery!: MediaQueryList;
  public currentTheme: string = 'dark';
  public languages: Language[] = [];
  public content: Content[] = [];
  public currentLanguage: Language = {
    id: 'gb',
    name: 'English'
  };
    
  private _mobileQueryListener: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private translateService: TranslateService,
    private deviceService: DeviceService,
    private dataService: DataService,
    private router: Router
  ) {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.deviceService.init();
    this.currentTheme = this.getSystemTheme();
    this.setTheme();
    this.languages = this.dataService.getLanguages();
    this.content = this.dataService.getContent();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openPlayground(): void {
    window.location.href = 'https://sqeez-scripting-language.github.io/playground/';
  }

  setLanguage(language: Language): void {
    this.currentLanguage = language;
    this.translateService.use(this.currentLanguage.id);
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme();
  }

  translate(key: string): string {
    return this.translateService.instant(key);
  }

  nextRoute(): void {
    const route: string = this.dataService.nextRoute();
    if (route) this.router.navigate([route]);
  }

  previousRoute(): void {
    const route: string = this.dataService.previousRoute();
    if (route) this.router.navigate([route]);
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