import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../models/video-db.model';
import { VideoService } from '../service/video-db.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(
      (videos) => {
        this.videos = videos;
      },
      (error) => {
        console.error('Error fetching videos:', error);
      }

    );
    
  }
  
  watchNow(title: string) {
    console.log('Navigating to video player for:', title);
    this.router.navigate(['/vplayer', title]);
    
  }

}
