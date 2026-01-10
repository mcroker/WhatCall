import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoService } from '../../services/videoService';
// import { VideoPlayer } from '../video-player/video-player';
import { UserResponse, ResponseType } from '../user-response/user-response';
import { RespondCompare } from '../respond-compare/respond-compare';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserResponse, RespondCompare],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  public videos : any[] = [];

  public readonly ResponseType = ResponseType;

  constructor(
    private videoService: VideoService,
    private changeDetector: ChangeDetectorRef,
  ) {
    videoService.getVideos().then(videos => {
      this.videos = videos;
      this.changeDetector.detectChanges();
    });
  }

  selectionMade(event: string) {
    console.log('App selection made: ', event);
  }

}
