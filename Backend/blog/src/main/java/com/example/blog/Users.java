package com.example.blog;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="users")
public class Users {
  @Id
 
  private int _id;
  
  String username;
  
 String password;
  
  public Users() {}
  
  public Users(int _id, String username, String password) {
    this._id = _id;
    this.username = username;
    this.password = password;
  }
  public void set_id(int _id) { this._id = _id; }
  public int get_id() { return _id; }
  public void setPassword(String password) { this.password = password; }
  public String getPassword() { return password; }
  public void setUsername(String username) { this.username = username; }
  public String getUsername() { return username; }
}
