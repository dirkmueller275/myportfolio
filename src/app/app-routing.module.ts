import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  
{path:'', component: HeaderComponent},
{path: 'datenschutz', component: DatenschutzComponent},
{path:'imprint',component: ImprintComponent},
{path:'about' , component: AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
