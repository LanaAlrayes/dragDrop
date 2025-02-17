import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

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
  done: Section[] = [];

  constructor() {}

  ngOnInit() {
    // Load both sections and done arrays from local storage
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
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      // If dropping in the same container, just reorder
      const items = event.container.data;
      const item = items[event.previousIndex];
      items.splice(event.previousIndex, 1);
      items.splice(event.currentIndex, 0, item);
    } else {
      // If dropping in a different container, transfer the item
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.saveSections(); // Save to local storage if needed
  }

  // Delete section || done
  deleteSection(index: number, list: 'left' | 'right') {
    if (list === 'left') {
      this.sections.splice(index, 1);
    } else {
      this.done.splice(index, 1);
    }
    this.saveSections(); // Save to local storage if needed
  }

  // Update section content
  updateContent(index: number, content: string) {
    this.sections[index].content = content;
    this.saveSections(); // Save to local storage if needed
  }

  // Update done content
  updateContentDone(index: number, content: string) {
    this.done[index].content = content;
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

  // Update done content(video)
  updateContentsDone(index: number, url: string) {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&\n]{11})/
    );
    if (videoIdMatch) {
      this.done[
        index
      ].content = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    } else {
      this.done[index].content = ''; // Clear if not a valid YouTube URL
    }
    this.saveSections(); // Save to local storage if needed
  }

  // Save both sections and done arrays to local storage
  saveSections() {
    const dataToSave = {
      sections: this.sections,
      done: this.done,
    };
    localStorage.setItem('templateSections', JSON.stringify(dataToSave));
  }

  // Load both sections and done arrays from local storage
  loadSections() {
    const savedData = localStorage.getItem('templateSections');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.sections = parsedData.sections || [];
      this.done = parsedData.done || [];
    }
  }
}
