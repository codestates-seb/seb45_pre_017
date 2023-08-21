package com.be017pre.be017pre.answer.mapper;

import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.answer.dto.AnswerPatchDto;
import com.be017pre.be017pre.answer.dto.AnswerPostDto;
import com.be017pre.be017pre.answer.dto.AnswerResponseDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
