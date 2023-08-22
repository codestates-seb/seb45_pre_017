package com.be017pre.be017pre.post.controller;

import com.be017pre.be017pre.post.dto.PostListResponseDto;
import com.be017pre.be017pre.post.dto.PostResponseDto;
import com.be017pre.be017pre.post.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/posts")
public class PostsViewController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<PostListResponseDto> findPosts(@PageableDefault(size = 10) Pageable pageable) {
        Page<PostResponseDto> pagePost = postService.findPosts(pageable);
        PostListResponseDto response = new PostListResponseDto(pagePost);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
