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
      this.seoService.setTitle('Contact - TIWed Inc.');
      this.seoService.setMetaDescription('Contact Desciption for - TIWed Inc.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com/contact');
      this.seoService.setMetaRobots('index');
    });
  }

}
