package com.be017pre.be017pre.comment.repository;

import com.be017pre.be017pre.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment,Integer> {
    Optional<Comment> findByCommentId(int commentId);
}
