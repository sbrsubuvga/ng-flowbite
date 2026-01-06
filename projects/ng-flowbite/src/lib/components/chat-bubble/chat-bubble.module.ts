import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfChatBubbleComponent, NgfChatComponent } from './chat-bubble.component';

@NgModule({
  imports: [CommonModule, NgfChatBubbleComponent, NgfChatComponent],
  exports: [NgfChatBubbleComponent, NgfChatComponent]
})
export class NgfChatBubbleModule {}

