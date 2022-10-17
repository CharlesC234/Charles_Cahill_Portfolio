
/**
 * This class is a client class for the class Contacts Tester. This class 
 * holds the methods used in the Contacts Tester class. 
 *
 * @author (Charles Cahill)
 * @version (3/10/2021)
 *
 */
public class Contacts
{
    // instance variables
    private String name;
    private String relation;
    private String birthday;
    private String phoneNumber;
    private String email;

    // Constructor for objects of class Music
    public Contacts(String n, String r, String bDay, String phone, String e)
    {
        // initialize instance variables
        name = n;
        relation = r;
        birthday = bDay;
        phoneNumber = phone;
        email = e;
        
    }

    public String getName()
    {
        return name;
    }
    
    public String getRelation()
    {
        return relation;
    }
   
    public String getBirthday()
    {
        return birthday;
    }
    
    public String getPhoneNumber()
    {
        return phoneNumber;
    }
    
    public String getEmail()
    {
        return email;
    }
    
    public void setName(String n)
    {
        name = n;
    }
   
    public void setRelation(String r)
    {
        relation = r;
    }
    
    public void setBirthday(String bDay)
    {
        birthday = bDay;
    }
    
    public void setPhoneNumber(String phone)
    {
        phoneNumber = phone;
    }
    
    public void setEmail(String e)
    {
         email = e;
    }
   
    public String toString()
    {
        String str = String.format( "%-25s%-20s%-20s%-20s%-20s ", name,  relation, birthday, phoneNumber, email);
        return str;
    }
}
