package com.FutureConnect.FutureConnect.Transaction.Service;

import com.FutureConnect.FutureConnect.Auth.UserRepository;
import com.FutureConnect.FutureConnect.Model.Transaction;
import com.FutureConnect.FutureConnect.Model.User;
import com.FutureConnect.FutureConnect.Transaction.DTO.TransactionRequest;
import com.FutureConnect.FutureConnect.Transaction.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    public Transaction createTransaction(TransactionRequest request) {
        // Validate amount
        if (request.getAmount() <= 0) {
            throw new IllegalArgumentException("Amount must be greater than 0");
        }

        // Validate user exists
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        // Create transaction
        Transaction transaction = new Transaction();
        transaction.setUser(user);
        transaction.setType(request.getType());
        transaction.setCategory( request.getCategory() == null ? "General" : request.getCategory() );

        transaction.setDescription(
                request.getDescription() == null ? "" : request.getDescription()
        );

        transaction.setAmount(request.getAmount());

        return transactionRepository.save(transaction);
    }
}
