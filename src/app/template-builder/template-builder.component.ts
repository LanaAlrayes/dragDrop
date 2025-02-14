import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Section {
  type: 'text' | 'textarea' | 'image' | 'video' | 'email';
  content: string;
}

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.scss'],
})
export class TemplateBuilderComponent implements OnInit {
  sections: Section[] = [];

  constructor() {}

  ngOnInit() {
    // Load saved sections on component initialization
    this.loadSections();
  }

  // Add new section
  addSection(type: 'text' | 'textarea' | 'image' | 'video' | 'email') {
    const newSection: Section = {
      type,
      content: '',
    };
    this.sections.push(newSection);
    this.saveSections(); // Save to local storage if needed
  }

  // Handle drag and drop
  drop(event: CdkDragDrop<Section[]>) {
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
    this.saveSections(); // Save to local storage if needed
  }

  // Delete section
  deleteSection(index: number) {
    this.sections.splice(index, 1);
    this.saveSections(); // Save to local storage if needed
  }

  // Update section content
  updateContent(index: number, content: string) {
    this.sections[index].content = content;
    this.saveSections(); // Save to local storage if needed
  }

  // Update section content(video)
  updateContents(index: number, url: string) {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&\n]{11})/
    );
    if (videoIdMatch) {
      this.sections[
        index
      ].content = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    } else {
      this.sections[index].content = ''; // Clear if not a valid YouTube URL
    }
    this.saveSections(); // Save to local storage if needed
  }

  // Save sections to local storage
  saveSections() {
    localStorage.setItem('templateSections', JSON.stringify(this.sections));
  }

  loadSections() {
    const savedSections = localStorage.getItem('templateSections');
    if (savedSections) {
      this.sections = JSON.parse(savedSections);
    }
  }
}
