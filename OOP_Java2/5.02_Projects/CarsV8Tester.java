
/**
 * This program is the client class to CarsV8. This program
 * uses the methods identified in CarsV8 to create objects, 
 * and find the speed of two diffrent cars, the average speed of the cars, and
 * the difference of speeds.
 *
 * @author (Charles Cahill)
 * @version (12/8/2020)
 */
public class CarsV8Tester
{
      public static void main (String [] args) {
          // Variable initialization 
          String Car1 = "Ferrari";
          double DistanceTravled1 = 60.0;
          double TimeElapsed1 = .5;
          int speed1;
          String Car2 = "Tesla";
          double DistanceTravled2 = 120.0;
          double TimeElapsed2 = 1.75;
          int speed2;
          int difference;
          
          // Object initialization
          CarsV8 Velocity = new CarsV8(Car1, Car2);
          CarsV8 Velocity1 = new CarsV8(Car1, Car2);
          CarsV8 Velocity2 = new CarsV8(Car1, Car2);
          
          //Method calls using CarsV8 code
          speed1 = Velocity1.calcSpeed( TimeElapsed1, DistanceTravled1);
          
          speed2 = Velocity2.calcSpeed( TimeElapsed2, DistanceTravled2);
          
          difference = Velocity.calcSpeed( speed1, speed2);
          Velocity.printCarSpeed( speed1, speed2, difference);
          
          
        }
}
