import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <!-- Top Banner -->
    <div class="bg-blue-600 text-white text-sm py-2 px-4 text-center">
      <span class="inline-flex items-center gap-2">
        <span class="bg-blue-500 px-2 py-0.5 rounded-full text-xs font-semibold">New</span>
        <span>We have launched the new Flowbite Design System with variable tokens and more!</span>
        <a href="#" class="underline hover:no-underline">Check it out →</a>
      </span>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Left side: Logo and Version -->
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
              </svg>
              <span class="text-white font-semibold text-lg">Flowbite</span>
            </div>
            <select class="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>v4.0</option>
            </select>
          </div>

          <!-- Center: Search Bar -->
          <div class="flex-1 max-w-xl mx-8">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search"
                class="block w-full pl-10 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <kbd class="px-2 py-1 text-xs font-semibold text-gray-400 bg-gray-700 border border-gray-600 rounded">⌘K</kbd>
              </div>
            </div>
          </div>

          <!-- Right side: Navigation Links and Actions -->
          <div class="flex items-center gap-4">
            <a href="#" class="text-gray-300 hover:text-white text-sm">Quickstart</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm">Blocks</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm">Figma</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm">Icons</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm">Illustrations</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm">Pro version</a>
            
            <a href="#" class="flex items-center gap-2 text-gray-300 hover:text-white">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C17.138 18.18 20 14.425 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm">GitHub</span>
              <span class="text-xs text-gray-400">9.0k</span>
            </a>

            <button class="text-gray-300 hover:text-white p-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </button>

            <button class="text-gray-300 hover:text-white p-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </button>

            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Pricing & FAQ
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {}

