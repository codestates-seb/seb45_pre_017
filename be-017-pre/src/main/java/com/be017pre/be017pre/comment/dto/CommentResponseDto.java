package com.be017pre.be017pre.comment.dto;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

public class CommentResponseDto {
    private int commentId;
    private int answerId;
    private int userId;
    private String content;
    private Timestamp timestamp;
    public CommentResponseDto(int commentId, int answerId, int userId, String content) {
        this.commentId = commentId;
        this.answerId = answerId;
        this.userId = userId;
        this.content = content;
        this.timestamp = new Timestamp(System.currentTimeMillis());
    }
}
