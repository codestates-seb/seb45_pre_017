export interface ContentProps {
  contentCategory: string;
  questionContent?: QuestionProps;
  answerContent?: AnswerProps;
}

export interface QuestionProps {
  content: string;
  postDate: string;
  name?: string;
}

export interface AnswerProps {
  answerId: number;
  answerBody: string;
  answerDate: string;
  userId: number;
  name: string;
}

// "answerId": 21,
//         "answerBody": "test",
//         "answerDate": "2023-08-22T15:55:48",
//         "userId": 1,
//         "name": "홍길동"
