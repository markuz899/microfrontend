import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnChanges {
  @Input() title: any;

  ngOnInit() {
    console.log("Received data in DashboardComponent:", this.title);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes:", changes);
    if (changes["title"]) {
      console.log("Title changed:", changes["title"].currentValue);
    }
  }
}
