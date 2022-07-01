package com.rakuten.Newspaper.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Newspaper")
public class Newspaper {
	
	@Id
	@GeneratedValue
	@Column(name="newspaper_id")
	long newspaperId;
	@Column(name="newspaper_name")
	String newspaperName;
	@Column(name="Weekly_price")
	long weeklyPrice;
	@Column(name="monthly_price")
	long monthlyPrice;
	@Column(name="yearly_price")
	long yearlyPrice;
	@OneToOne(targetEntity=Vendor.class,cascade=CascadeType.ALL)
	Vendor vendor;
	
	public long getNewspaperId() {
		return newspaperId;
	}

	public void setNewspaperId(long newspaperId) {
		this.newspaperId = newspaperId;
	}

	public String getNewspaperName() {
		return newspaperName;
	}

	public void setNewspaperName(String newspaperName) {
		this.newspaperName = newspaperName;
	}

	public long getWeeklyPrice() {
		return weeklyPrice;
	}

	public void setWeeklyPrice(long weeklyPrice) {
		this.weeklyPrice = weeklyPrice;
	}

	public long getMonthlyPrice() {
		return monthlyPrice;
	}

	public void setMonthlyPrice(long monthlyPrice) {
		this.monthlyPrice = monthlyPrice;
	}

	public long getYearlyPrice() {
		return yearlyPrice;
	}

	public void setYearlyPrice(long yearlyPrice) {
		this.yearlyPrice = yearlyPrice;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public Newspaper(int newspaperId, String newspaperName, long weeklyPrice, long monthlyPrice, long yearlyPrice,
			Vendor vendor) {
		super();
		this.newspaperId = newspaperId;
		this.newspaperName = newspaperName;
		this.weeklyPrice = weeklyPrice;
		this.monthlyPrice = monthlyPrice;
		this.yearlyPrice = yearlyPrice;
		this.vendor = vendor;
	}
	public Newspaper( String newspaperName, long weeklyPrice, long monthlyPrice, long yearlyPrice,
			Vendor vendor) {
		super();
		this.newspaperName = newspaperName;
		this.weeklyPrice = weeklyPrice;
		this.monthlyPrice = monthlyPrice;
		this.yearlyPrice = yearlyPrice;
		this.vendor = vendor;
	}

	public Newspaper( String newspaperName, long weeklyPrice, long monthlyPrice, long yearlyPrice) {
		super();
		this.newspaperName = newspaperName;
		this.weeklyPrice = weeklyPrice;
		this.monthlyPrice = monthlyPrice;
		this.yearlyPrice = yearlyPrice;
	
	}

	public Newspaper() {
		super();
	}

	@Override
	public String toString() {
		return "Newspaper [newspaperId=" + newspaperId + ", newspaperName=" + newspaperName + ", weeklyPrice="
				+ weeklyPrice + ", monthlyPrice=" + monthlyPrice + ", yearlyPrice=" + yearlyPrice + ", vendor=" + vendor.getVendorId()
				+ "]";
	}
	
	public String toStringVendor() {
		return "Newspaper [newspaperId=" + newspaperId + ", newspaperName=" + newspaperName + ", weeklyPrice="
				+ weeklyPrice + ", monthlyPrice=" + monthlyPrice + ", yearlyPrice=" + yearlyPrice + ", vendor=" + vendor
				+ "]";
	}
	public String toStringOVendor() {
		return "Newspaper [newspaperId=" + newspaperId + ", newspaperName=" + newspaperName + ", weeklyPrice="
				+ weeklyPrice + ", monthlyPrice=" + monthlyPrice + ", yearlyPrice=" + yearlyPrice 
				+ "]";
	}

	
	

}
