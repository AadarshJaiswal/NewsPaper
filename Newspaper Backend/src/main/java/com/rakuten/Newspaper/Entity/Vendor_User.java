package com.rakuten.Newspaper.Entity;

public class Vendor_User {
	@Override
	public String toString() {
		return "Vendor_User [name=" + name + ", email=" + email + ", password=" + password + ", agencyName="
				+ agencyName + ", contact=" + contact + "]";
	}
	String name;
	String email;
	String password;
	String agencyName;
	long contact;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Vendor_User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Vendor_User(String name, String email, String password, String agencyName, long contact) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.agencyName = agencyName;
		this.contact = contact;
	}
	public Vendor_User(String name, String email, String agencyName, long contact) {
		super();
		this.name = name;
		this.email = email;
		this.agencyName = agencyName;
		this.contact = contact;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAgencyName() {
		return agencyName;
	}
	public void setAgencyName(String agencyName) {
		this.agencyName = agencyName;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}

}
