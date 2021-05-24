import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminserviceService } from '../../../adminservices/adminservice/adminservice.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
 @Input() bookarray= [] as any;
 @Output() deleteEvent = new EventEmitter<string>();
  constructor(private admin : AdminserviceService) { }

  ngOnInit(): void {
  }


  
}
