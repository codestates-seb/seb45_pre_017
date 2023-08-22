package com.be017pre.be017pre.answer.entity;

import com.be017pre.be017pre.comment.entity.Comment;
import com.be017pre.be017pre.post.entity.Post;
import com.be017pre.be017pre.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "answer")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private int answerId;

    @Column(nullable = false, name = "answer_body")
    private String answerBody;

    @Column(nullable = false, name = "answer_date")
    private LocalDateTime answerDate;

    @Column(nullable = false, name = "userid")
    private int userId;

    @OneToMany(mappedBy = "answer")
    private List<Comment> comments = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}