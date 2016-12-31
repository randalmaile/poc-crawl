import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventContent: string;
  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('How Google crawls Angular - Events | TIWed Inc.');
      this.seoService.setMetaDescription('Events that include the site that tests how Google crawls Angular - A site by TIWed Inc. that tests the ins and outs of how Google crawls Angular sites.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com/events');
      this.seoService.setMetaRobots('index');

      this.eventContent = `This is where we talk about events related to how Google crawls Angular sites.  The funny thing is, we don't have any events regarding how Google crawls Angular sites.  This is actually the only site that we've seen that even thinks it might be a good idea to have an event about how Google crawls Angular.  Maybe we should do a conference to discuss how Google crawls Angular sites.  `;
    });
  }

}
