package com.be017pre.be017pre.post.repository;

import com.be017pre.be017pre.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface PostRepository extends JpaRepository<Post, Integer> {
    Optional<Post> findByPostId(int postId);
}