package com.be017pre.be017pre.post.controller;

import com.be017pre.be017pre.post.dto.PostDto;
import com.be017pre.be017pre.post.dto.PostPatchDto;
import com.be017pre.be017pre.post.entity.Post;
import com.be017pre.be017pre.post.mapper.PostMapper;
import com.be017pre.be017pre.post.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

@CrossOrigin(origins = "http://localhost:3030",allowedHeaders = "*")
@RestController
@RequestMapping("{userId}/posts")
public class PostController {
    private final PostService postService;
    private final PostMapper mapper;

    public PostController(PostService postService, PostMapper mapper) {
        this.postService = postService;
        this.mapper = mapper;    }

    @PostMapping
    public ResponseEntity postPost(@PathVariable("userId") int userId,
                                    @Valid @RequestBody PostDto postDto){

        Post post = postService.createPost(mapper.postDtoToPost(postDto),userId);
        post.setUserId(userId);
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


/*
    @GetMapping("/")
    public ResponseEntity<Post> findPosts(@Positive @RequestParam int page,
                                          @Positive @RequestParam int size) {

        Page<Post> pagePost = postService.findPosts(page - 1, size);
        PageInfo pageInfo = new PageInfo(page, size, pagePost.getTotalElements(), pagePost.getTotalPages());

        List<Post> posts = pagePost.getContent();
        List<PostDto.Response> responses = mapper.postToPostResponseDto(posts);

        return new ResponseEntity(responses, HttpStatus.OK);
    }

*/

}