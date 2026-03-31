import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent {
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  openDropdown(name: string) {
    this.activeDropdown = name;
  }

  closeDropdown() {
    this.activeDropdown = null;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
