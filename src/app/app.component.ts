import { Component } from '@angular/core';
declare const vtmapgl: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vt-map';
  array = [
    { name: 'A', email: 'add1', age: 18 },
    { name: 'B', email: 'add2', age: 18 },
    { name: 'C', email: 'add3', age: 18 },
    { name: 'D', email: 'add4', age: 18 },
  ];
  tabKey = [];
  tabValue = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
  }
  getData() {
    this.array.forEach(element => {
      this.tabKey = Object.keys(element);
      this.tabValue.push(Object.values(element))
    })
  };
  ShowOrHideColumn(val, index) {
    let classIndex = document.getElementsByClassName(index);
    if (val.target.checked) {
      for (let i = 0; i < classIndex.length; i++) {
        classIndex[i].classList.add('tabCol');

      }
    } else {
      for (let i = 0; i < classIndex.length; i++) {
        classIndex[i].classList.remove('tabCol');

      }
    }
    console.log(index);
  }
}
