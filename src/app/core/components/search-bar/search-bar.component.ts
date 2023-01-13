import { Component, OnInit } from '@angular/core';
import { AfterViewInit} from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements
OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    feather.replace();
  }

  ngOnInit(): void {
  }

}
