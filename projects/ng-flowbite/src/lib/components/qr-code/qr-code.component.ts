import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-qr-code',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <div [class]="qrClasses">
        <canvas #qrCanvas [width]="size" [height]="size"></canvas>
      </div>
      <p *ngIf="label" [class]="labelClasses">{{ label }}</p>
    </div>
  `
})
export class NgfQrCodeComponent implements AfterViewInit {
  @ViewChild('qrCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input() value = '';
  @Input() size = 200;
  @Input() label?: string;
  @Input() color: 'black' | 'blue' | 'green' | 'red' | 'purple' = 'black';
  @Input() backgroundColor = '#ffffff';
  @Input() errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' = 'M';

  get wrapperClasses(): string {
    return 'flex flex-col items-center p-4';
  }

  get qrClasses(): string {
    return 'bg-white p-4 rounded-lg shadow-lg';
  }

  get labelClasses(): string {
    return 'mt-4 text-sm text-gray-600 dark:text-gray-400';
  }

  ngAfterViewInit(): void {
    this.generateQRCode();
  }

  private generateQRCode(): void {
    // QR code generation would require a library like 'qrcode' or 'qrcode-generator'
    // This is a placeholder - in production, you would use a QR code library
    const canvas = this.canvasRef?.nativeElement;
    if (canvas && this.value) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Placeholder: Draw a simple pattern
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, this.size, this.size);
        ctx.fillStyle = this.color === 'black' ? '#000000' : this.color;
        ctx.font = '12px Arial';
        ctx.fillText('QR Code', this.size / 2 - 30, this.size / 2);
        // Note: Actual QR code generation would require a library
      }
    }
  }
}
