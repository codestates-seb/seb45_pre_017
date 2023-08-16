package com.be017pre.be017pre.comment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
public class CommentResponseDto {
    private int commentId;
    //private int answerId;
    //private int userId;
    private String content;
    private LocalDateTime timestamp;
    public CommentResponseDto(int commentId, String content) {
    //public CommentResponseDto(int commentId, int answerId, int userId, String content) {
        this.commentId = commentId;
        //this.answerId = answerId;
        //this.userId = userId;
        this.content = content;
        this.timestamp = LocalDateTime.now();
    }
}
