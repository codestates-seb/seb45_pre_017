package com.be017pre.be017pre.answer.service;

import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.answer.repository.AnswerRepository;
import com.be017pre.be017pre.exception.BusinessLogicException;
import com.be017pre.be017pre.exception.ExceptionCode;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerfiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getAnswerBody())
                .ifPresent(answerBody -> findAnswer.setAnswerBody(answerBody));
        findAnswer.setAnswerDate(LocalDateTime.now());
        Answer updatedAnswer = answerRepository.save(findAnswer);
        return updatedAnswer;
    }

    public Answer findAnswer(int answerId) {
        return findVerfiedAnswer(answerId);
    }

    public List<Answer> findAnswers() {
        return answerRepository.findAll(Sort.by("answerId").ascending());
    }

    public void deleteAnswer(int answerId) {
        Answer findAnswer = findVerfiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    public Answer findVerfiedAnswer(int answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;

    }
}
