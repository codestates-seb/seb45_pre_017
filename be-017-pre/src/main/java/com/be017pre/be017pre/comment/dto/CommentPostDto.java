package com.be017pre.be017pre.comment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class CommentPostDto {
    private int commentId;
    private int answerId;
    //private int userId;
    @NotBlank(message = "댓글은 공백이 아니어야 합니다.")
    private String content;
    private LocalDateTime commentDate;
    //public CommentPostDto(int commentId, int answerId, int userId, String content) {
    public CommentPostDto(int commentId, String content, int answerId) {
        this.commentId = commentId;
        this.answerId = answerId;
        //this.userId = userId;
        this.content = content;
        this.commentDate = LocalDateTime.now();
    }
}
