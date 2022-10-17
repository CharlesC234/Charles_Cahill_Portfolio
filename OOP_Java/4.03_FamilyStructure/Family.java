
/**
 * This program reads a .txt file and reads the number of famalies total, the number of 
 * Boy Boy famalies, Girl Girl and Girl Boy, and prints out all info.
 *
 * @author (Charles Cahill)
 * @version (10/26/2020)
 */
    import java.util.Scanner;
 import java.io.File;
 import java.io.IOException;
public class Family
{
   
public static void main(String[] args) throws IOException
{


String token = "";
String Member1;
String Member2;
int BBoys = 0;
int BGirls = 0;
int BAndG = 0;
int Total = 0;
double PerBBoys;
double PerBGirls;
double PerBAndG;

 File fileName = new File("maleFemaleInFamily.txt");
 Scanner inFile = new Scanner(fileName);

 while( inFile.hasNext() )
 {
 token = inFile.next( ); 
 Member1 = token.substring(0,1);
 Member2 = token.substring(1);
 if((Member1.equals("B")) && (Member2.equals("B"))){
     BBoys++;
 }//e
 else if((Member1.equals("G")) && (Member2.equals("G"))){
     BGirls++;
    }
 else{
     BAndG++;
    }
    Total++;
}
 inFile.close(); 
 System.out.println("Composition statistics for famalies with two childern.");
 System.out.println(" ");
 System.out.println("Total number of famalies: " + Total );
 System.out.println(" ");
 System.out.println("Number of famalies with ");
 PerBBoys = (double) Math.round(((BBoys * 100) / Total)  * 10) / 10;
 PerBGirls = (double) Math.round(((BGirls * 100) / Total)  * 10) / 10;
 PerBAndG = (double) Math.round(((BAndG * 100) / Total)  * 10) / 10;
 System.out.println("     2 boys: " + BBoys + "     represents: " + PerBBoys + " %");
 System.out.println("     2 girls: " + BGirls + "     represents: " + PerBGirls + " %" );
 System.out.println("     1 boy and 1 girl: " + BAndG + "     represents: " + PerBAndG + " %" );
}
 }
