import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent } from '@ng-doc/app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgDocNavbarComponent, NgDocSidebarComponent, NgDocRootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-docs';
}
