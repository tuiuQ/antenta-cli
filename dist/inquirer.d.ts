import addRouter from './actions/addRouter';
export declare const libraryInfo: ({
    name: string;
    version: string;
    alias: string;
    generate: typeof addRouter;
} | {
    name: string;
    version: string;
    alias: string;
    generate?: undefined;
})[];
export declare const installQues: {
    type: string;
    name: string;
    default: boolean;
    message: string;
};
export declare const pkgToolQues: {
    type: string;
    name: string;
    choices: string[];
    default: string;
    message: string;
};
export declare const libraryQues: {
    type: string;
    name: string;
    choices: ({
        name: string;
        version: string;
        alias: string;
        generate: typeof addRouter;
    } | {
        name: string;
        version: string;
        alias: string;
        generate?: undefined;
    })[];
    message: string;
};
