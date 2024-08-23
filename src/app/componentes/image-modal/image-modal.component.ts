import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent {
  @Input() imageSrc: string = '';
  isOpen: boolean = false;

  openModal(image: string) {
    this.imageSrc = image;
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
