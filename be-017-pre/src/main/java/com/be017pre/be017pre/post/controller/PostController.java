package com.be017pre.be017pre.post.controller;

import com.be017pre.be017pre.post.dto.PostDto;
import com.be017pre.be017pre.post.dto.PostPatchDto;
import com.be017pre.be017pre.post.entity.Post;
import com.be017pre.be017pre.post.mapper.PostMapper;
import com.be017pre.be017pre.post.service.PostService;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("/post")
public class PostController {
    private final PostService postService;
    private final PostMapper mapper;

    public PostController(PostService postService, PostMapper mapper) {
        this.postService = postService;
        this.mapper = mapper;    }

    @PostMapping("/ask")
    public ResponseEntity postPost(@Valid @RequestBody PostDto postDto){

        Post post = postService.createPost(mapper.postDtoToPost(postDto));

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
    public ResponseEntity findPost(@PathVariable("post-id") @Positive int postId){

        Post post = postService.findPost(postId);

        return new ResponseEntity(mapper.postToPostResponseDto(post), HttpStatus.OK);
    }

    @DeleteMapping("{post-id}")
    public ResponseEntity deletePost(@PathVariable("post-id")
                                     @Positive int postId){
        postService.deletePost(postId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

/* 추후 수정

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
*/
}