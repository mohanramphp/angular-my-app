import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemService } from './item.service';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule
  ],
  declarations: [
    ItemComponent,
    ItemListComponent,
    ItemDetailComponent
  ],
  providers:[
    ItemService
  ]
})
export class ItemModule { }
