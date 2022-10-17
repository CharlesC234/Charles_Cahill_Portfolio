
/**
 * This program determines the gravity of planet Mars
 * and prints the information out. 
 *
 * @author (Charles Cahill)
 * @version (11/23/20)
 */
import java.lang.Math; 
public class PlanetGravity
{
    String planet  = "Mars";
    double M;
    public static double Gravity(int D, double M)

    {
        double R = (D/2) * 1000;
        double G = ((6.67 * Math.pow(10,-11)) * M) / (Math.pow(R,2));
        return G;
    }
    public static void Print(String planet, int D, double M, double G)
    {
        System.out.println("                    Planetary Data");
        System.out.println("  Planet     Diameter(Km)     Mass(Kg)     G (m/s^2)");
        System.out.println("******************************************************");
        System.out.println("  " + planet + "       " + D + "             " + M + "    " + G);
    }
   public static void main(String args[])
   {
    double M;
       M = 6.4219 * Math.pow(10,23);
    Print("Mars",    6794, M , Gravity(6794, M));   
    }

}
