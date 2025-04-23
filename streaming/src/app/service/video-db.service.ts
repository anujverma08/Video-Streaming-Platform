// video.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video-db.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private baseUrl = 'http://localhost:8081/api/videos';

  constructor(private http: HttpClient) { }

  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl);
  }

  getVideoFile(title: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${title}`, { responseType: 'blob' });
  }
}
