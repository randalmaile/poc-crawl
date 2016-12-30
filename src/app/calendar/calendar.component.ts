import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('Calendar - TIWed Inc.');
      this.seoService.setMetaDescription('Calendar Desciption for - TIWed Inc.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com/calendar');
      this.seoService.setMetaRobots('index');
    });
  }

}
