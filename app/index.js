System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/mx-test-angular2-cli.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){this.title="mx-test-angular2-cli works!"}return a=d([f.Component({moduleId:c.id,selector:"mx-test-angular2-cli-app",templateUrl:"mx-test-angular2-cli.component.html",styleUrls:["mx-test-angular2-cli.component.css"]}),e("design:paramtypes",[])],a)}();return b.MxTestAngular2CliAppComponent=g,c.exports}),System.registerDynamic("app/index.js",["./environment","./mx-test-angular2-cli.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./mx-test-angular2-cli.component");return b.MxTestAngular2CliAppComponent=e.MxTestAngular2CliAppComponent,c.exports});