import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const itemRoutes: Routes = [
    {
        path: '',
        component: ItemComponent,
        children: [
            {
                path: ':id',
                component: ItemDetailComponent
            },
            {
                path: '',
                component: ItemListComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(itemRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ItemRoutingModule { }