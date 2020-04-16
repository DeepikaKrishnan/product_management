import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { PipeComponent } from './components/pipe/pipe.component';
import { OddevenPipe } from './custom-pipe/oddeven.pipe';
import { FactorialPipe } from './custom-pipe/factorial.pipe';
import { RandomPipe } from './custom-pipe/random.pipe';
import { FormsModule } from '@angular/forms';
import { SquarecubicPipe } from './custom-pipe/squarecubic.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemListComponent,
    AddItemComponent,
    PipeComponent,
    OddevenPipe,
    FactorialPipe,
    RandomPipe,
    SquarecubicPipe,
    HighlightDirective,
    ColorPaletteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
