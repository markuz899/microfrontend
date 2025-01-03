import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Appcomp1Component } from "./appcomp1/appcomp1.component";
import { Appcomp2Component } from "./appcomp2/appcomp2.component";

const routes: Routes = [
  { path: "", redirectTo: "remoteC", pathMatch: "full" },
  {
    path: "remoteC",
    children: [
      { path: "about", component: Appcomp1Component },
      { path: "contact", component: Appcomp2Component },
    ],
  },
  // { path: "c1", component: Appcomp1Component },
  // { path: "c2", component: Appcomp2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
