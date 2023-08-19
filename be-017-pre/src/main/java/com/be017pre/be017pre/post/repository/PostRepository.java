package com.be017pre.be017pre.post.repository;

import com.be017pre.be017pre.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PostRepository extends JpaRepository<Post, Integer> {
    Post findByPostId(int postId);

}