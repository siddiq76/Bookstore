import { Component, OnInit, Input} from '@angular/core';
import { DialogComponent } from '../dialog/dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { AdminserviceService} from '../../adminservices/adminservice/adminservice.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  

  constructor(public dialog: MatDialog, private admin: AdminserviceService) { }

  ngOnInit(): void {
    
  }

  openDialog(){
    this.dialog.open(DialogComponent);
  }

  
}


