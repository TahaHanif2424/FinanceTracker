import React, { useState } from 'react';
import { useDialogStore } from '../../../../Store/DialogStore';
import Button from '../../../c-level/Button';
import Input from '../../../c-level/Input';

type TransactionFormData = {
  name: string;
  amount: string;
  type: 'income' | 'expense';
  category: string;
  date: string;
  time: string;
  description: string;
};

const AddTransactionDialog: React.FC = () => {
  const { closeDialog } = useDialogStore();

  const [formData, setFormData] = useState<TransactionFormData>({
    name: '',
    amount: '',
    type: 'expense',
    category: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0].slice(0, 5),
    description: '',
  });

  const categories = {
    expense: ['🛒 Groceries', '☕ Food & Drinks', '⚡ Utilities', '🚗 Transport', '🎮 Entertainment', '🏥 Healthcare', '📚 Education', '🛍️ Shopping', '🏠 Rent', '💼 Other'],
    income: ['💵 Salary', '💰 Investment', '🎁 Gift', '📈 Bonus', '💳 Refund', '💼 Other']
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeChange = (type: 'income' | 'expense') => {
    setFormData(prev => ({
      ...prev,
      type,
      category: '', // Reset category when type changes
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to save transaction
    console.log('Transaction data:', formData);
    closeDialog();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-career-lightGray/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-career-darkGreen to-career-mediumGreen p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-3xl">💳</span>
              Add Transaction
            </h2>
            <button
              onClick={closeDialog}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-career-darkGreen mb-3">
              Transaction Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleTypeChange('expense')}
                className={`
                  p-4 rounded-xl font-semibold transition-all duration-300 border-2
                  ${formData.type === 'expense'
                    ? 'bg-red-50 border-red-500 text-red-700 shadow-md'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-red-300'
                  }
                `}
              >
                <span className="text-2xl mb-2 block">💸</span>
                Expense
              </button>
              <button
                type="button"
                onClick={() => handleTypeChange('income')}
                className={`
                  p-4 rounded-xl font-semibold transition-all duration-300 border-2
                  ${formData.type === 'income'
                    ? 'bg-green-50 border-green-500 text-green-700 shadow-md'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-green-300'
                  }
                `}
              >
                <span className="text-2xl mb-2 block">💰</span>
                Income
              </button>
            </div>
          </div>

          {/* Transaction Name */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-career-darkGreen mb-2">
              Transaction Name *
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Grocery Store, Salary"
              required
            />
          </div>

          {/* Amount */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-career-darkGreen mb-2">
              Amount *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
              <Input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0.00"
                className="pl-8"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-career-darkGreen mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="
                w-full px-4 py-2 rounded-2xl shadow-sm border border-career-mediumGreen
                bg-career-lightGray text-career-darkGreen
                focus:outline-none focus:ring-2 focus:ring-career-darkGreen focus:border-career-darkGreen
                transition duration-300 ease-in-out
              "
            >
              <option value="">Select a category</option>
              {categories[formData.type].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-semibold text-career-darkGreen mb-2">
                Date *
              </label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-career-darkGreen mb-2">
                Time *
              </label>
              <Input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-career-darkGreen mb-2">
              Description (Optional)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Add notes about this transaction..."
              rows={3}
              className="
                w-full px-4 py-2 rounded-2xl shadow-sm border border-career-mediumGreen
                bg-career-lightGray text-career-darkGreen
                focus:outline-none focus:ring-2 focus:ring-career-darkGreen focus:border-career-darkGreen
                transition duration-300 ease-in-out resize-none
              "
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={closeDialog}
              className="flex-1 px-6 py-3 rounded-2xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              Cancel
            </button>
            <Button type="submit" className="flex-1">
              <span className="text-lg">✓</span>
              Add Transaction
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionDialog;
