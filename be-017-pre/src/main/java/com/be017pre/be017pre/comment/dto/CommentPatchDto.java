package com.be017pre.be017pre.comment.dto;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class CommentPatchDto {
    private int commentId;
    private int answerId;
    //private int userId;
    private String content;
    private LocalDateTime commentDate;
    // public CommentPatchDto(int commentId, int answerId, int userId, String content) {
    public CommentPatchDto(int commentId, String content, int answerId) {
        this.commentId = commentId;
        this.answerId = answerId;
        //this.userId = userId;
        this.content = content;
        this.commentDate = LocalDateTime.now();
    }
}
