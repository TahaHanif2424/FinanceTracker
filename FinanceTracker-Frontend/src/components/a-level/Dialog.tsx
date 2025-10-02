import { useDialogStore } from '../../Store/DialogStore'
import AddTransactionDialog from '../b-level/dialog/transaction/Add-Transaction'

export default function Dialog() {
    const dialog = useDialogStore()

    if(!dialog.isOpen) return null;

    switch(dialog.dialogName){
        case "add_transaction":
            return <AddTransactionDialog />
        default:
            return null;
    }
}
