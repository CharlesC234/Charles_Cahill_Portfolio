
/**
 * Write a description of class GradeV3 here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class GradeV3
{
     public GradeV3(){
 
   }

   public double calculate(int Grade1, int Grade2)
   {
       double Average = (Grade1 + Grade2) / 2.0;
       // Add in rounding to first place
       int Difference = Grade2 - Grade1;
       return Average;
   }

   public void printPlanet(String n, double rad)
   {
       System.out.println("Planet " + n + " has a radius of " + rad);
   }
   

   public static void main (String[] args) {
   
       String name = "Jupiter";
       int diam = 142984;
       double radius = 0.0;
       
       PlanetV3 space = new PlanetV3();
       
       radius = space.calcRadius(diam);
       space.printPlanet(name, radius);
   
   }
    
    
}
