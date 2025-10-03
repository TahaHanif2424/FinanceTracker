package com.FutureConnect.FutureConnect.Transaction.Repository;

import com.FutureConnect.FutureConnect.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserIdOrderByDateDesc(UUID userId);
    List<Transaction> findByUserIdAndDateBetweenOrderByDateDesc(UUID userId, LocalDateTime fromDate, LocalDateTime toDate);
}
