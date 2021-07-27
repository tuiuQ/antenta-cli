export interface CreateOptions {
    install: boolean;
    tool: string;
    packageTool: 'npm' | 'yarn';
}
export interface AddOptions {
    tsx: boolean;
    component: boolean;
    directives: boolean;
    pages: boolean;
}
