package com.be017pre.be017pre.post.controller;

import com.be017pre.be017pre.post.dto.PostDto;
import com.be017pre.be017pre.post.dto.PostListResponseDto;
import com.be017pre.be017pre.post.dto.PostPatchDto;
import com.be017pre.be017pre.post.dto.PostResponseDto;
import com.be017pre.be017pre.post.entity.Post;
import com.be017pre.be017pre.post.mapper.PostMapper;
import com.be017pre.be017pre.post.service.PostService;
import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("{userId}/posts")
public class PostController {
    private final PostService postService;
    private final PostMapper mapper;

    public PostController(PostService postService, PostMapper mapper) {
        this.postService = postService;
        this.mapper = mapper;    }

    @Autowired
    private UserService userService; // 주의: 변수명이 userService로 변경되었습니다.

    @PostMapping
    public ResponseEntity postPost(@PathVariable("userId") int userId,
                                   @Valid @RequestBody PostDto postDto){

        Post post = postService.createPost(mapper.postDtoToPost(postDto), userId);

        // userService를 사용하여 userId에 해당하는 사용자를 찾습니다.
        User user = userService.findById(userId);

        // 찾아온 사용자를 post 객체에 설정합니다.
        post.setUser(user);

        return new ResponseEntity(mapper.postToPostResponseDto(post), HttpStatus.CREATED);
    }


    @PatchMapping("{post-id}")
    public ResponseEntity patchPost(@Valid @RequestBody PostPatchDto postPatchDto,
                                    @PathVariable("post-id") int postId) {
        postPatchDto.setPostDate(LocalDateTime.now());
        postPatchDto.setPostId(postId);
        Post response = postService.patchPost(mapper.postPatchDtoToPost(postPatchDto));

        return new ResponseEntity(mapper.postToPostResponseDto(response), HttpStatus.OK);

    }

    @GetMapping("{post-id}")
    public ResponseEntity findPost(@PathVariable("post-id") @Positive int postId,
                                   @PathVariable("userId") int userId){

        Post post = postService.findPost(postId);
        return new ResponseEntity(mapper.postToPostResponseDto(post), HttpStatus.OK);
    }

    @DeleteMapping("{post-id}")
    public ResponseEntity deletePost(@PathVariable("post-id")
                                     @Positive int postId){
        postService.deletePost(postId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}