package com.be017pre.be017pre.comment.service;

import com.be017pre.be017pre.comment.entity.Comment;
import com.be017pre.be017pre.comment.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
//비즈니스 로직을 처리하는 서비스 클래스
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }
    public Comment createComment(Comment comment) {

        //DB에 저장 후 돌려받는 것으로 추후 수정
        Comment createdComment = comment;
        return createdComment;
    }
    public Comment updateComment(Comment comment) {

        //DB 저장 후 돌려받는 것으로 추후 수정
        Comment updatedComment = comment;
        return updatedComment;
    }
    public Comment findComment(int commentId) {

        //DB에 저장한 것으로 불러오는 것으로 추후 수정, 일단 더미 데이터
        Comment comment = new Comment(commentId,"더미데이터 1",Timestamp.valueOf("2023-08-14 15:30:00"));
        return  comment;
    }
    public List<Comment> findComments() {

        //DB에 저장한 것으로 불러오는 것으로 추후 수정, 일단 더미 데이터
        List<Comment> comments = List.of(
                new Comment(1,"더미데이터 1",Timestamp.valueOf("2023-08-14 15:30:00")),
                new Comment(2,"더미데이터 2",Timestamp.valueOf("2023-08-14 15:31:00"))
        );
        return comments;
    }
    public void deleteComment(int commentId) {
        //DB내 삭제로 추후 수정
    }
}
