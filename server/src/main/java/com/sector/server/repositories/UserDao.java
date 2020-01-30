package com.sector.server.repositories;

import com.sector.server.Entities.loginEntity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserDao extends CrudRepository<User, Long> {
     @Query
     User findByEmailAndAndPassword(String email, String password);

     @Query
     User findByEmail(String email);
}
