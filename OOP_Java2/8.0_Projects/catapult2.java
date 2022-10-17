/**
 * This class is a client class for the catapult tester class.
 * This class takes a 2d array with degrees and velocity values 
 * and fills it up with distance values from the given values.
 *
 * @author (Charles Cahill)
 * @version (3/11/2021)
 */
public class catapult2 
{
    double [] [] cat;

    catapult2(double [] [] c){
     cat = c;
    }

    public double [][] calcDistance(){
        int indexR = 1;
        int indexC = 1;
        for (int row = 1; row < cat.length; row++){
            indexC = 0;
            for (int column = 1; column <= cat[0].length ; column++){
             cat[row][column] = (Math.pow(cat[indexR][0]/2.237, 2) * Math.sin(2 * Math.toRadians(cat[0][indexC]))/9.8);
             indexC++;
        }
        indexR++;
    }
    return cat;
}
}