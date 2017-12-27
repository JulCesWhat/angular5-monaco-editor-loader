import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: false
    });

    // compiler options
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2016,
      allowNonTsExtensions: true
    });

    // extra libraries
    monaco.languages.typescript.javascriptDefaults.addExtraLib([
      'declare class Facts {',
      '    /**',
      '     * Returns the next fact',
      '     */',
      '    static next():string',
      '}',
    ].join('\n'), 'filename/facts.d.ts');

    var jsCode = [
      '"use strict";',
      '',
      "class Chuck {",
      "    greet() {",
      "        return Facts.next();",
      "    }",
      "}"
    ].join('\n');

    monaco.editor.create(document.getElementById("container"), {
      value: jsCode,
      language: "javascript"
    });
  }
}
