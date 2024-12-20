import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonWrapperComponent } from './react-wrapper/react-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mfe-angular-host';
}
