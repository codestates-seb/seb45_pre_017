package com.be017pre.be017pre.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class PostPatchDto {

    private int postId;
    @NotBlank(message = "제목은 공백이 아니어야 합니다.")
    private String title;
    @NotBlank(message = "내용을 입력하세요.")
    private String content;
    private LocalDateTime postDate;

    //private int memberId;
    //private String tag;
    //private List<String> tagList;

    public PostPatchDto(int postId, String title, String content) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.postDate = LocalDateTime.now();
    }
}