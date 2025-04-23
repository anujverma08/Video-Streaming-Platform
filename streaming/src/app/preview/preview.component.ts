import { Component ,Input,OnInit} from '@angular/core';
import { Video } from '../models/video-db.model';
import {  VideoService } from '../service/video-db.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videoService: VideoService,
              private router :Router) { }
            

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
      this.router.navigate(['/video-player', title]);
      console.log('Navigating to video player for:', title);
    }
    

  }

