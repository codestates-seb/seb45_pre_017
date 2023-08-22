package com.be017pre.be017pre.post.service;


import com.be017pre.be017pre.exception.BusinessLogicException;
import com.be017pre.be017pre.exception.ExceptionCode;
import com.be017pre.be017pre.post.entity.Post;
import com.be017pre.be017pre.post.repository.PostRepository;
import com.be017pre.be017pre.user.repository.UserRepository;
import com.be017pre.be017pre.user.entity.User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;



@Service
public class PostService {

    private PostRepository postRepository;
    private final UserRepository userRepository;

    public PostService(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }


    public Post createPost(Post post, int userId) {

        User user = userRepository.findById(userId);
        post.setUserId(userId);
        post.setUser(user);
        return postRepository.save(post);

    }

    public Post patchPost(Post post) {

        Post findPost = findVerifiedPost(post.getPostId());
        Optional.ofNullable(post.getTitle())
                .ifPresent(title -> findPost.setTitle(title));
        Optional.ofNullable(post.getContent())
                .ifPresent(content -> findPost.setContent(content));
        findPost.setPostDate(LocalDateTime.now());
        return postRepository.save(findPost);
    }

    public Post findPost(int postId){
        return findVerifiedPost(postId);
    }


    /*
    public Page<Post> findPosts(int page, int size){

        return postRepository.findAll(PageRequest.of(page, size));
    }
    */

    public void deletePost(int postId){

        Post findPost = findVerifiedPost(postId);
        postRepository.delete(findPost);

    }

    public Post findVerifiedPost(int postId){
        Optional<Post> optional = Optional.ofNullable(postRepository.findById(postId));
        return optional.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
    }
}
