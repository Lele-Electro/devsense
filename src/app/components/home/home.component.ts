import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';
import { WPPost } from '../interfaces/wordpress';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit {
  categoryTwoPosts: WPPost[] = [];

  private wpService = inject(WordpressService);
  constructor(
    private analyticsService: AnalyticsService,
  ) {
  }

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio");
    this.wpService.getPostsByCategoryId(3).subscribe(posts => {
      console.log('Posts in category 1:', posts);
      this.wpService.makeSequentialCalls(posts).subscribe(postsWithMedia => {
        console.log('Posts with media URLs:', postsWithMedia);
      });
    });
  }


}
