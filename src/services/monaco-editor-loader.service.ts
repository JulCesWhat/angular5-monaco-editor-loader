import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MonacoEditorLoaderService {
    public isMonacoLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // Public for testing purposes.

    public monacoPathVal = 'assets/monaco-editor/vs';
    set monacoPath(value: any) {
        if (value) {
            this.monacoPathVal = value;
        }
    }

    constructor(ngZone: NgZone) {
        const onGotAmdLoader = () => {

            // Load monaco
            // console.log(this.monacoPathVal);
            (window as any).require.config({ paths: { vs: this.monacoPathVal } });
            (window as any).require(['vs/editor/editor.main'], () => {
                ngZone.run(() => this.isMonacoLoaded.next(true));
            });
        };

        // Load AMD loader if necessary
        if (!(window as any).require) {
            const loaderScript = document.createElement('script');
            loaderScript.type = 'text/javascript';
            loaderScript.src = `${this.monacoPathVal}/loader.js`;
            loaderScript.addEventListener('load', onGotAmdLoader);
            document.body.appendChild(loaderScript);
        } else {
            onGotAmdLoader();
        }
    }
}
