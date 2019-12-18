package com.sector.server.Controller;

import com.sector.server.repositories.ArticleDao;
import org.springframework.beans.factory.annotation.Autowired;

public class ControllerArticle {

    @Autowired
    private ArticleDao articleDao;
}
