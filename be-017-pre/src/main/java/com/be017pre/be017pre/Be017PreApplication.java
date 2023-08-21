package com.be017pre.be017pre;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Be017PreApplication {

	public static void main(String[] args) {
		SpringApplication.run(Be017PreApplication.class, args);
	}

}
