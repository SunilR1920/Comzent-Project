import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

@Injectable({
  providedIn: 'root'
})
export class AdminComponent {
  constructor(private router: Router) {}
  navigateToLink(){
    this.router.navigate(['/createProject']);
  }

  private activeMenu = new BehaviorSubject<string>('Create Project');
  currentMenu = this.activeMenu.asObservable();

  changeMenu(menu: string) {
    this.activeMenu.next(menu);
  }
}
