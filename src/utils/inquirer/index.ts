import inquirer, { QuestionCollection } from "inquirer"

type QuestionType = 'input' | 'number' | 'password' | 'list' | 'rawList' | 'expand' | 'checkbox' | 'confirm' | 'editor' | undefined

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


export default async function (_options: Question) {
  _options.name = 'name'
  const answers = await inquirer.prompt<Question>(_options as QuestionCollection<Question>)
  return answers.name
}