import { useMutation, useQuery } from "@tanstack/react-query";
import { addIncome, getIncome } from "./function";

export default function useIncome() {
    const { data: incomeData, isLoading, refetch } = useQuery({
        queryKey: ['income'],
        queryFn: () => getIncome("ae66fe75-c3ee-4bd7-98d9-74c7dbe5520e"), // Replace with actual userId
    });
    const incomeMutation = useMutation({
        mutationFn: ({ monthlyIncome, userId }: { monthlyIncome: number; userId: string }) => addIncome(userId, monthlyIncome),
        onSuccess: () => {
            refetch();
        },
    });
    return { incomeData, isLoading, refetch, incomeMutation };
}
