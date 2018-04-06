/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface WebpackRequire {
  (id: string): any;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure(ids: string[], callback: (req: WebpackRequire) => void, chunkName?: string): void;
  context(directory: string, useSubDirectories?: boolean, regExp?: RegExp): WebpackContext;
}

interface WebpackContext extends WebpackRequire {
  keys(): string[];
}

// Extend typings
interface NodeRequire extends WebpackRequire {}

// jQuery
declare var jQuery: any;

declare var require: NodeRequire;

declare var Prism;
