import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bubble-demo',
  standalone: false,
  template: `
    <div>
      <div class="mb-4">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/50 border border-blue-700 rounded-lg text-sm text-blue-300">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          Requires Flowbite JS >
        </span>
      </div>
      <h1 class="text-4xl font-bold text-white mb-2">Tailwind CSS Chat Bubble - Flowbite</h1>
      <p class="text-xl text-gray-400 mb-8">Use the chat bubble component to show messages in a chat interface.</p>
      <div class="space-y-12">
        <section id="default">
          <h2 class="text-2xl font-bold text-white mb-4">Default chat bubble</h2>
          <p class="text-gray-400 mb-4">Use the default chat bubble component to show messages.</p>
          <app-demo-wrapper
            componentName="Default chat bubble"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/chat-bubble/chat-bubble.component.ts"
          >
            <div class="space-y-4">
              <ngf-chat-bubble position="start" [time]="'10:00 AM'" color="blue">
                Hello! How can I help you today?
              </ngf-chat-bubble>
              <ngf-chat-bubble position="end" [time]="'10:01 AM'" color="green">
                I need help with my account.
              </ngf-chat-bubble>
            </div>
          </app-demo-wrapper>
          <app-code-syntax-wrapper [code]="defaultCode" language="html"></app-code-syntax-wrapper>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class ChatBubbleDemoComponent {
  defaultCode = `<ngf-chat-bubble position="start" [time]="'10:00 AM'" color="blue">
  Hello! How can I help you today?
</ngf-chat-bubble>
<ngf-chat-bubble position="end" [time]="'10:01 AM'" color="green">
  I need help with my account.
</ngf-chat-bubble>`;
}

