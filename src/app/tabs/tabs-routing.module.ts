import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [ 
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)       
      },
      {
        path: 'fixture',
        loadChildren: () => import('../fixture/fixture.module').then( m => m.FixturePageModule)

      },
      {
        path: 'statistics',
        loadChildren: () => import('../statistics/statistics.module').then( m => m.StatisticsPageModule)       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
