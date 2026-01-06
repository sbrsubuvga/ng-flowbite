import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NgfButtonComponent } from './button.component';

describe('NgfButtonComponent', () => {
  let component: NgfButtonComponent;
  let fixture: ComponentFixture<NgfButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NgfButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClick event', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should apply correct color classes', () => {
    component.color = 'red';
    fixture.detectChanges();
    const classes = component.buttonClasses;
    expect(classes).toContain('bg-red-700');
  });

  it('should apply outline classes when outline is true', () => {
    component.outline = true;
    component.color = 'blue';
    fixture.detectChanges();
    const classes = component.buttonClasses;
    expect(classes).toContain('border');
    expect(classes).toContain('border-blue-700');
  });
});

