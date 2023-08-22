package com.be017pre.be017pre.comment.service;

import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.answer.repository.AnswerRepository;
import com.be017pre.be017pre.comment.entity.Comment;
import com.be017pre.be017pre.comment.repository.CommentRepository;
import com.be017pre.be017pre.exception.BusinessLogicException;
import com.be017pre.be017pre.exception.ExceptionCode;
import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.repository.UserRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
//비즈니스 로직을 처리하는 서비스 클래스
public class CommentService {
    private final CommentRepository commentRepository;
    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;

    public CommentService(CommentRepository commentRepository, AnswerRepository answerRepository,
                          UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.answerRepository = answerRepository;
        this.userRepository = userRepository;
    }
    public Comment createComment(Comment comment, int answerId, int userId) {
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        comment.setAnswer(answer);
        User user = userRepository.findById(userId);
        comment.setUser(user);
        comment.setUserId(userId);
        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment) {

        Comment findComment = findVerifiedComment(comment.getCommentId());
        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));
        findComment.setCommentDate(LocalDateTime.now());
        Comment updatedComment = commentRepository.save(findComment);
        return updatedComment;

    }

    public Comment findComment(int commentId) {

        return findVerifiedComment(commentId);
    }
    public List<Comment> findComments() {
        return commentRepository.findAll(Sort.by("commentId").ascending());
    }
    public void deleteComment(int commentId) {

        Comment findComment = findVerifiedComment(commentId);
        commentRepository.delete(findComment);
    }

    public List<Comment> findCommentsByAnswerId(int answerId){
        return commentRepository.findByAnswerAnswerId(answerId);
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