import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})


export class SearchComponent implements OnInit {
  public keyword: string;
  public historyList: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  doSearch(){
    if(this.historyList.indexOf(this.keyword)==-1){
      this.historyList.push(this.keyword);
    }
    this.keyword = '';
  }
  deleteHistroy(key){
      alert(key);
      this.historyList.splice(key,1);
  }

  // Dom 操作
  // ngAfterViewInit：初始化完组件视图及其子视图之后调用（dom操作放在这个里面）
  ngAfterViewInit(){
      var boxDom:any=document.getElementById('box');
      boxDom.style.color='red';
  }

  public name: string = 'search组件';

  greeting() {
    console.log('hello ' + this.name);
  }
}
