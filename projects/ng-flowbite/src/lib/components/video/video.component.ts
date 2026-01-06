import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-video',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <video
        #videoPlayer
        [class]="videoClasses"
        [src]="src"
        [poster]="poster"
        [controls]="controls"
        [autoplay]="autoplay"
        [loop]="loop"
        [muted]="muted"
        [preload]="preload"
        (play)="onPlay.emit()"
        (pause)="onPause.emit()"
        (ended)="onEnded.emit()"
        (loadedmetadata)="onLoadedMetadata.emit()"
      >
        <ng-content></ng-content>
        Your browser does not support the video tag.
      </video>
      <div *ngIf="showControls && !controls" [class]="customControlsClasses">
        <button
          type="button"
          [class]="controlButtonClasses"
          (click)="togglePlay()"
          [attr.aria-label]="isPlaying ? 'Pause' : 'Play'"
        >
          <svg
            *ngIf="!isPlaying"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
          <svg
            *ngIf="isPlaying"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"/>
          </svg>
        </button>
      </div>
    </div>
  `
})
export class NgfVideoComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @Input() src!: string;
  @Input() poster?: string;
  @Input() controls = true;
  @Input() autoplay = false;
  @Input() loop = false;
  @Input() muted = false;
  @Input() preload: 'none' | 'metadata' | 'auto' = 'metadata';
  @Input() showControls = false;
  @Input() rounded = true;
  @Input() responsive = true;
  @Output() onPlay = new EventEmitter<void>();
  @Output() onPause = new EventEmitter<void>();
  @Output() onEnded = new EventEmitter<void>();
  @Output() onLoadedMetadata = new EventEmitter<void>();

  isPlaying = false;

  get wrapperClasses(): string {
    return 'relative';
  }

  get videoClasses(): string {
    const base = 'w-full';
    const roundedClass = this.rounded ? 'rounded-lg' : '';
    const responsiveClass = this.responsive ? 'h-auto' : '';
    return `${base} ${roundedClass} ${responsiveClass}`.trim();
  }

  get customControlsClasses(): string {
    return 'absolute inset-0 flex items-center justify-center bg-black bg-opacity-30';
  }

  get controlButtonClasses(): string {
    return 'text-white hover:text-gray-300 transition-colors';
  }

  ngOnInit(): void {
    // Initialize
  }

  togglePlay(): void {
    if (this.videoPlayer) {
      if (this.isPlaying) {
        this.videoPlayer.nativeElement.pause();
        this.isPlaying = false;
      } else {
        this.videoPlayer.nativeElement.play();
        this.isPlaying = true;
      }
    }
  }
}

