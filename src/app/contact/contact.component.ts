import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('How Google crawls Angular - Contact | TIWed Inc.');
      this.seoService.setMetaDescription('Contact the people that built the site that tests how Google crawls Angular - A site by TIWed Inc. that tests the ins and outs of how Google crawls Angular sites.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com/contact');
      this.seoService.setMetaRobots('index');
    });
  }

}
