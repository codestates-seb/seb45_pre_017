package com.be017pre.be017pre.comment.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private LocalDateTime timestamp = LocalDateTime.now();


    /* answer 클래스, user 클래스 작성된 뒤 fix
    @ManyToOne
    @JoinColumn(nullable = false, name = "answer_id")
    private Answer answer;

    public void addAnswer(Answer answer) {
        this.answer = answer;
    }

    @JoinColumn(nullable = false, name = "user_id")
    private User user;

    public void addUser(User user) {
        this.user = user;
    }


     */

}
