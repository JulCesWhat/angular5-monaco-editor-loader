import { inject, TestBed } from '@angular/core/testing';

import { MonacoEditorLoaderService } from './../../monaco-editor-loader';

describe('MonacoEditorLoaderService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MonacoEditorLoaderService
            ]
        });
    });

    it('should start with a defaul path value',
        inject([MonacoEditorLoaderService],
            (monacoEditorLoaderService: MonacoEditorLoaderService) => {

                //monacoLoaderService.monacoPathVal("Tigrillo");
                expect(monacoEditorLoaderService.monacoPathVal).toEqual("assets/monaco-editor/vs");
            })
    );

});