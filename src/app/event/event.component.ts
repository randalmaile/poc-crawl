import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('Events - TIWed Inc.');
      this.seoService.setMetaDescription('Events Desciption for - TIWed Inc.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com/events');
      this.seoService.setMetaRobots('index');
    });
  }

}
