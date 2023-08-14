package com.be017pre.be017pre.comment.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Getter
public class CommentPostDto {
    private int commentId;
    private int answerId;
    private int userId;
    @NotNull
    private String content;
    private Timestamp timestamp;

    public CommentPostDto(int commentId, int answerId, int userId, String content) {
        this.commentId = commentId;
        this.answerId = answerId;
        this.userId = userId;
        this.content = content;
        this.timestamp = new Timestamp(System.currentTimeMillis());
    }
}
