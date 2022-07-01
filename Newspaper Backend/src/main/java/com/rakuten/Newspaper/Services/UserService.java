package com.rakuten.Newspaper.Services;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;

import com.rakuten.Newspaper.Entity.AddSubscription;
import com.rakuten.Newspaper.Entity.Mysubscriptions;
import com.rakuten.Newspaper.Entity.Newspaper;
import com.rakuten.Newspaper.Entity.Subscription;
import com.rakuten.Newspaper.Entity.User;
import com.rakuten.Newspaper.Entity.Userhome;


public interface UserService {

	public boolean addUser(User user);
	public ResponseEntity<?> loginUser(User user,HttpServletRequest req,HttpServletResponse response);
//	public User loginUser(User user);
	public List<User> getallUser();
	public List<Userhome> getNewspaper();
	public Newspaper getNewspapersbyIdSubscribe(long id);
	public boolean deleteUser(String emailid);
	public Subscription subscribeNewspaper(AddSubscription sub);
	public List<Subscription> getallSubscription();
	public List<Mysubscriptions> getmySubscription(String emailId);

}
