
/**
 * This class uses Selection, Insertion, and merge sort to 
 * sort an array full of store objects in specific ways.
 *
 * @author (Charles Cahill)
 * @version (4/27/2021)
 */
public class MergeSortTester
{
   public static void Print(MergeSort [] Info){
      for(int i = 0; i < Info.length; i++ ){
           System.out.println(Info[i].toString());
      }
    }
   
   public static MergeSort [] SelectionName(MergeSort [] Info, int type){
    int i;
    int index;
    int max;
    MergeSort var;
    for( i = Info.length - 1 ; i >= 0 ; i-- ){
     max = 0;
      for( index = 0; index <= i; index++ ){
          if( type == 1){
            if( Info[ index ].getName().compareTo( Info[ max ].getName() ) > 0){
              max = index;
            }
            }
            else
            {
          if( Info[ index ].getName().compareTo( Info[ max ].getName() ) < 0){
              max = index;
           }   
           }
     
      var = Info[ i ];
      Info[ i ] = Info[ max ];
      Info[ max ] = var;
     }
    }
     return Info;
   }
   
   public static MergeSort[] insertionNumber(MergeSort[] source, int type){
    MergeSort[] dest = new MergeSort[ source.length ];
    for( int i = 0; i < source.length; i++ ){
     MergeSort next = source[ i ];
     int insertindex = 0;
     int k = i;
     while( k > 0 && insertindex == 0 ){
        if(type == 1){
        if( next.getProductNumber() > dest[k-1].getProductNumber()){
          insertindex = k;
        }
        else
        {
          dest[ k ] = dest[ k - 1 ];
        }
        k--;
       }
       else
       {
        if( next.getProductNumber() < dest[k-1].getProductNumber()){
          insertindex = k;
        }
        else
        {
          dest[ k ] = dest[ k - 1 ];
        }
        k--;
       } 
      }
     dest[ insertindex ] = next;
    } 
    return dest;
   }
 
   
   public static MergeSort [] SelectionPrice(MergeSort [] Info, int type){
    int i;
    int index;
    int max;
    MergeSort var;
    for( i = Info.length - 1 ; i >= 0 ; i-- ){
     max = 0;
      for( index = 0; index <= i; index++ ){
         if( type == 1){
            if( Info[ index ].getProductPrice() > Info[ max ].getProductPrice() ){
              max = index;
            }
            }
            else
            {
            if( Info[ index ].getProductPrice() < Info[ max ].getProductPrice() ){
              max = index;
            }   
            }
     
      var = Info[ i ];
      Info[ i ] = Info[ max ];
      Info[ max ] = var;
     }
    }
    return Info;
   }
   
   public static void merge(MergeSort Info [], int l, int m, int r)
    {
        int n1 = m - l + 1;
        int n2 = r - m;
        MergeSort L[] = new MergeSort[n1];
        MergeSort R[] = new MergeSort[n2];
        for (int i = 0; i < n1; ++i)
            L[i] = Info[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = Info[m + 1 + j];
        int i = 0, j = 0;
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i].getQuantityAvailable() <= R[j].getQuantityAvailable()) {
                Info[k] = L[i];
                i++;
            }
            else {
                Info[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            Info[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            Info[k] = R[j];
            j++;
            k++;
        }
    }
    
   public static void sort(MergeSort Info[], int l, int r)
    {
        if (l < r) {
            int m =l+ (r-l)/2;
            sort(Info, l, m);
            sort(Info, m + 1, r);
            merge(Info, l, m, r);
        }
    }
   
   public static void main(String[] args){
        MergeSort [] Info = new MergeSort[10];
        Info[0] = new MergeSort("Eggs", 1, 1.99, 50);
        Info[1] = new MergeSort("Cereal", 2, 4.25, 25);
        Info[2] = new MergeSort("Milk", 3, 3.99, 40);
        Info[3] = new MergeSort("Juice", 4, 4.50, 30);
        Info[4] = new MergeSort("Bread", 5, 2.50, 10);
        Info[5] = new MergeSort("Pasta", 6, 3.25, 15);
        Info[6] = new MergeSort("Bagels", 7, 5.75, 27);
        Info[7] = new MergeSort("Rice", 8, 5.25, 12);
        Info[8] = new MergeSort("Beans", 9, 3.75, 30);
        Info[9] = new MergeSort("Chips", 10, 5.99, 22);

        System.out.println("<<Before Sorting>>");
        Print(Info);
        System.out.println(" ");
        System.out.println("<<After Sorting By Name>>");
        Print(SelectionName(Info, 1));
        System.out.println(" ");
        System.out.println("<<After Sorting By Number>>");
        Print(insertionNumber(Info, 1));
        System.out.println(" ");
        System.out.println("<<After Sorting By Price>>");
        Print(SelectionPrice(Info, 1));
        System.out.println(" ");
        System.out.println("<<After Sorting By Quantity>>");
        sort(Info, 0, Info.length-1);
        Print(Info);
        System.out.println(" ");

   }
}
