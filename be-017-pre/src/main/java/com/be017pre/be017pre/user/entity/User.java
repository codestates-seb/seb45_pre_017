package com.be017pre.be017pre.user.entity;

import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.comment.entity.Comment;
import com.be017pre.be017pre.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "user_pw", nullable = false)  // 추가한 속성
    private String userPw;

    @Column(name = "user_name", nullable = false)  // 추가한 속성
    private String userName;

    @OneToMany(mappedBy = "user")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Post> posts = new ArrayList<>();

}
