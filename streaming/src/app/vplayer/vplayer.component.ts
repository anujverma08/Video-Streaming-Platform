import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vplayer',
  templateUrl: './vplayer.component.html',
  styleUrl: './vplayer.component.css'
})
export class VplayerComponent implements OnInit {
  title!: string;
  videoUrl!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      this.videoUrl = `http://localhost:8081/video/${this.title}`;
    });
  }

} 
