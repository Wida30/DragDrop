import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent {

  public list1:any;
  public list2:any;

  ngOnInit(): void {

    this.list1 = [];
    this.list2 = [];

    for (let index = 0; index <10; index++) {
      this.list1.push(index)
      
    }

    for (let index = 10; index < 20; index++) {
      this.list2.push(index)
      
    }

   

  }

  

  drop(event: CdkDragDrop<number[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Sino lo paso al otro contenedor
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

  }

}
