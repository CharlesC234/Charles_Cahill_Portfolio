
/**
 * This program calculates car speed based on time elapsed (in hrs) and
 * distance travled (in miles). The program calculates two diffrent
 * car speeds and then finds an average, and diffrance between them.
 *
 * @author (Charles Cahill)
 * @version (12/4/2020)
 */
public class CarsV3
{
     // default constructor     
   public CarsV3(){
 
   }

   public double calcSpeed(double TimeElapsed, double DistanceTraveled)
   {
       double speed =  DistanceTraveled / TimeElapsed; 
       return speed;
   }
   
   public double calcDifference(double speed1 , double speed2){
       double difference = speed1 - speed2;
       return difference;
    }

   public void printCarSpeed(double speed1 , double speed2, double difference)
   {
       double average = (speed1 + speed2) / 2;
       System.out.println("                    Car Speeds:");
       System.out.println("Car 1          Car 2          Average          Difference");
       System.out.println("=========================================================");
       System.out.println(speed1 + " MPH      " + speed2 + " MPH        " + average + " MPH         " + difference + " MPH");
   }
   

   public static void main (String[] args) {

       double TimeElapsed1 = .5;
       // Value in hours, decimal.
       double DistanceTraveled1 = 45;
       // Value in miles, decimal.
       double TimeElapsed2 = 1.5;
       // Value in hours, decimal.
       double DistanceTraveled2 = 60;
       // Value in miles, decimal.
       double speed; 
       double speed1;
       double speed2;
       double difference;
       double average;
       
       CarsV3 Velocity = new CarsV3();
      
       speed1 = Velocity.calcSpeed(TimeElapsed1, DistanceTraveled1);
       speed2 = Velocity.calcSpeed(TimeElapsed2, DistanceTraveled2);
       difference = Velocity.calcDifference(speed1, speed2);
       Velocity.printCarSpeed(speed1, speed2, difference);
       
       
       
   }
    
    
}
