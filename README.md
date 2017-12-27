# Angular 5 Monaco Editor Loader
>Build an Angular 5 application with Monaco Editor.

This library allows you to load Monaco Editor in your **Angular v5** apps written in _TypeScript_, _ES6_ or _ES5_. 
The project is based on the official _Angular_ packages and xyz.MonacoEditorLoader.


Install with the command:

```
npm i @julceswhat/angular5-monaco-editor-loader
```

An easy to use Monaco Editor Loader Service for Angular 5! Just add `*loadMonacoEditor` in your HTML Element, and you don't have to worry about timing issues!

```
<div *loadMonacoEditor id="container"></div> 

```

With custom monaco-editor path
```
<div *loadMonacoEditor="'libs/monaco-editor/vs'" id="container"></div> 

```

Get the [Changelog](https://github.com/julceswhat/angular5-monaco-editor-loader/blob/master/CHANGELOG.md).

## Contents
* [1 Prerequisites](#1)
* [2 Using webpack](#2)
* [3 Using Angular CLI](#3)
* [4 Using the Library](#4)
* [5 Running the demo app](#5)
* [6 Motivation](#6)

## <a name="1"></a>1 Prerequisites

1. Make sure that you are serving `Monaco Editor` in `/assets/monaco-editor/vs`

2. If you are using straight `app.component` then **DO NOT USE the directive**. Instead use the following code in `app.component.ts`:

```
  constructor(private monaco: MonacoEditorLoaderService) {

  }

  this.monaco.isMonacoLoaded.subscribe(value => {
      if (value) {
        // Initialize monaco...
      }
    })
```

3. If you are creating a component on top of monaco, then just use the directive `*loadMonacoEditor` inside your component's HTML

## <a name="2"></a>2 Using webpack
If you are using `Webpack` do the following:
```
plugins: [
     new CopyWebpackPlugin([
         {
             from: 'node_modules/monaco-editor/min/vs',
             to: './src/assets/monaco',
         }
     ]),
 ],
 ```

## <a name="3"></a>3 Using Angular CLI

1. For development modify `.angular-cli.json` to the following:
 ```
 "assets": [
        {
          "glob": "**/*",
          "input": "../node_modules/monaco-editor/dev/",
          "output": "./assets/monaco-editor/"
        },
        {
          "glob": "favicon.ico",
          "input": "./",
          "output": "./"
        }
      ]
```

2. For production modify `.angular-cli.json` to the following:
Modify `.angular-cli.json` to the following:
 ```
 "assets": [
        {
          "glob": "**/*",
          "input": "../node_modules/monaco-editor/min/",
          "output": "./assets/monaco-editor/"
        },
        {
          "glob": "**/*",
          "input": "../node_modules/monaco-editor/min-maps/",
          "output": "./assets/min-maps/"
        },
        {
          "glob": "favicon.ico",
          "input": "./",
          "output": "./"
        }
      ]
```

3. Add `/// <reference path="./../node_modules/monaco-editor/monaco.d.ts" />` in you `typings.d.ts` file to remove monaco editor undefined errors and allow compilation.

## <a name="4"></a>4 Usage

1. In your component's module or app module. Import the following:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MonacoEditorLoaderModule, MonacoEditorLoaderService } from '@julceswhat/angular5-monaco-editor-loader';

import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorLoaderModule <-- Insert this>
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

2. Just add `*loadMonacoEditor`, so with your custom component where you plan to create your own monaco component. Just add the following:

```
<monaco-editor *loadMonacoEditor></monaco-editor>
```

3. And in my custom component where I want to host `Monaco Editor` I just do the following like I expect the Monaco library to be loaded at this point:

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements OnInit {

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
```

4. And that's it! No `timeouts`! No `then`! It just goes with the correct flow in Angular!

## <a name="5"></a>5 Running the demo app
Make sure you have **Angular CLI** installed!

1. Clone this repository
2. `cd demo`
3. `npm install`
4. `ng serve`

Most of the code that was found [here](https://github.com/leolorenzoluis/xyz.MonacoEditorLoader) just wasn't working with Angular 5.

## <a name="6"></a>6 Motivation
I wanted to use Monaco Editor with my Angular 5 project, but couldn't find any library that would help me with this. Since I couldn't find anything, I decided to refactor a library that worked for previous Angular versions.

Most of the code that was found [here](https://github.com/leolorenzoluis/xyz.MonacoEditorLoader) just wasn't working with Angular 5.

## Previous versions
- **Angular v4** &amp; **Angular v2**
    - [Branch](https://github.com/leolorenzoluis/xyz.MonacoEditorLoader)

## License
MIT