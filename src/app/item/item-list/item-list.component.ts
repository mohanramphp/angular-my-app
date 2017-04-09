import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  tableHeader: Array<String> = [];
  tableContent: Array<Object> = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe((response: any) => {
      for (let key in response.metadata) {
        this.tableHeader.push(response.metadata[key]);
      }
      response.data.forEach(row => {
        let model: Array<string> = [];

        for (let key in response.metadata) {
          model.push(row[key]);
        }
        this.tableContent.push(model);
      });
      /*console.log("this.tableHeader");
      console.log(this.tableHeader);
      console.log("this.tableContent");
      console.log(this.tableContent);*/

    })
  }

}
