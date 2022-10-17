
/**
 * This class is the tester class for Catapult2 class. This class
 * creates a 2d array with intial values, and prints the finalized array out.
 * @author (Charles Cahill)
 * @version (3/11/2021)
 */

public class CatapultTester{

    public static void main(String[] args){
        
        double [][] cat = {{25, 30, 35, 40, 45, 50}, {20, 0, 0, 0, 0, 0, 0}, {25, 0, 0, 0, 0, 0, 0},
        {30, 0, 0, 0, 0, 0, 0}, {35, 0, 0, 0, 0, 0, 0},{40, 0, 0, 0, 0, 0, 0}, {45, 0, 0, 0, 0, 0, 0}, {50, 0, 0, 0, 0, 0, 0}};  

        catapult2 values = new catapult2(cat);

        double catapultValues [][] = values.calcDistance();

        System.out.println("           Projectile Distance (feet)");
        System.out.printf("%s", "MPH");
        for (int i = 0; i < catapultValues[0].length; i++){
            System.out.printf("%5.1f%1s",catapultValues[0][i], "deg");
        }

        System.out.print("\n");
        System.out.println("==================================================================");
        

        
        for(int row = 1; row < cat.length; row ++){
         System.out.printf("%-5.1f",catapultValues[row][0], "deg");
        for(int col = 1; col < cat[row].length; col++){
          System.out.printf("%7.1f", cat[row][col]);
         }
        System.out.println();
       }
    }
}