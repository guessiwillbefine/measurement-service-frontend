import {Component, Input, OnInit} from "@angular/core";
import {FactoryService} from "../../service/factory/FactoryService";
import {Factory} from "../../entity/Factory";

@Component({
  selector: 'app-factory',
  templateUrl: './FactoryComponent.html',
  styleUrls: ['./FactoryComponent.css']
})
export class FactoryComponent implements OnInit {

  @Input() public factory: Factory;

  constructor(public factoryService: FactoryService) {}

  ngOnInit(): void {
    this.factoryService.getCurrentFactory().subscribe(response => {
      this.factory = response
    })
  }

}
