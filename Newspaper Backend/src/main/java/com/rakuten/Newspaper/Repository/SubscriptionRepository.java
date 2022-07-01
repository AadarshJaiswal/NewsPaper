package com.rakuten.Newspaper.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.rakuten.Newspaper.Entity.Subscription;
import com.rakuten.Newspaper.Entity.Vendor;
import com.rakuten.Newspaper.Entity.User;

public interface SubscriptionRepository extends JpaRepository<Subscription,Integer> {
	
//	long cost, long newspaperId, String subscribetype, Vendor vendor, User user
	
	@Transactional
	@Modifying
	@Query(value="insert into Subscription(cost,newspaper_id,subscribetype,vendor_vendor_id,user_email) VALUES (:cost,:newspaperId,:subscribetype,:vendor,:user)", nativeQuery = true)
	public int storeSubscription(@Param("cost") int cost, @Param("newspaperId") long newspaperId,@Param("subscribetype") String subscribetype,@Param("vendor") 
	Vendor vendor,@Param("user") User user);
	
	@Query("Select s from Subscription as s where s.vendor.vendorId=:vendor_id")
	public List<Subscription> getByVendorId(@Param("vendor_id") long vendorId);
	
	@Query("Select s from Subscription as s ORDER BY s.vendor.vendorId")
	public List<Subscription> getallSubscription();
	
	@Query("Select s from Subscription as s where s.user.email=:email_id ORDER BY s.vendor.vendorId")
	public List<Subscription> getmySubscription(@Param("email_id") String emailId);
	
	@Query("select s from Subscription as s where s.vendor.vendorId=:id")
	public List<Subscription> getmySubscriptionById(@Param("id") long id);
	
	
	@Query("delete from Subscription as s  where s.Id=:id ")
	@Modifying
	@Transactional
	public void deleteBySubId(@Param("id") int id);
	
	@Query("delete from Subscription as s  where s.user.email=:emailId ")
	@Modifying
	@Transactional
	public void deleteByUserEmailId(@Param("emailId") String id);
	
	

}
