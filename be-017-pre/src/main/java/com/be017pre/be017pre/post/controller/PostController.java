package com.be017pre.be017pre.post.controller;


import com.be017pre.be017pre.dto.MultiResponseDto;
import com.be017pre.be017pre.dto.PageInfo;
import com.be017pre.be017pre.dto.SingleResponseDto;
import com.be017pre.be017pre.post.dto.PostDto;
import com.be017pre.be017pre.post.entity.Post;
import com.be017pre.be017pre.post.mapper.PostMapper;
import com.be017pre.be017pre.post.service.PostService;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Arrays;
import java.util.List;


@Validated
@RestController
@RequestMapping("/post")
public class PostController {
    private final PostService postService;
    private final postMapper mapper;
    
    public PostController(PostService postService, PostMapper mapper) {
        this.postService = postService;
        this.mapper = mapper;
    }
    
    @PostMapping("/ask")
    public ResponseEntity postPost(@Valid @RequestBody postDto.Post postPost){
        
        post post = postService.createpost(mapper.postPostDtoTopost(postPost));
        PostDto.Response response = mapper.postToPostResponseDto(post);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }
    
    @PatchMapping("{post-id}")
    public ResponseEntity patchPost(@RequestBody PostDto.Patch patchDto,
                                        @PathVariable("post-id")
                                        @Positive int postId){
        
        Post response = postService.patchPost(mapper.postPatchDtoToPost(patchDto), postId);
        PostDto.Response post = mapper.postToPostResponseDto(response);

        return new ResponseEntity(new SingleResponseDto<>(post), HttpStatus.OK);

    }
    
    @GetMapping("{post-id}") 
    public ResponseEntity findPost(@PathVariable("post-id")
                                       @Positive int postId){
        post post = postService.findpost(postId);
        postDto.Response response = mapper.postTopostResponseDto(post);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }
    
    @GetMapping("/")
    public ResponseEntity findPosts(@Positive @RequestParam(required=false) int page,
                                        @Positive @RequestParam int size){
        Page<Post> pagepost = postService.findPosts(page - 1, size);
        PageInfo pageInfo = new PageInfo(page, size, pagepost.getTotalElements(), pagepost.getTotalPages());
        List<post> posts = pagePost.getContent();
        List<postDto.Response> responses = mapper.postsTopostResponseDtos(posts);


        UriComponentsBuilder uriBuilder = UriComponentsBuilder
                .fromPath("/api/posts/")
                .queryParam("page", page)    
                .queryParam("size", size);

        return ResponseEntity.ok()
                .location(uriBuilder.build().toUri())
                .body(new MultiResponseDto<>(responses, pageInfo));
    }

    @DeleteMapping("{post-id}")
    public ResponseEntity deletePost(@PathVariable("post-id")
                                         @Positive int postId){
        postService.deletePost(postId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/search")
    public ResponseEntity getPostsByTag(@RequestParam @Positive int page,
                                            @RequestParam @Positive int size,
                                            @RequestParam String tag) {

        List<String> tags = Arrays.asList(tag.split(",")); // 태그 리스트로 변환

        Page<Post> tagPage = postService.findAllByTags(tag, page - 1, size);
        PageInfo pageInfo = new PageInfo(page, size, tagPage.getTotalElements(), tagPage.getTotalPages());

        List<Post> posts = tagPage.getContent();
        List<PostDto.Response> responses = mapper.postsToPostResponseDtos(posts);

        MultiResponseDto<postDto.Response> multiResponseDto = new MultiResponseDto<>(responses, pageInfo);

        return ResponseEntity.ok()
                .body(multiResponseDto);
    }
}