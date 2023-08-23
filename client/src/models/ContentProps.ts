export interface ContentProps {
  contentCategory: string;
  questionContent?: QuestionProps;
  answerContent?: AnswerProps;
}

export interface QuestionProps {
  content: string;
  postDate: string;
  name?: string;
  userId: number;
}

export interface AnswerProps {
  answerId: number;
  answerBody: string;
  answerDate: string;
  userId: number;
  name: string;
}
