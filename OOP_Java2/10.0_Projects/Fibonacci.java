
/**
 * This class determines the fibonacci value of the term inputed by the user
 *
 * @author (Charles Cahill)
 * @version (4/22/2021)
 */
import java.util.Scanner;
public class Fibonacci
{
public Fibonacci(){
        
}
public int numberOfDigits(int n)
{
    if (n == 0)
    {
        return 0;
    }
    else if (n == 1)
    {
      return 1;   
    }
    else
    {
        return numberOfDigits(n-1) + numberOfDigits(n-2);
    }
}
public void menu(){
    Scanner in = new Scanner(System.in);
    String input;
    int inputInt;
    System.out.println("Please enter an integer value to calculate the Fibonacci value for, press Q to quit");
    input = in.next();
    if(input.equalsIgnoreCase("q")){
        System.out.println("GoodBye");
    }
    else{
    inputInt = Integer.parseInt(input);
    System.out.println(this.numberOfDigits(inputInt));
    this.menu();
    }
   }
public static void main(String[] args){
    Fibonacci num = new Fibonacci();
    num.menu();
}
}
