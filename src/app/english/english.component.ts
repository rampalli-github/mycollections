import { Component, OnInit } from '@angular/core';
import {PoemService} from '../poem.service';
@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent implements OnInit {

  selectedPoem: string;
  poems: Array <any>;
  currPoemObj: any;
  constructor(private poemService: PoemService) {
    this.poems = this.poemService.englishPoems
    this.currPoemObj = this.poemService.onEnglishPoemSelection(this.selectedPoem);
  }

  ngOnInit() {
  }

  onPoemSelection(){
    this.currPoemObj = this.poemService.onEnglishPoemSelection(this.selectedPoem);
  }
}
