import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  message="this is the first Service"
  constructor( private loggerService: LoggerService) { }

  logger(){
    this.loggerService.logger(this.message);
  }
}
