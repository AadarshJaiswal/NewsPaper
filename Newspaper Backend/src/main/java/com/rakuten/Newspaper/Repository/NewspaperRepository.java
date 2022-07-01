package com.rakuten.Newspaper.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.rakuten.Newspaper.Entity.Mysubscriptions;
import com.rakuten.Newspaper.Entity.Newspaper;
import com.rakuten.Newspaper.Entity.Subscription;
import com.rakuten.Newspaper.Entity.Vendor;

public interface NewspaperRepository extends JpaRepository<Newspaper,Long> {
	@Query("select max(newspaperId) from Newspaper")
	public Integer getNewspaperId();
	
	@Query("select n from Newspaper as n where n.vendor.vendorId=?1")
	public List<Newspaper> getNewspaperById(long id);

	@Query("select n from Newspaper as n where n.newspaperId=?1")
	public Newspaper getNewspaperByNewspaperId(long id);

	@Transactional
	@Modifying
	@Query("update Newspaper n set n.newspaperName=?1,n.weeklyPrice=?2,n.monthlyPrice=?3,n.yearlyPrice=?4 where n.newspaperId=?5")
	public int updateOnNewspaper(String newspapername,long wprice,long mprice,long yprice,long newspaperId);
	@Transactional
	@Modifying
//	INSERT INTO CUSTOMERS 
//	VALUES (7, 'Muffy', 24, 'Indore', 10000.00 );
//	UPDATE `mynewspaper`.`newspaper` SET `monthly_price` = '400' WHERE (`newspaper_id` = '43');
	@Query(value="insert into Newspaper(newspaper_id,newspaper_name,weekly_price,monthly_price,yearly_price,vendor_vendor_id) VALUES (:newspaperid,:newspapername,:wprice,:mprice,:yprice,:v)", nativeQuery = true)
	public int storeNewspaper(@Param("newspaperid") long newspaperId, @Param("newspapername") String newspaperName,@Param("wprice") long wprice,@Param("mprice") 
	long mprice,@Param("yprice") long yprice, @Param("v") Vendor v);
//	update RssFeedEntry feedEntry set feedEntry.read =:isRead where feedEntry.id =:entryId
	@Modifying
	@Transactional
	@Query("UPDATE Newspaper n set n.newspaperName=:newspapername ,n.weeklyPrice=:wprice ,n.monthlyPrice=:mprice ,n.yearlyPrice=:yprice WHERE n.newspaperId=:newspaperid")
	public int updateNewspaper(@Param("newspaperid") long newspaperId, @Param("newspapername") String newspaperName,@Param("wprice") long wprice,@Param("mprice") 
	long mprice,@Param("yprice") long yprice);
	
	@Modifying
	@Transactional
	@Query("DELETE FROM Newspaper n WHERE n.newspaperId = :newspaperid")
	public int deleteNewspaperById(@Param("newspaperid") long newspaperId);
	
	@Query("Select s from Newspaper as s where s.vendor.vendorId=:vendor_id")
	public List<Newspaper> getNewspaperByVendorId(@Param("vendor_id") long vendorId);
	
	
//	SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
//	FROM ((Vendor
//	INNER JOIN User ON Vendor.user.email = User.email)
//	INNER JOIN Newspaper ON Vendor.vendorId = Newspaper.vendor.vendorId);
	
	@Query("select distinct(n.newspaperId) from Subscription as s Inner Join Newspaper as n on s.newspaperId=n.newspaperId order by n.newspaperId")
	public List<Integer> getSubscriptionNewspaperId();
	
	@Query("select n.newspaperName from Newspaper as n where n.newspaperId=:id")
	public String getByNewspaperNameById(@Param("id") long id);
	
	
	
//	String HQL_QUERY = "select new map(user.id as id, user.firstName as fullName) from User user";        
//	List<Map<String,String>> usersList = session.createQuery(HQL_QUERY).list(); 
	
	
	
	
	
}

