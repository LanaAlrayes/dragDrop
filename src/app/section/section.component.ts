import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() section!: { type: string; content: string };
  @Output() delete = new EventEmitter<void>();
  @Output() update = new EventEmitter<string>();  // Changed to emit content
  @Output() updateVideo = new EventEmitter<string>();  // Changed to emit content

  deleteSection(): void {
    this.delete.emit();
  }
// Emit the actual content
  updateContent(): void {
    this.update.emit(this.section.content);
  }
// Emit the actual content
  updateContents(): void {
    this.updateVideo.emit(this.section.content);
  }
}
