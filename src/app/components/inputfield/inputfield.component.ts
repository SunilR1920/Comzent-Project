import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputfield',
  standalone: true,
  imports: [],
  templateUrl: './inputfield.component.html',
  styleUrl: './inputfield.component.css'
})
export class InputfieldComponent implements OnInit {
  @Input() FormControlName: string='';
  @Input() placeholder: string='';
  @Input() type: string='';
  @Input() class: string='';


  ngOnInit(): void {
    
  }

}
