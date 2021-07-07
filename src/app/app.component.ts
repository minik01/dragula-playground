import {Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';


  public mapList: {}[] = [
    {lat: '21.37', lng: '21.37'},
    {lat: '12.5', lng: '60.2'},
    {lat: '40', lng: '-60.2'}
  ];

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.mapList, event.previousIndex, event.currentIndex);
  }
}
