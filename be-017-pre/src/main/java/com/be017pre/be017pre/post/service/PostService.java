package com.be017pre.be017pre.post.service;


import com.be017pre.be017pre.exception.BusinessLogicException;
import com.be017pre.be017pre.exception.ExceptionCode;
import com.be017pre.be017pre.post.entity.Post;
import com.be017pre.be017pre.post.repository.PostRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;



@Service
public class PostService {

    private PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }


    public Post createPost(Post post) {

        //String tag = post.getTag();
        //List<String> tagList = new ArrayList<>(Arrays.asList(tag.split("\\s*,\\s*")));
        //post.setTags(tagList);
        return postRepository.save(post);

    }

    public Post patchPost(Post post) {

        Post findPost = findVerifiedPost(post.getPostId());
        Optional.ofNullable(post.getTitle())
                .ifPresent(title -> findPost.setTitle(title));
        Optional.ofNullable(post.getContent())
                .ifPresent(content -> findPost.setContent(content));
        //Optional.ofNullable(post.getTag())
        //        .ifPresent(tag -> findPost.setTag(tag));
        findPost.setPostDate(LocalDateTime.now());
        return postRepository.save(findPost);
    }

    public Post findPost(int postId){
        return findVerifiedPost(postId);
    }

    /* 추후 수정
    public Page<Post> findPosts(int page, int size){
        return postRepository.findAll(PageRequest.of(page, size));
    }
    */
    public void deletePost(int postId){

        Post findPost = findVerifiedPost(postId);
        postRepository.delete(findPost);

    }
    /*
    public Page<Post> findAllByTags(String tag, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return  postRepository.findByTagContaining(tag, pageable);
    }
    */
    public Post findVerifiedPost(int postId){
        Optional<Post> optional = Optional.ofNullable(postRepository.findByPostId(postId));
        return optional.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
    }
}
