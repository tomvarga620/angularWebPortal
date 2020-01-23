package com.sector.server.repositories;

import com.sector.server.Entities.loginEntity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import java.util.UUID;

@Repository
public interface UserDao extends CrudRepository<User, UUID> {
     @Query
     User findByEmailAndAndPassword(String email, String password);

     @Query
     User findByEmail(String email);
}
