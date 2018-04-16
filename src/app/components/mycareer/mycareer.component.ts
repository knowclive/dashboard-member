import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-mycareer',
  templateUrl: './mycareer.component.html',
  styleUrls: ['./mycareer.component.scss']
})
export class MycareerComponent implements OnInit {

  mycareer = {
    heading: 'My membership',
    summary: 'Access a range of benefits - from keeping you up to date with accounting changes, to discounts on everyday brands.',
    link1: {
      title: 'Benefits of your membership',
      url: '/'
    },
    link2: {
      title: 'Online CV builder',
      url: '/'
    },
    link3: {
      title: 'AAT Rewards - offers and discounts',
      url: '/'
    },
    link4: {
      title: 'Record work experience',
      url: '/'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
