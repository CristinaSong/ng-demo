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

  constructor() {
    console.log('00构造函数执行了---除了使用简单的值对局部变量进行初始化之外，什么都不应该做')
   }
   ngOnChanges() {
    console.log('01ngOnChages执行了---当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)');
  }

  ngOnInit() {
      console.log('02ngOnInit执行了--- 请求数据一般放在这个里面');
  }
  ngDoCheck() {
      console.log('03ngDoCheck执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应');
  }
  ngAfterContentInit() {
      console.log('04ngAfterContentInit执行了---当把内容投影进组件之后调用');
  }
  ngAfterContentChecked() {
      console.log('05ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用');
  }
  ngAfterViewInit() : void {
      console.log('06 ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用（dom操作放在这个里面）');
  }
  ngAfterViewChecked() {
      console.log('07ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用');
  }

  ngOnDestroy() {
      console.log('08ngOnDestroy执行了····');
  }


}
