import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent, canActivate:[AuthGuardGuard]},
  {path:'list', component:ItemListComponent},
  {path:'add', component:AddItemComponent},
  {path:'pipe', component:PipeComponent},
  {path:'palette', component:ColorPaletteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
