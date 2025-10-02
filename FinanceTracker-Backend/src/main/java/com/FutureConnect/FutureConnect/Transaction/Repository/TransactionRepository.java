package com.FutureConnect.FutureConnect.Transaction.Repository;

import com.FutureConnect.FutureConnect.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

}
