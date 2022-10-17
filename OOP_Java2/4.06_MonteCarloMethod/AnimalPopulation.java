
/**
 * This program uses a user imput of number of trials to find the average
 * number of squirrels obsereved until seeing a Fox Squirrel. The program saves .txt files
 * and reads the same file to get this data.
 *
 * @author (Charles Cahill)
 * @version (11/2/2020)
 */
import java.io.IOException;
import java.io.PrintWriter;
import java.io.File;
import java.lang.Math; 
import java.util.Scanner; 
import java.util.Random; 

public class AnimalPopulation
{
   public static void main (String [ ] args) throws IOException
    {
        Random rand = new Random(); 
        Scanner in = new Scanner(System.in);
        int trials = 0;
        int trialsTotal = 0;
        int newAnimal = 0;
        int randNum = 0;
        int totalCount = 0;
        int averageAdd = 0;
        int tokenInt = 0;
        double average = 0;
        
        // First part of program, writing .txt file and printing UI
        System.out.println("Welcome to the Fox Squirell Simulator");
        System.out.println(" ");
        System.out.println(" ");
        System.out.println("How many trials should be simulated?");
        System.out.println("Enter a greater value than 1000");
        trials = in.nextInt();
        System.out.println(" ");
        System.out.println(" ");
        
        while(trials < 1000) {
            System.out.println("    Please try again. Enter a value greater than 1000.");
            System.out.println(" ");
            System.out.println(" ");
            System.out.println("How many trials should be simulated?");
            trials = in.nextInt();
        }
            System.out.println(" ");
            System.out.println(" ");
            trialsTotal = trials;
            System.out.println("Simulating trials now... one moment please... ");
            PrintWriter outFile = new PrintWriter(new File("AnimalPopulation1.txt"));
       while( trials > 0 ) {
            if(randNum != 10){
            randNum = rand.nextInt(10) + 1;
            totalCount++;
            }
                    else if( randNum == 10 ){
           outFile.println(totalCount);
           //System.out.println(totalCount);
           totalCount = 0;
           trials--;
     randNum = 0;
     
    }
        }

outFile.close( );

// Second part of program, reading .txt file

        //while loop will continue while inFile has a next token to read
        String token = "";
        File fileName = new File("AnimalPopulation1.txt");
        Scanner inFile = new Scanner(fileName);

        //while loop will continue while inFile has a next token to read
        while( inFile.hasNext() )
        {
            token = inFile.next( );
            tokenInt = Integer.parseInt(token);
            averageAdd += tokenInt;
            
        }//end while

        inFile.close();                 //close input file
        average = (double)averageAdd / (double)trialsTotal;
        System.out.println(" ");
        System.out.println(" ");
        System.out.println("The results!");
        System.out.println("The average number of squirells observed until");
        System.out.println("spotting a Fox Squirell at the city park is: " + average);

    }//end of main method

    }





