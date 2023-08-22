package com.be017pre.be017pre.comment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class CommentPostDto {
    private int commentId;
    @NotBlank(message = "댓글은 공백이 아니어야 합니다.")
    private String content;
    private LocalDateTime commentDate;
    private int userId;

    public CommentPostDto(int commentId, String content, int userId) {
        this.commentId = commentId;
        this.content = content;
        this.commentDate = LocalDateTime.now();
        this.userId = userId;
    }
}
