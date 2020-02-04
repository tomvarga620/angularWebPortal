package com.sector.server.Exeption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class UnAuthorizedJson extends RuntimeException {
    public UnAuthorizedJson(String message) {
        super(message);
    }
}
