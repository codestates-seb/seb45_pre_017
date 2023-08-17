package com.be017pre.be017pre.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerPatchDto {
    private int answerId;
    @NotNull
    private String answerBody;
    private LocalDateTime answerDate;

    //private int postId;
    //private int userId;
    //public AnswerPatchDto(int answerId, String answerBody, int postId, int userId) {

    public AnswerPatchDto(int answerId, String answerBody) {
        this.answerId = answerId;
        this.answerBody = answerBody;
        this.answerDate = LocalDateTime.now();
        //this.postId = postId;
        //this.userId = userId;

    }
}
