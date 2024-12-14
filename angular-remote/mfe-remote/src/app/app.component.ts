import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @Input() title: any;

  ngOnInit() {
    console.log("Received data in AppComponent:", this.title);
  }
}
