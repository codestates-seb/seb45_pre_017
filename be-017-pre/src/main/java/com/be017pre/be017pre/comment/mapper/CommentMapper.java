package com.be017pre.be017pre.comment.mapper;

import com.be017pre.be017pre.comment.dto.CommentPatchDto;
import com.be017pre.be017pre.comment.dto.CommentPostDto;
import com.be017pre.be017pre.comment.dto.CommentResponseDto;
import com.be017pre.be017pre.comment.entity.Comment;
import org.mapstruct.Mapper;

//Mapstruct의 매퍼 인터페이스 정의
@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commetPostDtoToComment(CommentPostDto commentPostDto);
    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);
    CommentResponseDto commentToCommentResponseDto(Comment comment);
}
