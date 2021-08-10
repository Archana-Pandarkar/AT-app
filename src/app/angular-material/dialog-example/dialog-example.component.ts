import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { Console } from 'console';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
 openDialog(){
   let openDilogRef = this.dialog.open(DialogContentComponent ,{
     height: '400px',
     width: '600px',
     data: {
       name: 'archana Pandarkar'
     },
     position: {
       bottom:'0',
     }
   });
   openDilogRef.afterClosed().subscribe(data=>{
     console.log(data)
   })
 }
}
