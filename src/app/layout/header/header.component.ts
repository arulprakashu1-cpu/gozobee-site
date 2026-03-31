
import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MegaMenuComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild(MegaMenuComponent)
  megaMenu!: MegaMenuComponent;

  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }
}
