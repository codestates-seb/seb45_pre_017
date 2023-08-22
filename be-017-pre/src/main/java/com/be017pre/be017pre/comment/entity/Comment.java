package com.be017pre.be017pre.comment.entity;

import com.be017pre.be017pre.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.be017pre.be017pre.answer.entity.Answer;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "COMMENT")
//도메인 엔티티 클래스
public class Comment {
    @Id
    //기본키 자동 생성
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private int commentId;

    @Column(nullable = false, name = "content")
    private String content;

    @Column(nullable = false, name = "comment_date")
    private LocalDateTime commentDate = LocalDateTime.now();


    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



}