import "zone.js";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppModule } from "./app/app.module";
import { ExternalModule } from "./app/external/external.module";
import { StandaloneComponent } from "./app/standalone/standalone.component";
import { ApplicationRef, ComponentRef } from "@angular/core";
import { DashboardComponent } from "./app/external/dashboard/dashboard.component";

// const mount = () => {
//   platformBrowserDynamic()
//     .bootstrapModule(AppModule)
//     .catch((err) => console.error(err));
// };

const mount = ({ title }: { title: any }) => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((moduleRef) => {
      const appRef = moduleRef.injector.get(ApplicationRef);
      const appComponentRef = appRef.components[0];
      const appComponent = appComponentRef.instance as any;

      appComponent.title = title;
      appComponentRef.changeDetectorRef.detectChanges();
    })
    .catch((err) => console.error(err));
};

// const mountExt = () => {
//   platformBrowserDynamic()
//     .bootstrapModule(ExternalModule)
//     .catch((err) => console.error(err));
// };

const mountExt = ({ title }: { title: any }) => {
  platformBrowserDynamic()
    .bootstrapModule(ExternalModule)
    .then((moduleRef) => {
      const appRef = moduleRef.injector.get(ApplicationRef);

      const dashboardComponentRef: ComponentRef<any> = appRef.components.find(
        (c) => c.instance instanceof DashboardComponent
      ) as ComponentRef<DashboardComponent>;

      if (dashboardComponentRef) {
        dashboardComponentRef.instance.title = title;
        dashboardComponentRef.changeDetectorRef.detectChanges();
      } else {
        console.error("DashboardComponent non trovato.");
      }
    })
    .catch((err) => console.error(err));
};

const mountStandalone = async ({ myvari }: any) => {
  var a = await bootstrapApplication(StandaloneComponent);
  (a.components[0].instance as StandaloneComponent).myvari = myvari;
  (a.components[0].instance as StandaloneComponent).cdRef.detectChanges();
  return a.components[0].instance as StandaloneComponent;
};

export { mount, mountExt, mountStandalone };
