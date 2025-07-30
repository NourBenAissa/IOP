import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
