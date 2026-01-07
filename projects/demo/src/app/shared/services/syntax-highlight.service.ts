import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SyntaxHighlightService {
  constructor(private sanitizer: DomSanitizer) {}

  highlight(code: string, language: string = 'html'): SafeHtml {
    // Basic text escaping to prevent HTML injection from the code itself
    let escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (language === 'html') {
      escaped = this.highlightHtml(escaped);
    }

    return this.sanitizer.bypassSecurityTrustHtml(escaped);
  }

  private highlightHtml(code: string): string {
    // Highlight syntax with exact VSCode Dark+ theme colors
    // Process HTML tags as complete units to avoid regex interference
    
    // Comments first - #6A9955 (VSCode comment green)
    code = code.replace(/(&lt;!--.*?--&gt;)/g, '<span style="color: #6A9955">$1</span>');
    
    // Complete HTML tags with attributes - process as a unit
    // Match: <tagname attribute="value" attribute="value">
    code = code.replace(/(&lt;\/?[a-zA-Z0-9\-]+)((?:\s+[a-zA-Z0-9\-\[\]\(\)\*]+(?:="[^"]*")?)*\s*)(\/?&gt;)/g, 
      (match: string, openTag: string, attributes: string, closeTag: string) => {
        // Extract tag name to determine color
        const tagName = openTag.replace(/&lt;\/?/, '');
        
        // Angular components/directives - #4EC9B0 (VSCode user-defined type teal)
        // Standard HTML tags - #569CD6 (VSCode keyword blue)
        const isAngularComponent = /^(ngf|app|ng)[A-Z]/.test(tagName) || /^[a-z]+-[a-z]+/.test(tagName);
        const tagColor = isAngularComponent ? '#4EC9B0' : '#569CD6';
        
        // Color the tag itself
        let result = `<span style="color: ${tagColor}">${openTag}</span>`;
        
        // Color attributes and their values
        if (attributes) {
          result += attributes.replace(/([a-zA-Z0-9\-\[\]\(\)\*]+)(="([^"]*)")?/g, 
            (attrMatch: string, attrName: string, fullValue: string, attrValue: string) => {
              // Check if attribute is an Angular directive (camelCase starting with ngf, app, ng, or has brackets/parens)
              const isAngularDirective = /^(ngf|app|ng)[A-Z]/.test(attrName) || 
                                        /^\[/.test(attrName) || 
                                        /^\(/.test(attrName) || 
                                        /^\*/.test(attrName);
              
              if (fullValue) {
                // Attribute with value
                // Angular directive attributes - #C586C0 (VSCode property/directive purple)
                // Regular attributes - #9CDCFE (VSCode light blue)
                const attrColor = isAngularDirective ? '#C586C0' : '#9CDCFE';
                // Attribute values - #CE9178 (VSCode string orange)
                return `<span style="color: ${attrColor}">${attrName}</span>=<span style="color: #CE9178">"${attrValue}"</span>`;
              } else {
                // Standalone attribute (no value) - like ngfAccordionHeader
                const attrColor = isAngularDirective ? '#C586C0' : '#9CDCFE';
                return `<span style="color: ${attrColor}">${attrName}</span>`;
              }
            });
        }
        
        // Color the closing bracket
        result += `<span style="color: ${tagColor}">${closeTag}</span>`;
        return result;
      });

    return code;
  }
}
