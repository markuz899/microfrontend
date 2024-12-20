import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Extcomp1Component } from "./extcomp1/extcomp1.component";
import { Extcomp2Component } from "./extcomp2/extcomp2.component";

const routes: Routes = [
  { path: "", redirectTo: "remoteC", pathMatch: "full" },
  {
    path: "remoteC",
    children: [
      { path: "external-about", component: Extcomp1Component },
      { path: "external-contact", component: Extcomp2Component },
    ],
  },

  // { path: 'c1', component: Extcomp1Component },
  // { path: 'c2', component: Extcomp2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ExternalRoutingModule {}
