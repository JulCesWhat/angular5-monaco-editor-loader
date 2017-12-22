import { NgModule, NgZone, ModuleWithProviders } from '@angular/core';
import { MonacoEditorLoaderService } from './../services/monaco-editor-loader.service';
import { MonacoEditorLoaderDirective } from './../directives/monaco-editor-loader.directive';

export function monacoEditorLoaderServiceFactory(ngZone: NgZone) {
  return new MonacoEditorLoaderService(ngZone);
}

@NgModule({
  declarations: [
    MonacoEditorLoaderDirective
  ],
  exports: [MonacoEditorLoaderDirective],
  providers: [
    {
      provide: MonacoEditorLoaderService,
      deps: [NgZone],
      useFactory: monacoEditorLoaderServiceFactory
    }
  ]
})
export class MonacoEditorLoaderModule {
}
