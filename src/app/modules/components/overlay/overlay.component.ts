import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Inject }  from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, AfterViewInit {
  public show:boolean = false;

  public buttonName:any = 'Show';
  public right:boolean=true;
  public right1:boolean=true;


  constructor(@Inject(DOCUMENT) document: Document) {
  }
  ngAfterViewInit(): void {
    feather.replace();
  }

  ngOnInit(): void {
  }
  openNav(){
    this.show = !this.show;
    this.right=!this.right;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
      
    else
      this.buttonName = "Show";
      
  }
  closeNav(){
    this.show = !this.show;
    this.right=!this.right;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
      
  }


}


