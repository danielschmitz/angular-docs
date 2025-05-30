import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent } from '@ng-doc/app';
import { NgDocThemeService } from '@ng-doc/app/services/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgDocNavbarComponent, NgDocSidebarComponent, NgDocRootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  themeService = inject(NgDocThemeService);
  title = 'angular-docs';
  ngOnInit(): void {
    this.setTheme();
  }
  setTheme(): void {
    this.themeService.set('auto');
  }
}
