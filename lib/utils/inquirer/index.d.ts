declare type QuestionType = 'input' | 'number' | 'password' | 'list' | 'rawList' | 'expand' | 'checkbox' | 'confirm' | 'editor' | undefined;
interface Choices {
    name: string;
    value?: string;
}
interface Question {
    type?: QuestionType;
    name?: string;
    message?: string;
    default?: string | boolean;
    when?: boolean | (() => boolean);
    choices?: Array<Choices> | Choices | Array<string>;
}
export default function (_options: Question): Promise<string | undefined>;
export {};
