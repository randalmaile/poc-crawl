import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarContent:string;
  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('Calendar - TIWed Inc.');
      this.seoService.setMetaDescription('Calendar Desciption for - TIWed Inc.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com/calendar');
      this.seoService.setMetaRobots('index');
      this.calendarContent = `<h1>How Google crawls Angular - Calendar</h1>
      <p>This is the content that we should put into the calendar section.  This includes some html also.</p>
        <ul>
          <li>Jan - 1 New Years Day </li>
          <li>Feb - 14 Valentine's </li>
          <li>Apr - 1 Google Fool's Day </li>
          <li>July - 4 Summer Block Buster Day...?  </li>
        </ul>
        <p>Content defined in the .ts file and added to the calendarContent variable in the template.</p>
        <ul>
          <li>this.seoService.setTitle('How Google crawls Angular - Calendar | TIWed Inc.');</li>
          <li>this.seoService.setMetaDescription('Calendar with events for the people that built the site that tests how Google crawls Angular - A site by TIWed Inc. that tests the ins and outs of how Google crawls Angular sites.');</li>
          <li>this.seoService.setCanonicalLink('http://www.tiwedinc.com/calendar');</li>
          <li>this.seoService.setMetaRobots('index');</li>
        </ul>
      `;
    });
  }

}
