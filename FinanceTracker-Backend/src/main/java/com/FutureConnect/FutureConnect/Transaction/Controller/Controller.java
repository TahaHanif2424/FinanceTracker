package com.FutureConnect.FutureConnect.Transaction.Controller;

import com.FutureConnect.FutureConnect.Model.Transaction;
import com.FutureConnect.FutureConnect.Transaction.DTO.TransactionRequest;
import com.FutureConnect.FutureConnect.Transaction.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transaction")
public class Controller {

    @Autowired
    private TransactionService transactionService;

    @PostMapping
    ResponseEntity<Transaction> createTransaction(@RequestBody TransactionRequest transaction) {
        System.out.println(transaction);
        Transaction createdTransaction = transactionService.createTransaction(transaction);
        return ResponseEntity.ok(createdTransaction);
    }
}
