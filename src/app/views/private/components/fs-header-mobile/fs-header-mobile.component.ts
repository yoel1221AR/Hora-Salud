import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fs-header-mobile',
  templateUrl: './fs-header-mobile.component.html',
  styleUrls: ['./fs-header-mobile.component.scss']
})
export class FsHeaderMobileComponent implements OnInit {

  constructor(public dialog: MatDialog,
    ){


  }
  ngOnInit(): void {
    
  }

  closeAllDialog(): void{
    this.dialog.closeAll();
  }
}
