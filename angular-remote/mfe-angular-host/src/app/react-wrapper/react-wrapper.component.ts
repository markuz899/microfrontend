import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

@Component({
  selector: 'app-react-wrapper',
  template: '<div #buttonContainer></div>',
  styleUrl: './react-wrapper.component.scss',
  standalone: true,
})
export class ButtonWrapperComponent implements AfterViewInit {
  @ViewChild('buttonContainer', { static: true }) buttonContainer!: ElementRef;

  async ngAfterViewInit() {
    // @ts-ignore
    const ButtonModule = await import('remoteB/Button').then((module) => ({
      default: module.default,
    }));

    const ReactButton = ButtonModule.default;

    const reactRoot = this.buttonContainer.nativeElement;

    const root = createRoot(reactRoot);
    root.render(
      React.createElement(
        BrowserRouter,
        null,
        React.createElement(ReactButton, { title: 'Hello from Angular' })
      )
    );
  }
}
