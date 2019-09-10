import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AlertService} from "../alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  ngOnInit() {
  private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(message => {
        this.message = message;
      });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  }

}
