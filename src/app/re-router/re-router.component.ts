import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-re-router',
  templateUrl: './re-router.component.html',
  styleUrls: ['./re-router.component.scss']
})
export class ReRouterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private nav: Router) { }

  ngOnInit() {
    let url: string = this.route.snapshot.paramMap.get('url');
    let urlArr: string[] = url.split('?');
    urlArr[0] = '/' + urlArr[0];
    this.nav.navigate(urlArr);
  }

}
