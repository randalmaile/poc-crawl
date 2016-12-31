import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutContent: string;
  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('How Google crawls Angular - About | TIWed Inc.');
      this.seoService.setMetaDescription('About the site that tests how Google crawls Angular - A site by TIWed Inc. that tests the ins and outs of how Google crawls Angular sites.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com/about');
      this.seoService.setMetaRobots('index');

      this.aboutContent = 'TI Wed, Inc. was started by several developers in San Diego with tons of Angular experience.  They we tasked with one of the most difficult tasks ever handed to front-end developers.  They were tasked with photoshopping the heads of several managerial individuals to the heads of PokeMon characters for a company celebration.  While this seems like an almost impossible task, the two developers were behind the eight ball from the begining.  They didn\'t have PhotoShop.  From then on they were constently bombarded with reminders of their deadlines.  Wednesday.  Until finally they were sent an email with 135px font reminding them that tomorrow is wednesday.  TI Wed was born.  Since then, TI Wed has been built Angular apps while working closely with industry experts.  This site is one of many experiments in how Google crawls angular sites.';
    });
  }

}
