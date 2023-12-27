import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttoncomp',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './buttoncomp.component.html',
  styleUrl: './buttoncomp.component.css'
})
export class ButtoncompComponent {

  @Input() buttonTitle: string='';
  @Input() value: string='';
  @Input() disabled: boolean=true;
}
