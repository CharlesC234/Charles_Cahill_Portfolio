/**
 * This is a class that tests the Card class.
 *
 *  < Charles Cahill >
 *  < 5/2/2021 >
 */

public class CardTester
{
   /**
    * The main method in this class checks the Card operations for consistency.
    * @param args is not used.
    */
   public static void main(String[] args) {

      /* *** TO BE IMPLEMENTED IN ACTIVITY 1 *** */

      // Establish new cards
      Card aceHearts = new Card("ace", "hearts", 1);
      Card aceSpades = new Card("ace", "spades", 1);
      Card kingHearts = new Card("King", "hearts", 13);

      // Test card 1 and methods
      System.out.println("**** Tests Card 1: ace of hearts ****");
      System.out.println("  rank: " + aceHearts.rank());
      System.out.println("  suit: " + aceHearts.suit());
      System.out.println("  pointValue: " + aceHearts.pointValue());
      System.out.println("  toString: " + aceHearts.toString());
      System.out.println();

      // Test card 2
      System.out.println("**** Tests Card 2: ace of spades ****");
      System.out.println("  rank: " + aceSpades.rank());
      System.out.println("  suit: " + aceSpades.suit());
      System.out.println("  pointValue: " + aceSpades.pointValue());
      System.out.println("  toString: " + aceSpades.toString());
      System.out.println();

      // Test card 3
      System.out.println("**** Tests Card 3: king of hearts ****");
      System.out.println("  rank: " + kingHearts.rank());
      System.out.println("  suit: " + kingHearts.suit());
      System.out.println("  pointValue: " + kingHearts.pointValue());
      System.out.println("  toString: " + kingHearts.toString());
      System.out.println();

      // Test matches() method
      System.out.println("**** Matches Tests ****");
      System.out.println(" ");
      System.out.println("**** Testing Card 1 And Card 2 ****");
      System.out.println("Matches: " + aceHearts.matches(aceSpades));
   }
}
