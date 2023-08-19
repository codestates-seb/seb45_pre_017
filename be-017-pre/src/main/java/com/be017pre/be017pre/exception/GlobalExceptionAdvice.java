package com.be017pre.be017pre.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GlobalExceptionAdvice {
    @ExceptionHandler
    public ResponseEntity handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        final List<FieldError> fieldErrors = e.getBindingResult().getFieldErrors();

        return new ResponseEntity<>(fieldErrors, HttpStatus.BAD_REQUEST);
    }
}
