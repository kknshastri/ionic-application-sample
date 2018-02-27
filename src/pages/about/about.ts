import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
// import { AppState } from '../../app/store/store';
import { Store, select } from '@ngrx/store';

import { TestService } from '../../app/services/service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  testStr: Observable<string>;
  respData: Observable<any>[];

  constructor(public navCtrl: NavController, private store: Store<any>, public serv: TestService) {
    this.testStr = this.store.pipe(
      select((s) => s.rootReducer.testName)
    );

    // this.serv.testService()
    //   .subscribe((rr) => {
    //     console.log('inside subscribe....');
    //     console.log(rr);
    //     this.respData = rr;
    //   });
  }

  ngOnInit() {
    console.log('On Init>>>>>>');
    this.serv.testService()
      .subscribe((rr) => {
        console.log('inside subscribe....');
        console.log(rr);
        this.respData = rr;
      });

  }

}
