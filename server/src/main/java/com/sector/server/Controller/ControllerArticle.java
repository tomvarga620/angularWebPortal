package com.sector.server.Controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.sector.server.Entities.article.Article;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.repositories.ArticleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

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

    @RequestMapping(method = RequestMethod.POST, value = "/postArticle")
    public Article postArticle(@RequestBody ObjectNode object) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            UserLogin login = mapper.readValue(object.get("login").toString(), UserLogin.class);
            Article article = mapper.readValue(object.get("article").toString(), Article.class);

            for (UserLogin u: loggedUsersArray) {
                if (u.equals(login)) {
                    articleDao.save(article);
                    return article;
                }
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
