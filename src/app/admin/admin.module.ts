import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
  ],
  declarations: [AdminComponent, HomeComponent],
  providers: [NbSidebarService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
