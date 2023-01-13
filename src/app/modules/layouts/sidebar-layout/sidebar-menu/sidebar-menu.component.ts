import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements
OnInit, AfterViewInit {

  constructor(private theme: ThemeService) { }
  ngAfterViewInit(): void {
    feather.replace();
  }

  ngOnInit(): void {
  }
  public switchTheme(): void {
    if (this.theme.current === 'light') {
        this.theme.current = 'dark';
    } else {
        this.theme.current = 'light';
    }
  }


}
