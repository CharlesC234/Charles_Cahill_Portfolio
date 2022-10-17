
/**
 * This program works as a series of methods, and consturctors to 
 * find the speed of a car, given time and distance, average of two speeds,
 * and diffrence of two speeds, and prints this info out. The program works
 * with CarsV8Tester
 *
 * @author (Charles Cahill)
 * @version (12/8/2020)
 */
public class CarsV8
{
    // Declaration of instance variables
    String C1;
    String C2;
    
    // Loaded Constructor w/ instance variables
    public CarsV8(String Car1, String Car2){
    C1 = Car1;
    C2 = Car2;
   }   
  
   public int calcSpeed(double TimeElapsed, double DistanceTraveled)
   {
       int speed = (int) (DistanceTraveled / TimeElapsed); 
       return speed;
   }
   // Overload Method
   public int calcSpeed(int speed1 , int speed2){
       int difference = speed1 - speed2;
       return difference;
    }
       public void printCarSpeed(int speed1, int speed2, int difference) {
       int average = (speed1 + speed2) / 2;
       System.out.println("                    Car Speeds:");
       System.out.println(C1 + "         " + C2 + "         Average          Difference");
       System.out.println("=========================================================");
       System.out.println(speed1 + " MPH        " + speed2 + " MPH         " + average + " MPH           " + difference + " MPH");
   }
   
}
