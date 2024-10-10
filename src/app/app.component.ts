import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenDirective } from './directives/screen.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScreenDirective],
  providers: [ScreenDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'playground';
  public screenWidth: number = 0;
  public screenHeight: number = 0;

  ngAfterViewInit(): void {
    try {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }
  
}