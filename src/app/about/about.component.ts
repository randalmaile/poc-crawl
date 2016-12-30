import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('About - TIWed Inc.');
      this.seoService.setMetaDescription('About Desciption for - TIWed Inc.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com/about');
      this.seoService.setMetaRobots('index');
    });
  }

}
