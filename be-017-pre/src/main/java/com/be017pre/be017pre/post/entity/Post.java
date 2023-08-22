package com.be017pre.be017pre.post.entity;


import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "post_id")
    private int postId;

    @Column(nullable = false, name = "title")
    private String title;

    @Column(nullable = false, name = "content")
    private String content;

    @Column(nullable = false, name = "post_date")
    private LocalDateTime postDate = LocalDateTime.now();


    @OneToMany(mappedBy = "post")
    private List<Answer> answers = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}
