package com.be017pre.be017pre.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private int answerId;
    @NotBlank(message = "답변은 공백이 아니어야 합니다.")
    private String answerBody;
    private LocalDateTime answerDate;

    //private int postId;
    //private int userId;
    //public AnswerResponseDto(int answerId, String answerBody, int postId, int userId) {

    public AnswerResponseDto(int answerId, String answerBody) {
        this.answerId = answerId;
        this.answerBody = answerBody;
        this.answerDate = LocalDateTime.now();
        //this.postId = postId;
        //this.userId = userId;
    }
}