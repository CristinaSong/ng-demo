import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  public keyword: string;

  public todolist: any[] = [];

  constructor(private hero: HeroService) { }

  ngOnInit() {

  }

  doAdd(e){
    if(e.keyCode == 13){
        if(!this.todolistHasKeyword(this.todolist, this.keyword)){
          this.todolist.push({
            title: this.keyword,
            status: 0                   //0表示代办事项  1表示已完成事项
          });
          this.keyword='';
        }else{
          alert('数据已经存在');
          this.keyword='';
        }
     }
  }

  deleteData(key){
    this.todolist.splice(key,1);
  }

  //如果数组里面有keyword返回true  否则返回false
  todolistHasKeyword(todolist:any, keyword:any){
    //异步  会存在问题
    // todolist.forEach(value => {

    //   if(value.title==keyword){

    //       return true;
    //   }
    // });
    if(!keyword)  return false;

    for(var i=0; i<todolist.length; i++){
      if(todolist[i].title==keyword){
          return true;
      }
    }
    return false;
  }
}
