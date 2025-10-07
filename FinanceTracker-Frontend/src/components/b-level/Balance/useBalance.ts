import { useQuery, useMutation } from "@tanstack/react-query";
import { getBalance, addBalance } from "./function";

export default function useBalance() {

    const {data:balanceData, isLoading, refetch} = useQuery({
    queryKey: ['balance'],
    queryFn: () => getBalance("ae66fe75-c3ee-4bd7-98d9-74c7dbe5520e"),
  });

  const balanceMutation = useMutation({
    mutationFn: ({ balance, userId }: { balance: number; userId: string }) => addBalance(balance, userId),
    onSuccess: () => {
      refetch();
    },
  });

  return { balanceData, isLoading, refetch, balanceMutation };
}
