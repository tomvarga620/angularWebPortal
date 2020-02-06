package com.sector.server.Controller;

import com.sector.server.Entities.article.Article;
import com.sector.server.Entities.loginEntity.UserLogin;
import com.sector.server.Exeption.UnAuthorizedJson;
import com.sector.server.Exeption.UnauthorizedRequestException;
import com.sector.server.repositories.ArticleDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
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
                }        throw new UnauthorizedRequestException("Bad Login");
            }
        throw new UnAuthorizedJson("Bad request");
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getArticleById/{id}")
    public Optional<Article> getArticleById(@PathVariable(name = "id") Long id) {
            return articleDao.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/uploadImage/{id}")
    public void upLoadImage(@RequestBody MultipartFile file, @PathVariable(name = "id") Long id) {
        try {
            articleDao.insertImage(file.getBytes(), id);
        } catch (IOException e) {
            e.printStackTrace();
            throw new UnAuthorizedJson("Bad Request");
        }
    }

}
