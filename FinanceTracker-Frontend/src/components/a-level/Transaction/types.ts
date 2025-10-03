export type Transaction={
    userId?:string,
    amount: number,
    type: 'INCOME' | 'EXPENSE',
    category: string,
    date: string,
    description?: string,
}