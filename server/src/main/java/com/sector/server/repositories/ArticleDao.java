package com.sector.server.repositories;

import com.sector.server.Entities.article.Article;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleDao extends CrudRepository<Article, Long> {
}
