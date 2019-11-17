import { Injectable } from '@angular/core';
import  *  as  english  from  './data/english.json';
import  *  as  telugu  from  './data/telugu.json';
@Injectable({
  providedIn: 'root'
})
export class PoemService {
  englishPoems:  Array <any> = (english  as  any).default;
  teluguPoems:  Array <any> = (telugu  as  any).default;
  selectedPoem: string;

  constructor() { }

  onEnglishPoemSelection(selectedPoem: string){
    if(selectedPoem) return this.englishPoems.find(x=> x.title === selectedPoem);
    else return this.getDefaultEnglishPoemObj();
  }

  onTeluguPoemSelection(selectedPoem: string){
    if(selectedPoem) return this.teluguPoems.find(x=> x.title === selectedPoem);
    else return this.getDefaultTeluguPoemObj();
  }

  getDefaultTeluguPoemObj(){
    return {
      "id": 0,
      "title": "",
      "icon": "art_track",
      "content": ["దయచేసి విషయము ఎంచుకోండి"]
    }
  }

  getDefaultEnglishPoemObj(){
    return {
      "id": 0,
      "title": "",
      "icon": "art_track",
      "content": ["Choose a title to see the poem here!"]
    }
  }
}
