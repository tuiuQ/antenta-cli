import { libraryTypes } from "../typings/types";
export declare function addLibrary(library: libraryTypes, projectName: string): Promise<void>;
export declare function generateMain(libraries: Array<libraryTypes>, projectName: string): void;
