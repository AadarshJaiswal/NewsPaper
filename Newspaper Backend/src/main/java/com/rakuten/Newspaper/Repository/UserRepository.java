package com.rakuten.Newspaper.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.rakuten.Newspaper.Entity.Subscription;
import com.rakuten.Newspaper.Entity.User;
import com.rakuten.Newspaper.Entity.Userhome;
import com.rakuten.Newspaper.Entity.Vendor;

public interface UserRepository extends JpaRepository<User,String> {
	
//	SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
//	FROM ((Vendor
//	INNER JOIN User ON Vendor.user.email = User.email)
//	INNER JOIN Newspaper ON Vendor.vendorId = Newspaper.vendor.vendorId);
//	
	
	@Query("select new com.rakuten.Newspaper.Entity.Userhome(n.newspaperId,n.newspaperName,u.name,v.agencyName,u.contact) from Vendor as v,User as u,"
			+ "Newspaper as n where u.email=v.user.email and v.vendorId=n.vendor.vendorId")
//	@Query("select new com.rakuten.Newspaper.Entity.Userhome(Newspaper.newspaperName,User.name,Vendor.agencyName,User.contact) FROM ((Vendor INNER JOIN User ON Vendor.user.email = User.email)INNER JOIN Newspaper ON Vendor.vendorId = Newspaper.vendor.vendorId)")
	public List<Userhome>getNewspaper();
	
//	@Modifying
//	@Query(value="insert into Subscription(cost,newspaperId,subscriptiontype) VALUES (:newspaperid,:newspapername,:wprice,:mprice,:yprice,:v)",
//	nativeQuery = true)
//	@Query(value = "insert into subscription",nativeQuery = true)
//	@Query("insert into subscription")
//	public Subscription subscribePaper(Subscription s);
	
	
	@Query("select new com.rakuten.Newspaper.Entity.User(u.email, u.name,u.contact) from User as u where u.email=?1")
	public User getUserByEmail(String email);
	
	
	
	
	
}
