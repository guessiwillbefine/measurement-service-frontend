import {Component, OnInit} from "@angular/core";
import {FactoryService} from "../../service/factory/FactoryService";
import {Factory} from "../../entity/Factory";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-factory',
  templateUrl: './user-factory.component.html',
  styleUrls: ['./user-factory.component.css']
})
export class UserFactoryComponent implements OnInit {
  factory$: Observable<Factory>

  constructor(public factoryService: FactoryService) {
  }

  ngOnInit(): void {
    this.factoryService.getCurrentFactory()
      .pipe(factory => this.factory$ = factory)
      .subscribe()
  }

}
