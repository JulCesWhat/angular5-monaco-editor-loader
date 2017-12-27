import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MonacoEditorLoaderModule, MonacoEditorLoaderService} from '@julceswhat/angular5-monaco-editor-loader';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
