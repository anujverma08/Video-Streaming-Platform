import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VplayerComponent } from './vplayer/vplayer.component';
import { AboutComponent } from './about/about.component';
import { PreviewComponent } from './preview/preview.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", redirectTo: 'preview', pathMatch: 'full'},
  { path: 'preview', component:PreviewComponent},  
  { path: 'contact', component:ContactComponent},
  { path: 'vplayer', component:VplayerComponent},
  { path: 'about', component:AboutComponent},
  { path: 'vplayer/:title', component:VplayerComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
