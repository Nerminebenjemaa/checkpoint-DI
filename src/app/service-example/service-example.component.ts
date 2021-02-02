import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'C:/Users/HP/Desktop/GMCangular/Service/src/app/services/logger.service';
import { FirstService } from 'C:/Users/HP/Desktop/GMCangular/Service/src/app/services/first.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent implements OnInit {

  constructor( private loggerService :LoggerService,
    private firstService :FirstService
    ) { }

  ngOnInit(): void {
   this.loggerService.logger('service work');
   this.firstService.logger();
  }

}
