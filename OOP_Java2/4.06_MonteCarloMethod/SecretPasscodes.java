
/**
 * The pourpose of this program is to create passwords 
 * for a user, by taking into acocunt user input, and 
 * saving to a text file.
 * 
 * @author Charles Cahill
 * @version 11/5/2020
 */
import java.util.Scanner;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.File;

public class SecretPasscodes
{
    public static void main(String[] args) throws IOException
    {
        //initialize scanner
        Scanner in = new Scanner(System.in);
        
        //declare and initialize variables
        int userChoice = 0;
        int pwLength = 0;
        int index = 0;
        String password = "";
        double randomVal = 0;
        PrintWriter outFile = new PrintWriter(new File("SecretPasscodes.txt"));


        //password generator menu
        System.out.println("Password Generator");
        System.out.println("==============================================================");
        System.out.println("  [1] Only lowercase letters         ");
        System.out.println("  [2] Numbers, and uppercase, some symbols         ");
        System.out.println("  [3] Numbers, lowercase and uppercase, some symbols      ");
        System.out.println("  [4] Only uppercase letters         ");
        System.out.println("  [5] Quit                           ");
        System.out.println("==============================================================");
        
        while(userChoice != 5)
        {
        password = "";
        System.out.println("Enter Selection (1-5): ");
        userChoice = in.nextInt();
        if((userChoice < 1) || (userChoice > 5)){
         System.out.println("Enter Selection (1-5): ");
         System.out.println("Invalid option. Please try again.");
         userChoice = in.nextInt();
         System.out.println(" ");
         System.out.println(" ");
        }
        if(userChoice != 5){
        System.out.println("Password Length (6 or more): ");
        pwLength = in.nextInt();
        System.out.println(" ");
        System.out.println(" ");
        }
        if (pwLength < 6){
         System.out.println("Password Length (6 or more): ");
         System.out.println("Password length too short. Please try again.");
         pwLength = in.nextInt();
         System.out.println(" ");
         System.out.println(" ");
        }
        else if(userChoice == 1)
        {
            while(password.length() < pwLength)
            {
                randomVal =  Math.random() * 26 + 97;
                password += (char)(randomVal);
            }
            outFile.println(password);
        }
        else if(userChoice == 2)
        {
            while(password.length() < pwLength)
            {
                randomVal =  Math.random() * 42 + 48;
                password += (char)(randomVal);   
            }
            outFile.println(password);
        }
        else if(userChoice == 3)
        {
            while(password.length() < pwLength)
            {
                randomVal =  Math.random() * 78 + 48;
                password += (char)(randomVal);
            }
            outFile.println(password);
        }
        else if(userChoice == 4)
        {
            while(password.length() < pwLength)
            {
                randomVal =  Math.random() * 26 + 65;
                password += (char)(randomVal);
            }
            outFile.println(password);
        }
        }
       outFile.close( );
            //Check that selection meets the criteria of 1-4
        System.out.println(" ");
        System.out.println(" ");
        System.out.println("Thank you for using the Pass Code Generator. ");
        System.out.println(" ");
        System.out.println(" ");
            // When it is 5, loop ends and passwords are printed back from text file
            
        //Ask for password length
        System.out.println("Here are your randmly generated codes: ");
        
        String token = "";
        File fileName = new File("SecretPasscodes.txt");
        Scanner inFile = new Scanner(fileName);

        //while loop will continue while inFile has a next token to read
        while( inFile.hasNext() )
        {
            index++;
            token = inFile.next( );      //read next token from file
            System.out.println("     " +  index + "     "     + token);   //print value of token
        }//end while

        inFile.close();                 //close input file  //close the file when finished
        
        
        // Read passwords back from text file
        }
        }
        
        
     
