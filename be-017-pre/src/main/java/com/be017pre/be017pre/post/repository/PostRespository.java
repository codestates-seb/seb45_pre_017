package com.be017pre.be017pre.post.repository;

import com.be017pre.be017pre.post.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface PostRepository extends JpaRepository<Post, Long> {

    Page<Question>findByTagContaining(String tag, Pageable pageable);

}