package com.be017pre.be017pre.post.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;


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

    @Column(nullable = false, updatable = false, name = "post_date")
    private LocalDateTime postDate = LocalDateTime.now();

    /*
    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();
    */
    /*
    @Column(nullable = true)
    private int vote;

    @Column(nullable = true)
    private String tag;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "POST_TAG_LIST", joinColumns = @JoinColumn(name = "POST_ID"))
    @Column(nullable = true, name = "TAG_LIST")
    private List<String> tags;

    */


}
