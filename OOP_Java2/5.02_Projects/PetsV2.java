
/**
 * This program works along with the class PetsTester.
 * This program defines and creates the constructor, and creates
 * methods for a user to input pet age, pet breed, and pet name.
 *
 * @author (Charles Cahill)
 * @version (12/9/2020)
 */
public class PetsV2
{
      private String pN;
      private String pB;
      private int pA;
  public PetsV2(){
    }
   
  public PetsV2(String petName, String petBreed, int petAge){
      pN = petName;
      pB = petBreed;
      pA = petAge;
    }
    
  public void setName(String petName){
    pN = petName;
    }
  public void setBreed(String petBreed){
    pB = petBreed;
    }
  public void setAge(int petAge){
    pA = petAge;
    }
    
  public String getName(){
    return pN;
    }
  public String getBreed(){
    return pB;
    }
  public int getAge(){
    return pA;
    }
}
