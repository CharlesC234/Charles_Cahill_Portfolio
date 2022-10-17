
/**
 * This program works along with the Pets class. This program
 * uses methods and constructors from the Pets class
 * to prompt a input of pet name, pet breed, and pet age
 * from the user, and then print the results out.
 *
 * @author (Charles Cahill)
 * @version (12/10/2020)
 */
import java.util.Scanner; 
public class PetsTesterV2
{
    public static void main(String[ ] args){
    String petName;
    String petBreed;
    int petAge;
    String choice = "yes";
    Scanner in = new Scanner(System.in);
    
    while(choice.equalsIgnoreCase("yes")){
        
    System.out.println("Enter the name of your pet");
    petName = in.next();
    System.out.println("Enter the breed of your pet");
    petBreed = in.next();
    System.out.println("Enter the age of your pet");
    petAge = in.nextInt();
    
    PetsV2 pet1 = new PetsV2(petName, petBreed, petAge);
    
    System.out.println(" ");
    System.out.println("===============================");
    System.out.println("petName: " + pet1.getName());
    System.out.println("petBreed: " + pet1.getBreed());
    System.out.println("petAge: " + pet1.getAge());
    System.out.println(" ");
    System.out.println("Would you like to enter another pet?");
    choice = in.next();
}
    if(choice.equalsIgnoreCase("no")){
        System.out.println("Goodbye");
    }
}
}
