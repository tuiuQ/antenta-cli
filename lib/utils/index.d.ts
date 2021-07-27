interface FileItem {
    file: string;
    isDir: boolean;
}
declare function recursiveDir(sourceDir: string): FileItem[];
declare function hasYarn(): boolean;
export { recursiveDir, hasYarn };
