import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit , AfterViewInit{

  constructor() { }
  ngAfterViewInit(): void {
    feather.replace();
  }

  ngOnInit(): void {
  }

}
