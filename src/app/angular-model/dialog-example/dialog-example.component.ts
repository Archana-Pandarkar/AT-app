import { Component, OnInit } from '@angular/core';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void{
    let openDialogRef = this.dialog.open(DialogContentComponent,{
      height: '500px',
      width: '600px',
      data:{
        name:  'Archana Pandarkar'

      }
    });
    openDialogRef.afterClosed().subscribe(data=>{
      console.log(data);
      console.log(data.title);
      console.log(data.name);
      console.log(data.lastname);
      console.log(data.email);
      console.log(data.phone);
      console.log(data.picker);
      console.log(data.gender);

      console.log(data);
    })

  }

}
