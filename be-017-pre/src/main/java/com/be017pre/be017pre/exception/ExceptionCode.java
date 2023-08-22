package com.be017pre.be017pre.exception;

import lombok.Getter;

public enum ExceptionCode {
    COMMENT_NOT_FOUND(404, "Comment not found"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    POST_NOT_FOUND(404, "Post not found"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EMAIL_EXISTS(409, "Email already exists"),
    MEMBER_NAME_EXISTS(409, "Name already exists"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    TAG_NOT_FOUND(404, "Tag not found"),
    ONLY_AUTHOR(403, "Access denied."),
    UNAUTHORIZED(401,  "Unauthorized"),
    USER_NOT_FOUND(404, "User not found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}