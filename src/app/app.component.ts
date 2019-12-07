import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';
  @ViewChild('childA', {static: false}) TodoComponent;
  @ViewChild('childB', {static: false}) SearchComponent;
// 在父组件中调用自组件方法
  clickMe() {
    console.log('111')
    this.TodoComponent.greeting();
    this.SearchComponent.greeting();
  }

}
