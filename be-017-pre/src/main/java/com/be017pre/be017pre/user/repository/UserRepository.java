package com.be017pre.be017pre.user.repository;

import com.be017pre.be017pre.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserEmail(String userEmail);
    User findByUserName(String userName);
}
