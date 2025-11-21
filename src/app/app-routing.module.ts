import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

const routes: Routes = [
  // {
  //   path: "home",
  //   component: Um_componente_De_pagina
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
