package com.be017pre.be017pre.post.dto;

import com.be017pre.be017pre.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class PostDto {

    private int postId;
    @NotBlank(message = "제목은 공백이 아니어야 합니다.")
    private String title;
    @NotBlank(message = "내용을 입력하세요.")
    private String content;
    private LocalDateTime postDate = LocalDateTime.now();

    //private int memberId;
    //private String tag;
    //private List<String> tagList;
    public PostDto(int postId, String title, String content) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.postDate = LocalDateTime.now();
    }

}