import {Component} from "@angular/core";

@Component({
  selector: 'about-component',
  templateUrl: './AboutComponent.html',
  styleUrls: ['./AboutComponent.css']
})
export class AboutComponent {
  about : string = "some about text";
}
