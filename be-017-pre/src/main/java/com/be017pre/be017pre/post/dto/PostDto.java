package com.be017pre.be017pre.post.dto;

import com.be017pre.be017pre.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.time.LocalDateTime;
import java.sql.Timestamp;
import java.util.List;

public class PostDto {
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Post {
        private int memberId;
        private int userId;
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;
        @NotBlank(message = "내용을 입력하세요.")
        private String content;
        private String tag;
        private List<String> tagList;
        private LocalDateTime createdAt;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private int memberId;
        private int postId;
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;
        @NotBlank(message = "내용을 입력하세요.")
        private String content;
        private String tag;
        private List<String> tagList;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private int memberId;
        private int postId;
        private String title;
        private String content;
        private String tag;
        private List<String> tags;
        private int vote;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}