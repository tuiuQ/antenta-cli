interface FileItem {
    file: string;
    isDir: boolean;
}
export declare function downloadTemplates(projectName: string, tool?: string): Promise<boolean | ErrorConstructor>;
export declare function recursiveDir(sourceDir: string): Array<FileItem>;
export {};
