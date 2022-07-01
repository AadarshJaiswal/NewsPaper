package com.rakuten.Newspaper.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Vendor")
public class Vendor {
	@Id
	@GeneratedValue
	@Column(name="vendor_id")
	private long vendorId;
	@Column(name="agency_name")
	private String agencyName;
	@OneToOne(targetEntity=User.class,cascade=CascadeType.ALL)  
	private User user;
	@OneToOne(targetEntity=Newspaper.class)
	private Newspaper newspaper;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Newspaper getNewspaper() {
		return newspaper;
	}
	public void setNewspaper(Newspaper newspaper) {
		this.newspaper = newspaper;
	}
	public Vendor(long vendorId, String agencyName, User user, Newspaper newspaper) {
		super();
		this.vendorId = vendorId;
		this.agencyName = agencyName;
		this.user = user;
		this.newspaper = newspaper;
	}
	public User getUsers() {
		return user;
	}
	public void setUsers(User user) {
		this.user = user;
	}
	public long getVendorId() {
		return vendorId;
	}
	public void setVendorId(long vendorId) {
		this.vendorId = vendorId;
	}
	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getAgencyName() {
		return agencyName;
	}
	public void setAgencyName(String agencyName) {
		this.agencyName = agencyName;
	}
	
	public Vendor(long vendorId, String agencyName) {
		super();
		this.vendorId = vendorId;
		this.agencyName = agencyName;
	}
	public Vendor(long vendorId, String agencyName, User user) {
		super();
		this.vendorId = vendorId;
		this.agencyName = agencyName;
		this.user = user;
	}
	@Override
	public String toString() {
		return "Vendor [vendor_id=" + vendorId + ", company_name=" + agencyName
				+"User="+user +"]";
	}


}
