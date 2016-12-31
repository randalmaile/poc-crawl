import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectDescription:string;

  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('How Google crawls Angular - Home | TIWed Inc.');
      this.seoService.setMetaDescription('Home of the site that tests how Google crawls Angular - A site by TIWed Inc. that tests the ins and outs of how Google crawls Angular sites.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com');
      this.seoService.setMetaRobots('index');

      this.projectDescription = 'There are tons of rumors and articles on the web talking about how deficient or efficient Google is with crawling an angular site.  Here are the things we are going to test with this site.';
    });
  }

}
