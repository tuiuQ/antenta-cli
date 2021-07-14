export interface CommandOptions {
    [key: string]: string | boolean;
}
export declare type pkg = 'npm' | 'yarn';
export declare type tool = 'webpack' | string;
export interface CreateOptions {
    tool: tool;
    install: boolean;
    pkgTool: pkg;
}
