import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SignatureOutputComponent } from './signature-output/signature-output.component';


const routes: Routes = [
  { path: 'input', component: UserinfoComponent },
  { path: '',   redirectTo: '/input', pathMatch: 'full' },
  { path: 'result', component: SignatureOutputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
