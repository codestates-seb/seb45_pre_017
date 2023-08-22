package com.be017pre.be017pre.answer.repository;

import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {
    @Query(value = "SELECT a FROM Answer a WHERE a.answerId = :answerId")
    Optional<Answer> findAnswerById(int answerId);
    List<Answer> findByPostPostId(int postId);
}
