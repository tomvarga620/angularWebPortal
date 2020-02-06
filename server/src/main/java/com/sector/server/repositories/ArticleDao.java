package com.sector.server.repositories;

import com.sector.server.Entities.article.Article;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Blob;

@Repository
public interface ArticleDao extends CrudRepository<Article, Long> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE article SET file =:array WHERE article.id LIKE :id" , nativeQuery = true)
    void insertImage(@Param("array") byte[] array, @Param("id") long id);
}
