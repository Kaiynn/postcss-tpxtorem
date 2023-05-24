interface Configs {
    baseNum: number;
    digit: number;
}

interface Decl {
    value: string;
    [propName: string]: any;
}

interface ExportModule {
    postcssPlugin: string;
    Once: (root:string) => void;
    Declaration: (decl:Decl) => void;
}

interface regexpCallback {
    (a: string, b: string): string;
  }

export {
    Configs,
    Decl,
    ExportModule,
    regexpCallback
}