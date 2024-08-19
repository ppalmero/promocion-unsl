import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postas',
  standalone: true,
  imports: [],
  templateUrl: './postas.component.html',
  styleUrl: './postas.component.css'
})
export class PostasComponent {
  @Input() postas: number = 0;
}
