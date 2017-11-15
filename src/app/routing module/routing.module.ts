import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from '../analysisComponent/analysis.component';
import { QueryComponent } from '../QueryComponent/query.component';
import { DashboardComponent } from '../dashboardComponent/dashboard.component';
import { ipAttackComponent } from '../analysisComponent/ipAttacks/ipAttack.component';
import { countryAttacksComponent } from '../analysisComponent/countryAttacks/countryAttacks.component'; 
import { targetedCountryComponent } from '../analysisComponent/targetedCountry/targetedCountry.component'; 
import { targetedServiceComponent } from '../analysisComponent/targetedService/targetedService.component'; 
const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard',  component: DashboardComponent},
  { path: 'analysis',  component: AnalysisComponent},
  { path: 'query', component: QueryComponent},
  { path: 'ipAttack', component: ipAttackComponent},
  { path: 'countryAttack', component: countryAttacksComponent},
  { path: 'targetedCountry', component: targetedCountryComponent},
  { path: 'targetedService', component: targetedServiceComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponent = [DashboardComponent, AnalysisComponent, QueryComponent , ipAttackComponent, countryAttacksComponent,
targetedCountryComponent, targetedServiceComponent  ]