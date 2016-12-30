import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seoService.setTitle('Home - TIWed Inc.');
      this.seoService.setMetaDescription('Home Desciption for - TIWed Inc.');
      this.seoService.setCanonicalLink('http://www.tiwedinc.com');
      this.seoService.setMetaRobots('index');
    });
  }

}
