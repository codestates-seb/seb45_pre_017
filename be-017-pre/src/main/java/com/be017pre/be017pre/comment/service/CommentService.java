package com.be017pre.be017pre.comment.service;

import com.be017pre.be017pre.comment.entity.Comment;
import com.be017pre.be017pre.comment.repository.CommentRepository;
import com.be017pre.be017pre.exception.BusinessLogicException;
import com.be017pre.be017pre.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
//비즈니스 로직을 처리하는 서비스 클래스
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {

        return commentRepository.save(comment);
    }
    public Comment updateComment(Comment comment) {

        Comment findComment = findVerifiedComment(comment.getCommentId());
        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));
        findComment.setTimestamp(LocalDateTime.now());
        Comment updatedComment = commentRepository.save(findComment);
        return updatedComment;

    }

    public Comment findComment(int commentId) {

        return findVerifiedComment(commentId);
    }
    public List<Comment> findComments() {
        return commentRepository.findAll(Sort.by("commentId").descending());
    }
    public void deleteComment(int commentId) {

        Comment findComment = findVerifiedComment(commentId);
        commentRepository.delete(findComment);
    }

    public Comment findVerifiedComment(int commentId) {
        Optional<Comment> optionalComment =
                commentRepository.findById(commentId);
        Comment findComment =
                optionalComment.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findComment;
    }

}
