import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <p>hello, this is angular, avite</p>
    <a
      routerLink="/"
      href="#"
      class="text-xl font-bold no-underline hover:underline ..."
      >Home |
    </a>
    <a
      routerLink="/about-us"
      href="#"
      class="text-xl font-bold no-underline hover:underline ..."
      >About us</a
    >
    <h1>Host Angular App</h1>

    <div>
      <button (click)="loadReact()">Load React component</button>
    </div>

    <div #reactElementRef></div>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild("reactElementRef", { read: ElementRef, static: true })
  reactElementRef!: ElementRef;

  constructor() {
    console.log(
      "known issue: templateUrl not working on this version. You should try inline template which was commented"
    );
  }

  ngOnInit(): void {}

  async loadReact(): Promise<void> {
    // @ts-ignore
    const RemoteModule = await import("remoteB/Button").then((module) => ({
      default: module.default,
    }));

    const ReactComponent = RemoteModule.default;

    console.log("ReactComponent", ReactComponent);

    if (typeof ReactComponent !== "function") {
      throw new Error("Il modulo remoto non restituisce");
    }

    const reactRoot = this.reactElementRef.nativeElement;

    const root = createRoot(reactRoot);
    root.render(
      React.createElement(
        BrowserRouter,
        null,
        React.createElement(ReactComponent, { title: "Hello from Angular" })
      )
    );
  }
}
