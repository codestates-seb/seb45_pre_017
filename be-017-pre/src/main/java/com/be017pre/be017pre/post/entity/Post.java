package com.be017pre.be017pre.post.entity;


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
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int postId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = true)
    private int vote;

    @Column(nullable = true)
    private String tag;



    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "POST_TAG_LIST", joinColumns = @JoinColumn(name = "POST_ID"))
    @Column(nullable = true, name = "TAG_LIST")
    private List<String> tags;



    @Column(nullable = false, updatable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();


    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();
        }
    }
}