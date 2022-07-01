package com.rakuten.Newspaper.Entity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
@Table(name="User")
public class User {

	@Id
	@Column
	private String email;
	private String name;
	@Column
	private String type;
	@Column
	private String password;
	@Column
	private Long  contact;
	@OneToOne(targetEntity=Vendor.class)  
	private Vendor vendor;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		
		
		public Vendor getVendor() {
			return vendor;
		}

		public void setVendor(Vendor vendor) {
			this.vendor = vendor;
		}
		@Override
		public String toString() {
			return "User [email=" + email + ", name=" + name + ", type=" + type + ", password=" + password + ", contact="
					+ contact + ", vendor=" + vendor + "]";
		}
		public User(String email, String name, String type, String password, Long contact, Vendor vendor) {
			super();
			this.email = email;
			this.name = name;
			this.type = type;
			this.password = password;
			this.contact = contact;
			this.vendor = vendor;
		}

		public User() {}
		public User(String email, String name, String type, String password, Long contact) {
			super();
			this.email = email;
			this.name = name;
			this.type = type;
			this.password = password;
			this.contact = contact;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}
	 
		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public Long getContact() {
			return contact;
		}

		public void setContact(Long contact) {
			this.contact = contact;
		}
		public User(String email, String name,Long contact) {
			super();
			this.email = email;
			this.name = name;
			this.contact = contact;
		}
		
		
}



