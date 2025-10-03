import { useDialogStore } from '../../Store/DialogStore'
import AddTransactionDialog from '../b-level/dialog/transaction/Add-Transaction'
import TransactionDetail from '../b-level/dialog/transaction/Transaction-Detail';

export default function Dialog() {
    const dialog = useDialogStore()

    if(!dialog.isOpen) return null;

    switch(dialog.dialogName){
        case "add_transaction":
            return <AddTransactionDialog />
        case "transaction_detail":
            return <TransactionDetail transaction={dialog.dialogData}/>
        default:
            return null;
    }
}
