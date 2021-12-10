import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'cat', redirectTo:'cat/index', pathMatch: 'full'},
  {path: 'cat/index', component: IndexComponent },
  {path: 'cat/create', component: CreateComponent },
  {path: 'cat/edit/:idCat', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
