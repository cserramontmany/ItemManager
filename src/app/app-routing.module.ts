import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemManagerComponent } from './item-manager/item-manager.component';

const routes: Routes = [
  { path: '', component: ItemManagerComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
