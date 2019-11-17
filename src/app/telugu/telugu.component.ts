import { Component, OnInit } from '@angular/core';
import {PoemService} from '../poem.service';
@Component({
  selector: 'app-telugu',
  templateUrl: './telugu.component.html',
  styleUrls: ['./telugu.component.scss']
})
export class TeluguComponent implements OnInit {

  selectedPoem: string;
  poems: Array <any>;
  currPoemObj: any;
  constructor(private poemService: PoemService) {
    this.poems = this.poemService.teluguPoems
    this.currPoemObj = this.poemService.onTeluguPoemSelection(this.selectedPoem);
  }

  ngOnInit() {
  }

  onPoemSelection(){
    this.currPoemObj = this.poemService.onTeluguPoemSelection(this.selectedPoem);
  }

}
