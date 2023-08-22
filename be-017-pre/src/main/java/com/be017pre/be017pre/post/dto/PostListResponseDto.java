package com.be017pre.be017pre.post.dto;

import org.springframework.data.domain.Page;
import java.util.List;


public class PostListResponseDto {
    private List<PostResponseDto> posts;
    private int currentPage;
    private int totalPages;
    private long totalElements;
    private boolean last;
    private boolean first;

    public PostListResponseDto(Page<PostResponseDto> page) {
        this.posts = page.getContent();
        this.currentPage = page.getNumber();
        this.totalPages = page.getTotalPages();
        this.totalElements = page.getTotalElements();
        this.last = page.isLast();
        this.first = page.isFirst();
    }

    // Getter and Setter methods...
}
