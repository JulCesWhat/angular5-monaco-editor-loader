import { NgModule, NgZone, ModuleWithProviders } from '@angular/core';

import { MonacoEditorLoaderService } from './../services/monaco-editor-loader.service';
import { MonacoEditorLoaderDirective } from './../directives/monaco-editor-loader.directive';

export function monacoEditorLoaderServiceFactory(ngZone: NgZone) {
    return new MonacoEditorLoaderService(ngZone);
}

@NgModule({
    declarations: [
        // Pipes.
        // Directives.
        // Components.
        MonacoEditorLoaderDirective
    ],
    exports: [
        // Pipes.
        // Directives.
        // Components.
        MonacoEditorLoaderDirective
    ]
})
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class MonacoEditorLoaderModule {

    /**
     * Use in AppModule: new instance of MonacoEditorLoaderService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: MonacoEditorLoaderModule,
            providers: [
                {
                    provide: MonacoEditorLoaderService,
                    deps: [NgZone],
                    useFactory: monacoEditorLoaderServiceFactory
                }
            ]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of MonacoEditorLoaderService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: MonacoEditorLoaderModule,
            providers: [
                {
                    provide: MonacoEditorLoaderService,
                    deps: [NgZone],
                    useFactory: monacoEditorLoaderServiceFactory
                }
            ]
        };
    }

}
