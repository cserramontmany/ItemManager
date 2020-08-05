import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from './../shared/services/item-service.service';
@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {

  constructor(private itemService: ItemServiceService) { }

  ngOnInit(): void {
    this.itemService.getListOfGroup().subscribe();
  }

}
