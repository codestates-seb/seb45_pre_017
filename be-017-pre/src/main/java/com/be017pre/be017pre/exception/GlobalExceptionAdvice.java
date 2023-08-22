package com.be017pre.be017pre.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

@RestControllerAdvice
public class GlobalExceptionAdvice {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        final List<FieldError> fieldErrors = e.getBindingResult().getFieldErrors();
        return new ResponseEntity<>(fieldErrors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({AccessDeniedException.class, AuthenticationException.class})
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<?> handleAuthenticationException(Exception e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("잘못된 접근입니다"); // 메시지 변경
    }
}

