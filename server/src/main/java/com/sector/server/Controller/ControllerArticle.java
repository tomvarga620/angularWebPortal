package com.sector.server.Controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.sector.server.Entities.article.Article;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.repositories.ArticleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ControllerArticle {
    @Autowired
    private ArticleDao articleDao;

    private static LoggedUsers loggedUsers = LoggedUsers.getInstance();
    private static ArrayList<UserLogin> loggedUsersArray = loggedUsers.getLoggedUsersArray();

    @RequestMapping(method = RequestMethod.GET, value = "/getAllArticles")
    public ArrayList<Article> getAllArticles() {
        return (ArrayList<Article>) articleDao.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/postArticle/{token}")
    public Article postArticle(@RequestBody Article article, @PathVariable(value = "token") String token) {
            for (UserLogin u: loggedUsersArray) {
                if (u.getToken().toString().equals(token)) {
                    articleDao.save(article);
                    return article;
                }
            }
            return null; //////////////////RETURN CODE
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getArticleById/{id}")
    public Optional<Article> getArticleById(@PathVariable(name = "id") Long id) {
            return articleDao.findById(id);
    }
}
