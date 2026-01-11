import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Video, VideoService } from '../../services/videoService';
import { VideoPlayer } from '../video-player/video-player';
import { UserResponse, ResponseType } from '../user-response/user-response';
import { RespondCompare } from '../respond-compare/respond-compare';

@Component({
  selector: 'app-root',
  imports: [VideoPlayer, RouterOutlet, UserResponse, RespondCompare],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  @ViewChild('response', { static: true }) response!: UserResponse;
  @ViewChild('compare', { static: true }) compare!: RespondCompare;
  public video: Video | null = null;

  // Expose ResponseType enum to template
  public readonly ResponseType = ResponseType;

  public userResponse: string = '';

  constructor(
    private videoService: VideoService,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    // Initialization logic if needed
    this.videoService.getVideo().then(video => {
      this.video = video;
      this.changeDetector.detectChanges();
    });
  }

  selectionMade(userResponse: string) {
    console.log('App selection made: ', userResponse);
    this.userResponse = userResponse;
    this.response.visible = false;
    this.compare.visible = true;
    // this.compare.userResponse = userResponse;
    this.changeDetector.detectChanges();
    this.videoService.addResponse(this.video!.id, userResponse)
  }

}
