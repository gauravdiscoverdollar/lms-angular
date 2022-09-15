import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LmsDashboardComponent } from './Components/lms-dashboard/lms-dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { ArchivefavlistComponent } from './Pages/archivefavlist/archivefavlist.component';
import { BooklistComponent } from './Pages/booklist/booklist.component';
import { GenresComponent } from './Pages/genres/genres.component';
import { LastviewlistComponent } from './Pages/lastviewlist/lastviewlist.component';

const routes: Routes = [
  {
    path: '',
    component : LmsDashboardComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path:':genre/booklist',
    component: BooklistComponent,
  },
  {
    path:'booklist/:category',
    component: ArchivefavlistComponent
  },
  {
    path:'booklist/lastview/:number',
    component:LastviewlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
