import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss']
})
export class ProductsSectionComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    feather.replace();
  }

  ngOnInit(): void {
  }

}
