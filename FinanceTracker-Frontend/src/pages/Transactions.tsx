import TransactionContainer from '../components/a-level/Transaction/Transaction-container';
import { CONTENT_HEIGHT } from '../utils/constants';
import Button from '../components/c-level/Button';
import { useDialogStore } from '../Store/DialogStore';

export default function Transactions() {
  const { openDialog } = useDialogStore();

  return (
    <div className="p-6 bg-gray-50" style={{ height: CONTENT_HEIGHT }}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-career-darkGreen">Transactions</h1>
        </div>
        <Button onClick={() => openDialog('add_transaction')}>
          <span className="text-xl">+</span>
          Add Transaction
        </Button>
      </div>

      <TransactionContainer
        className="h-[calc(100%-120px)]"
      />
    </div>
  );
}
