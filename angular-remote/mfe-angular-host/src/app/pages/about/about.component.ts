import { Component, ElementRef, ViewChild } from '@angular/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @ViewChild('reactAppContainer', { static: true })
  reactAppContainer!: ElementRef;

  async ngAfterViewInit() {
    // @ts-ignore
    const AppModule = await import('remoteB/App').then((module) => ({
      default: module.default,
    }));

    const ReactApp = AppModule.default;

    const reactRoot = this.reactAppContainer.nativeElement;

    const root = createRoot(reactRoot);

    root.render(
      React.createElement(
        BrowserRouter,
        null,
        React.createElement(ReactApp, { title: 'Hello from Angular' })
      )
    );
  }
}
