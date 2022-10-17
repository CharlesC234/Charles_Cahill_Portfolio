
/**
 * Write a description of class newhellowrld here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class HelloWorldV3
{
//default constructor
public HelloWorldV3()
{
}

//print two lines of text
public void printTwoLines( )
{
System.out.println("Hello, Virtual World!");
System.out.println("It is a great day for programming.");
}

//main method
public static void main(String [] args)
{
HelloWorldV3 hello = new HelloWorldV3( );
hello.printTwoLines();
}
}