package com.rakuten.Newspaper.Entity;

public class Userhome {
	long newspaperId;
	String newspaperName;
	String name;
	String agencyName;
	long contactNo;
	public long getNewspaperId() {
		return newspaperId;
	}
	public void setNewspaperId(long newspaperId) {
		this.newspaperId = newspaperId;
	}
	public String getNewspaperName() {
		return newspaperName;
	}
	public Userhome(long newspaperId, String newspaperName, String name, String agencyName, long contactNo) {
		super();
		this.newspaperId = newspaperId;
		this.newspaperName = newspaperName;
		this.name = name;
		this.agencyName = agencyName;
		this.contactNo = contactNo;
	}
	public void setNewspaperName(String newspaperName) {
		this.newspaperName = newspaperName;
	}
	public String getName() {
		return name;
	}
	
	@Override
	public String toString() {
		return "Userhome [newspaperId=" + newspaperId + ", newspaperName=" + newspaperName + ", name=" + name
				+ ", agencyName=" + agencyName + ", contactNo=" + contactNo + "]";
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAgencyName() {
		return agencyName;
	}
	public void setAgencyName(String agencyName) {
		this.agencyName = agencyName;
	}
	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}
	public Userhome(String newspaperName, String name, String agencyName, long contactNo) {
		super();
		this.newspaperName = newspaperName;
		this.name = name;
		this.agencyName = agencyName;
		this.contactNo = contactNo;
	}
	public Userhome() {
		super();
	}
	

}
