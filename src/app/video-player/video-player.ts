import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import videojs from 'video.js';
import Player from "video.js/dist/types/player";
import 'videojs-youtube'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.html', 
  styleUrls: [
    './video-player.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})

export class VideoPlayer implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target!: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  } = {
      fluid: true,
      aspectRatio: '16:9',
      autoplay: false,
      sources: [],
  };

  player: Player | undefined;

  constructor(
    private elementRef: ElementRef,
  ) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}