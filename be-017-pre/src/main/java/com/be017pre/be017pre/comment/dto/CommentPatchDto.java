package com.be017pre.be017pre.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class CommentPatchDto {
    private int commentId;
    private int answerId;
    private int userId;
    private String content;
    private Timestamp timestamp;

    public CommentPatchDto(int commentId, int answerId, int userId, String content) {
        this.commentId = commentId;
        this.answerId = answerId;
        this.userId = userId;
        this.content = content;
        this.timestamp = new Timestamp(System.currentTimeMillis());
    }
}
