import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LmsDashboardComponent } from './Components/lms-dashboard/lms-dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { ArchivefavlistComponent } from './Pages/archivefavlist/archivefavlist.component';
import { BooklistComponent } from './Pages/booklist/booklist.component';
import { GenresComponent } from './Pages/genres/genres.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component : LmsDashboardComponent
  },
  {
    path: '',
    component: GenresComponent
  },
  {
    path:':genre/booklist',
    component: BooklistComponent,
  },
  {
    path:'booklist/:category',
    component: ArchivefavlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
