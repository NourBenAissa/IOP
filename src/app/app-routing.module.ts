import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ConditionsTarifsComponent } from './pages/conditions-tarifs/conditions-tarifs.component';
import { DeveloppementCommercialComponent } from './pages/services/developpement-commercial/developpement-commercial.component';
import { BackOfficeCommercialComponent } from './pages/services/back-office-commercial/back-office-commercial.component';
import { SecretariatComponent } from './pages/services/secretariat/secretariat.component';
import { AdministrationDesVentesComponent } from './pages/services/administration-des-ventes/administration-des-ventes.component';
import { SourcingLocalInternationalComponent } from './pages/services/sourcing-local-international/sourcing-local-international.component';
import { GestionDesAchatsComponent } from './pages/services/gestion-des-achats/gestion-des-achats.component';
import { GestionDesProjetsComponent } from './pages/services/gestion-des-projets/gestion-des-projets.component';
import { ComptabiliteComponent } from './pages/services/comptabilite/comptabilite.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'conditions-tarifs', component: ConditionsTarifsComponent },
  
  // Service pages
  { path: 'developpement-commercial', component: DeveloppementCommercialComponent },
  { path: 'back-office-commercial', component: BackOfficeCommercialComponent },
  { path: 'secretariat', component: SecretariatComponent },
  { path: 'administration-des-ventes', component: AdministrationDesVentesComponent },
  { path: 'sourcing-local-international', component: SourcingLocalInternationalComponent },
  { path: 'gestion-des-achats', component: GestionDesAchatsComponent },
  { path: 'gestion-des-projets', component: GestionDesProjetsComponent },
  { path: 'comptabilite', component: ComptabiliteComponent },

  // Wildcard route for 404: redirects any unknown URL to the homepage.
  // This must always be the LAST route in the list.
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { 
    // This setting ensures that when you navigate to a new page, you start at the top.
    scrollPositionRestoration: 'enabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
