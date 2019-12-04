import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public peopleInfo:any = {
    username: '',
    sex: '2',
    cityList: ['北京', '上海', '深圳'],
    city: '上海',

    hobby:[{
          title: '吃饭',
          checked:false
      },{
            title:'睡觉',
            checked:false
        },{

          title:'敲代码',
          checked:true
      }],

      mark:''
  }

  public student:any = '我是一个学生';

  public h = '<h4>这是一个 h2 用[innerHTML]来解析</h4>';

  public id = '123';

  public msg = '你好';

  public arr = [
    {name: '小1', age: 21},
    {name: '小2', age: 22},
    {name: '小3', age: 23},
    {name: '小4', age: 23},
  ];
  public score = 2;

  getData(){ /*自定义方法获取数据*/ //获取
    alert(this.msg);
  }
  setData(){
      //设置值
      this.msg='这是设置的值';
  }
  keyUpFn(e){
    console.log(e)
  }
  public flag=false;

  public list = [1, 3, 4, 5, 6];

  public attr='red';

  public today=new Date();

  public str = 'abcDEF';

  public num = 123.456789;

  constructor() { }

  ngOnInit() {
  }
  doSubmit(){
    /*
    jquery  dom操作
      <input type="text" id="username" />
      let usernameDom:any=document.getElementById('username');
      console.log(usernameDom.value);
    */

    console.log(this.peopleInfo, 'this.peopleInfo');
  }

}
