package com.be017pre.be017pre.post.mapper;

import com.be017pre.be017pre.post.dto.PostDto;
import com.be017pre.be017pre.post.entity.Post;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface PostMapper {

    default Post postPostDtoTopost(postDto.Post postPost) {
        if (postPost == null) {
            return null;
        } else {
            Post post = new Post();
            post.setTitle(postPost.getTitle());
            post.setContent(postPost.getContent());
            post.setTag(postPost.getTag());
            List<String> list = postPost.getTagList();
            if (list != null) {
                post.setTags(new ArrayList(list));
            }

            return post;
        }
    }


    PostDto.Response postToPostResponseDto(Post response);


    @Mapping(target = "tags", source = "tag")
    default Post postPatchDtoToPost(PostDto.Patch postPatch) {
        if (postPatch == null) {
            return null;
        } else {
            Post post = new Post();
            post.setpostId(postPatch.getpostId());
            post.setTitle(postPatch.getTitle());
            post.setContent(postPatch.getContent());
            post.setTag(postPatch.getTag());
            List<String> list = postPatch.getTagList();
            if (list != null) {
                post.setTags(new ArrayList<>(list));;
            }

            return post;
        }
    }


    default List<PostDto.Response> postsToPostResponseDtos(List<Post> posts) {
        return posts.stream()
                .map(this::postToPostResponseDto)
                .collect(Collectors.toList());
    }





    default PostDto.Response postToResponseDto(Post post) {
        PostDto.Response response =
                new PostDto.Response(post.getPostId(),
                        post.getTitle(),
                        post.getContent(),
                        post.getTag(),
                        post.getTags(),
                        post.getVote(),
                        post.getCreatedAt(),
                        post.getModifiedAt(),

        response.setTitle(post.getTitle());
        response.setContent(post.getContent());
        response.setContent(post.getContent());
        response.setTag(post.getTag());
        response.setTags(post.getTags());
        response.setVote(post.getVote());
        response.setCreatedAt(post.getCreatedAt());
        response.setModifiedAt(post.getModifiedAt());
        response.setpostStatus(response.getpostStatus());

        return response;
    }
}