import { useAtom } from "jotai";
import { balanceAtom } from "../atoms/balance";

export const useBalance = () => {
    const [balance] = useAtom(balanceAtom);
    
    return balance;
}