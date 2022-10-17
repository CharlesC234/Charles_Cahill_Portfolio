
/**
 * This class is an implementation class for the MergeSortTester class. It 
 * defines store objects.
 *
 * @author (Charles Cahill)
 * @version (4/30/2021)
 */
public class MergeSort
{

    private String name;
    private int productNumber;
    private double productPrice;
    private int quantityAvailable;

    public MergeSort(String n, int pN, double pP, int qA)
    {
        this.name = n;
        this.productNumber = pN;
        this.productPrice = pP;
        this.quantityAvailable = qA;
    }

    public String getName()
    {
        return name;
    }
    
    public int getProductNumber()
    {
        return productNumber;
    }
    
    public double getProductPrice()
    {
        return productPrice;
    }
    
    public int getQuantityAvailable()
    {
        return quantityAvailable;
    }
    
    public void setName(String N)
    {
        this.name = N;
    }
    
    public void setProductNumber(int pN)
    {
        this.productNumber = pN;
    }
    
    public void setProductPrice(int pP)
    {
        this.productPrice = pP;
    }
    
    public void setQuantityAvailable(int qA)
    {
        this.quantityAvailable = qA;
    }
   
    public String toString()
    {
        String str = String.format("%-20s %4d %-20.2f %-10d", name, productNumber, productPrice, quantityAvailable);
        return str;
    }
}
