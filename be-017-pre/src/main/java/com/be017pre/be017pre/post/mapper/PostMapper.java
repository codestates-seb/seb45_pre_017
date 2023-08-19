package com.be017pre.be017pre.post.mapper;

import com.be017pre.be017pre.post.dto.PostDto;
import com.be017pre.be017pre.post.dto.PostPatchDto;
import com.be017pre.be017pre.post.dto.PostResponseDto;
import com.be017pre.be017pre.post.entity.Post;
import org.mapstruct.Mapper;



@Mapper(componentModel = "spring")
public interface PostMapper {
    Post postDtoToPost(PostDto postDto);
    Post postPatchDtoToPost (PostPatchDto postPatchDto);
    PostResponseDto postToPostResponseDto (Post post);
}