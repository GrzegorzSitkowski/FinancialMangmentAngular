export interface GoalEdit{
    id: string;
    name: string;
    targetAmount: number;
    savedAmount: number;
    date: Date;
    note: string;
    categoryId: number;
}