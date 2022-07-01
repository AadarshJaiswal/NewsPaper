package com.rakuten.Newspaper.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.rakuten.Newspaper.Entity.*;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
	@Query("select new com.rakuten.Newspaper.Entity.Vendor_User(u.name, u.email,h.agencyName,u.contact) from Vendor as h,User as u where u.email=h.user.email")
	public List<Vendor_User> getVendor();
	@Query("select max(vendorId) from Vendor")
	public Integer getVendorId();
	
	@Query("select new com.rakuten.Newspaper.Entity.Vendor(v.vendorId,v.agencyName) from Vendor as v where v.vendorId=?1")
	public Vendor getVendorById(long vendorId); 
	
	@Transactional
	@Modifying
	@Query("update Vendor v set v.agencyName= ?1 where v.user.email = ?2")
	public int updateOnVendor(String agencyName,String email);
	
	@Query("Select v.vendorId from Vendor as v where v.user.email=?1")
	public String getId(String emailId);
	
	@Transactional
	@Modifying
	@Query("update User u set u.name= ?1,u.contact=?2 where u.email = ?3")
	public int updateOnUser(String name,long contact,String email);
	
	@Modifying
	@Transactional
	@Query("DELETE FROM Vendor v WHERE v.user.email = :emailid")
	public int deleteVendorByEmailId(@Param("emailid") String emailid);
	
	@Modifying
	@Transactional
	@Query("DELETE FROM Vendor v WHERE v.vendorId = :id")
	public int deleteByVendorId(@Param("id") long id);

}
