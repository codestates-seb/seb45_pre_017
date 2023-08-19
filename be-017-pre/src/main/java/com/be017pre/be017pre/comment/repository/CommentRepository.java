package com.be017pre.be017pre.comment.repository;

import com.be017pre.be017pre.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment,Integer> {
    @Query(value = "SELECT c FROM Comment c WHERE c.commentId = :commentId")
    Comment findByCommentId(int commentId);
    List<Comment> findByAnswerAnswerId(int answerId);
}
