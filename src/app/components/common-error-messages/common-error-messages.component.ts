import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-common-error-messages',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './common-error-messages.component.html',
  styleUrl: './common-error-messages.component.scss'
})
export class CommonErrorMessagesComponent {

}
