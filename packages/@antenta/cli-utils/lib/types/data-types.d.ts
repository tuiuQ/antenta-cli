export interface Versions {
    [key: string]: {
        name: string;
        version: string;
        private: boolean;
        main: string;
    };
}
export interface NpmInfo {
    name: string;
    description: string;
    'dist-tags': {
        latest: string;
    };
    versions: Versions;
}
