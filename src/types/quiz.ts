export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type Category = {
    id: Number;
    name: String;
    icon: String;
};

export type Question = {
    category: string;
    correctAnswer: string;
    difficulty: string;
    incorrectAnswers: string[];
    question: string;
    type: string;
    listAlternatives?: string[];
};

export type Answer = {
    question: string;
    userAnswer: string;
    isCorrect: boolean;
    correctAnswer: string;
};

export type Quiz = {
    questions: Question[];
    answers: Answer[];
    totalScore: number;
    isGameOver: boolean;
    isLeft: boolean;
    currentNumberQuestion: number;
};

export type Preferences = {
    idCategory: number;
    nameCategory: string;
    difficulty: string;
};
