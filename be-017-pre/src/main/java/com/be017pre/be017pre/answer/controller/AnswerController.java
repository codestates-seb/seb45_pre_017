package com.be017pre.be017pre.answer.controller;

import com.be017pre.be017pre.answer.dto.AnswerPatchDto;
import com.be017pre.be017pre.answer.dto.AnswerPostDto;
import com.be017pre.be017pre.answer.dto.AnswerResponseDto;
import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.answer.mapper.AnswerMapper;
import com.be017pre.be017pre.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/{userId}/posts/{postId}/answers")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;

    }

    //답변 등록
    @PostMapping
    public ResponseEntity postAnswer(@PathVariable("userId") int userId,
                                     @PathVariable("postId") int postId,
                                     @Valid @RequestBody AnswerPostDto answerPostDto) {

        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);
        Answer response = answerService.createAnswer(answer,postId,userId);
        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(response),HttpStatus.CREATED);
    }

    //답변 수정
    @PatchMapping("/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable("answerId") int answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        answerPatchDto.setAnswerDate(LocalDateTime.now());
        Answer answer = answerMapper.answerPatchDtoToAnswer(answerPatchDto);
        Answer response = answerService.updateAnswer(answer);

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(response),HttpStatus.CREATED);
    }

    //답변 조회
    @GetMapping("/{answerId}")
    public ResponseEntity getAnswer(@PathVariable("answerId") int answerId) {
        Answer answer = answerService.findAnswer(answerId);
        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(answer),HttpStatus.OK);
    }

    //전체 답변 조회
    @GetMapping
    public ResponseEntity getAnswers(@PathVariable("postId") int postId) {
        //해당 post에 대한 comment 모두 조회
        List<Answer> answers = answerService.findAnswersByPostId(postId);
        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> answerMapper.answerToAnswerResponseDto(answer))
                        .collect(Collectors.toList());
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    //답변 삭제
    @DeleteMapping("/{answerId}")
    public void deleteAnswer(@PathVariable("answerId") int answerId) {
        answerService.deleteAnswer(answerId);
    }
}


