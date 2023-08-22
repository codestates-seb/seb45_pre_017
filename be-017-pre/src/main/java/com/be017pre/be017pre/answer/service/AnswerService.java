package com.be017pre.be017pre.answer.service;

import com.be017pre.be017pre.answer.entity.Answer;
import com.be017pre.be017pre.answer.repository.AnswerRepository;
import com.be017pre.be017pre.exception.BusinessLogicException;
import com.be017pre.be017pre.exception.ExceptionCode;
import com.be017pre.be017pre.post.entity.Post;
import com.be017pre.be017pre.post.repository.PostRepository;
import com.be017pre.be017pre.user.entity.User;
import com.be017pre.be017pre.user.repository.UserRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public AnswerService(AnswerRepository answerRepository, PostRepository postRepository, UserRepository userRepository) {
        this.answerRepository = answerRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public Answer createAnswer(Answer answer, int postId, int userId) {

        Post post = postRepository.findById(postId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        User user = userRepository.findById(userId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        answer.setPost(post);
        answer.setUser(user);

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

    public List<Answer> findAnswersByPostId(int postId){
        return answerRepository.findByPostPostId(postId);
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
