package com.be017pre.be017pre.comment.controller;

import com.be017pre.be017pre.comment.dto.CommentPatchDto;
import com.be017pre.be017pre.comment.dto.CommentPostDto;
import com.be017pre.be017pre.comment.dto.CommentResponseDto;

import com.be017pre.be017pre.comment.entity.Comment;
import com.be017pre.be017pre.comment.mapper.CommentMapper;
import com.be017pre.be017pre.comment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/{userId}/{answerId}/comments")

public class CommentController {

    //비즈니스 계층과 API 계층 연동을 위한 commentService 클래스 객체 생성
    private final CommentService commentService;
    private final CommentMapper commentMapper;

    public CommentController(CommentService commentService, CommentMapper commentMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    //댓글 등록 요청 전달 받는 메서드
    @PostMapping
    public ResponseEntity postComment(@PathVariable("userId") int userId,
                                      @PathVariable("answerId") int answerId,
                                      @Valid @RequestBody CommentPostDto commentPostDto) {

        //commentPostDto.setCommentId(answerId);
        //매퍼로 commentPostDto 클래스 comment로 변환
        Comment comment = commentMapper.commetPostDtoToComment(commentPostDto);

        //comment 등록
        Comment response = commentService.createComment(comment,answerId,userId);

        return new ResponseEntity<>(commentMapper.commentToCommentResponseDto(response), HttpStatus.CREATED);
    }

    //댓글 수정 요청 전달 받는 메서드
    @PatchMapping("/{commentId}")
    public ResponseEntity patchComment(@PathVariable("commentId") int commentId,
                                       @Valid @RequestBody CommentPatchDto commentPatchDto) {

        commentPatchDto.setCommentId(commentId);
        commentPatchDto.setCommentDate(LocalDateTime.now());
        Comment comment =
                commentService.updateComment(commentMapper.commentPatchDtoToComment(commentPatchDto));
        return new ResponseEntity<>(
                commentMapper.commentToCommentResponseDto(comment),HttpStatus.OK);

    }

    //댓글 삭제 요청 전달 받는 메서드
    @DeleteMapping("/{commentId}")
    public void deleteComment(@PathVariable("commentId") int commentId) {
        //comment 삭제
        commentService.deleteComment(commentId);
    }

    //댓글 조회 요청 전달 받는 메서드
    @GetMapping("/{commentId}")
    public ResponseEntity getComment(@PathVariable("commentId") int commentId) {
        //comment 1개 조회
        Comment response = commentService.findComment(commentId);
        return new ResponseEntity<>(commentMapper.commentToCommentResponseDto(response),HttpStatus.OK);
    }

    //댓글들 조회 요청 전달 받는 메서드
    @GetMapping
    public ResponseEntity getComments(@PathVariable("answerId") int answerId) {
        //해당 답변에 대한 comment 모두 조회
        List<Comment> comments = commentService.findCommentsByAnswerId(answerId);

        List<CommentResponseDto> response =
                comments.stream()
                        .map(comment -> commentMapper.commentToCommentResponseDto(comment))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
