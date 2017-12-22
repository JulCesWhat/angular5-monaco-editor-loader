import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MonacoEditorLoaderService } from './../services/monaco-editor-loader.service';

@Directive({
    selector: '[loadMonacoEditor]'
})
export class MonacoEditorLoaderDirective {
    @Input() set loadMonacoEditor(value: any) {
        this.monacoLoaderService.monacoPath = value;
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private monacoLoaderService: MonacoEditorLoaderService) {
            monacoLoaderService.isMonacoLoaded.subscribe((isLoaded) => {
            if (isLoaded) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        });
    }
}
