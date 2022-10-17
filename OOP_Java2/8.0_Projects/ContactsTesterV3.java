
/**
 * This class uses the Contacts class to make an array of contacts
 * and use a binary search to search for specific parts of each contact.
 *
 * @author (Charles Cahill)
 * @version (3/10/2021)
 */
public class ContactsTesterV3
{
static void Print(Contacts[] Info){
       for(int i = 0; i < Info.length; i++ ){
           System.out.println(Info[i].toString());
        }
}
   
 static void SortByName(Contacts [] Info){
    int i;
    int index;
    int max;
    Contacts var;
    for( i = Info.length - 1 ; i >= 0 ; i-- ){
     max = 0;
      for( index = 0; index <= i; index++ ){
            if( Info[ index ].getName().compareTo( Info[ max ].getName() ) > 0){
              max = index;
            }
       var = Info[ i ];
       Info[ i ] = Info[ max ];
       Info[ max ] = var;
   }
  } 
  //System.out.println(" ");
  //System.out.println("<<Sorted By Title>>");
  //System.out.println(" ");
  //for(i = 0; i < Info.length; i++ ){
  //         System.out.println(Info[i].toString());
  //}
 }
 
 static void SortByRelation(Contacts [] Info){
    int i;
    int index;
    int max;
    Contacts var;
    for( i = Info.length - 1 ; i >= 0 ; i-- ){
     max = 0;
      for( index = 0; index <= i; index++ ){
            if( Info[ index ].getRelation().compareTo( Info[ max ].getRelation() ) > 0){
              max = index;
            }
       var = Info[ i ];
       Info[ i ] = Info[ max ];
       Info[ max ] = var;
    }
   }
   // System.out.println(" ");
   // System.out.println("<<Sorted By Artist>>");
   // System.out.println(" ");
   // for(i = 0; i < Info.length; i++ ){
   //        System.out.println(Info[i].toString());
   //} 
 } 
 
 static void SortByBirthday(Contacts [] Info){
    int i;
    int index;
    int max;
    Contacts var;
    for( i = Info.length - 1 ; i >= 0 ; i-- ){
     max = 0;
      for( index = 0; index <= i; index++ ){
            if( Info[ index ].getBirthday().compareTo( Info[ max ].getBirthday() ) > 0){
              max = index;
            }
       var = Info[ i ];
       Info[ i ] = Info[ max ];
       Info[ max ] = var;
    }
   }
   // System.out.println(" ");
   // System.out.println("<<Sorted By Artist>>");
   // System.out.println(" ");
   // for(i = 0; i < Info.length; i++ ){
   //        System.out.println(Info[i].toString());
   //} 
 } 
 
 static void SortByPhoneNumber(Contacts [] Info){
    int i;
    int index;
    int max;
    Contacts var;
    for( i = Info.length - 1 ; i >= 0 ; i-- ){
     max = 0;
      for( index = 0; index <= i; index++ ){
            if( Info[ index ].getPhoneNumber().compareTo( Info[ max ].getPhoneNumber() ) > 0){
              max = index;
            }
       var = Info[ i ];
       Info[ i ] = Info[ max ];
       Info[ max ] = var;
    }
   }
   // System.out.println(" ");
   // System.out.println("<<Sorted By Artist>>");
   // System.out.println(" ");
   // for(i = 0; i < Info.length; i++ ){
   //        System.out.println(Info[i].toString());
   //} 
 } 
 
 static void SortByEmail(Contacts [] Info){
    int i;
    int index;
    int max;
    Contacts var;
    for( i = Info.length - 1 ; i >= 0 ; i-- ){
     max = 0;
      for( index = 0; index <= i; index++ ){
            if( Info[ index ].getEmail().compareTo( Info[ max ].getEmail() ) > 0){
              max = index;
            }
       var = Info[ i ];
       Info[ i ] = Info[ max ];
       Info[ max ] = var;
    }
   }
   // System.out.println(" ");
   // System.out.println("<<Sorted By Artist>>");
   // System.out.println(" ");
   // for(i = 0; i < Info.length; i++ ){
   //        System.out.println(Info[i].toString());
   //} 
 } 
 
  public static int FindName(Contacts[] Info, String toFind){
  int high = Info.length;
  int low = -1;
  int probe;
  System.out.println("<<Searching For: " + toFind + " >>");
  System.out.println(" ");
  while( high - low > 1 ){
     probe = ( high + low ) / 2;
     if( Info[probe].getName().compareTo(toFind) > 0){
        high = probe;
     }
     else
     {
        low = probe;
     }
    }
  if( (low >= 0) && (Info[low].getName().compareTo(toFind) == 0 )){
       return low;
  }
  else
  {
       return -1;
  }
}

 public static int FindPhoneNumber(Contacts[] Info, String toFind){
  int high = Info.length;
  int low = -1;
  int probe;
  System.out.println("<<Searching For: " + toFind + " >>");
  System.out.println(" ");
  while( high - low > 1 ){
     probe = ( high + low ) / 2;
     if( Info[probe].getPhoneNumber().compareTo(toFind) > 0){
        high = probe;
     }
     else
     {
        low = probe;
     }
    }
  if( (low >= 0) && (Info[low].getPhoneNumber().compareTo(toFind) == 0 )){
       return low;
  }
  else
  {
       return -1;
  }
}

 public static int FindEmail(Contacts[] Info, String toFind){
  int high = Info.length;
  int low = -1;
  int probe;
  System.out.println("<<Searching For: " + toFind + " >>");
  System.out.println(" ");
  while( high - low > 1 ){
     probe = ( high + low ) / 2;
     if( Info[probe].getEmail().compareTo(toFind) > 0){
        high = probe;
     }
     else
     {
        low = probe;
     }
    }
  if( (low >= 0) && (Info[low].getEmail().compareTo(toFind) == 0 )){
       return low;
  }
  else
  {
       return -1;
  }
}
  
    public static void FindRelation(Contacts[] Info , String toFind){
   int high = Info.length;
   int low = -1;
   int probe;
   System.out.println("<<Searching For: " + toFind + " >>");
   System.out.println(" ");
   while( high - low > 1 ){
     probe = ( high + low ) / 2;
     if(Info[probe].getRelation().compareTo(toFind) > 0){
         high = probe;
        }
        else
        {
         low = probe;
        if(Info[probe].getRelation().compareTo(toFind) == 0){
         break;
        }
     }
    }
     if( (low >= 0) && (Info[low].getRelation().compareTo(toFind) == 0))
    {
        linearPrintRelation(Info, low, toFind);
     }
      else
      {
      System.out.println("NOT found: " + toFind);
    }
  }
  
    public static void FindBirthday(Contacts[] Info , String toFind){
   int high = Info.length;
   int low = -1;
   int probe;
   System.out.println("<<Searching For: " + toFind + " >>");
   System.out.println(" ");
   while( high - low > 1 ){
     probe = ( high + low ) / 2;
     if(Info[probe].getBirthday().substring(0,3).compareTo(toFind) > 0){
         high = probe;
        }
        else
        {
         low = probe;
        if(Info[probe].getBirthday().substring(0,3).compareTo(toFind) == 0){
         break;
        }
     }
    }
     if( (low >= 0) && (Info[low].getBirthday().substring(0,3).compareTo(toFind) == 0))
    {
        linearPrintBirthday(Info, low, toFind);
     }
      else
      {
      System.out.println("NOT found: " + toFind);
    }
  }
 
   public static void linearPrintRelation(Contacts[] Info, int low, String toFind)
  {
   int i;
   int start = low;
   int end = low;
   i = low - 1;
   while((i >= 0) && (Info[i].getRelation().compareTo(toFind) == 0)){
      start = i;
      i--;
   }
   i = low + 1;
   while((i < Info.length) && (Info[i].getRelation().compareTo(toFind) == 0)){
      end = i;
      i++;
   }
   for(i = start; i <= end; i++){
      System.out.println(Info[i]);
   }
 }
 
   public static void linearPrintBirthday(Contacts[] Info, int low, String toFind)
  {
   int i;
   int start = low;
   int end = low;
   i = low - 1;
   while((i >= 0) && (Info[i].getBirthday().substring(0,3).compareTo(toFind) == 0)){
      start = i;
      i--;
   }
   i = low + 1;
   while((i < Info.length) && (Info[i].getBirthday().substring(0,3).compareTo(toFind) == 0)){
      end = i;
      i++;
   }
   for(i = start; i <= end; i++){
      System.out.println(Info[i]);
   }
}
 
 
public static void main(String[] args)
{
        Contacts [] Info = new Contacts[10];
        Info[0] = new Contacts("Jacob List", "Friend", "Jan-29-2000", "123-456-7890", "JacobList@Gmail.com" );
        Info[1] = new Contacts("Jake Lemus", "Friend", "Mar-02-2001", "578-675-3210", "JakeLemus@Yahoo.com");
        Info[2] = new Contacts("Tristan John", "Uncle", "May-08-1990", "777-912-5873", "TristanJohn135@Gmail.com");
        Info[3] = new Contacts("Sara Janier", "Sister", "Dec-15-2002", "843-392-9592", "Sara2334532@Att.net");
        Info[4] = new Contacts("Carlos Parades", "Boss", "Dec-05-1989", "841-483-4092", "CarlosP123@Gmail.com");
        Info[5] = new Contacts("Lena Silvers", "Friend", "May-09-1999", "473-823-2819", "LSilvers5432@Yahoo.com");
        Info[6] = new Contacts("Charles Dailey", "Cousin", "Dec-29-2003", "382-210-4829", "CharlesD@Att.net");
        Info[7] = new Contacts("Jose Limer", "Friend", "Jun-19-1998", "639-382-4821", "Jose1234594@Gmail.com");
        Info[8] = new Contacts("Dan Hartman", "Coworker", "May-03-1993", "899-392-3493", "DanH09009@Yahoo.com");
        Info[9] = new Contacts("David Jackman", "Friend", "Nov-17-2005", "291-483-2823", "JackmanD345@Att.net");
        
        System.out.println("<<Before>>");
        System.out.println(" ");
        Print(Info);
        System.out.println(" ");
        SortByName(Info);
        int index = FindName(Info, "Jacob List");
        if(index != -1){
            System.out.println(Info[index]);
            System.out.println(" ");
        }
        else
        {
            System.out.println("Not found. " );
            System.out.println(" ");
        }
        index = FindName(Info, "Charles Cahill");
        if(index != -1){
            System.out.println(Info[index]);
            System.out.println(" ");
        }
        else
        {
            System.out.println("Not found. " );
            System.out.println(" ");
        }
        SortByRelation(Info);
        FindRelation(Info, "Friend");
        System.out.println(" ");
        FindRelation(Info, "Client");
        System.out.println(" ");
        SortByBirthday(Info);
        FindBirthday(Info, "May");
        System.out.println(" ");
        FindBirthday(Info, "Aug");
        System.out.println(" ");
        SortByPhoneNumber(Info);
        index = FindPhoneNumber(Info, "123-456-7890");
        if(index != -1){
            System.out.println(Info[index]);
            System.out.println(" ");
        }
        else
        {
            System.out.println("Not found. " );
            System.out.println(" ");
        }
        index = FindPhoneNumber(Info, "222-222-2222");
        if(index != -1){
            System.out.println(Info[index]);
            System.out.println(" ");
        }
        else
        {
            System.out.println("Not found. " );
            System.out.println(" ");
        }
        SortByEmail(Info);
        index = FindEmail(Info, "TristanJohn135@Gmail.com" );
        if(index != -1){
            System.out.println(Info[index]);
            System.out.println(" ");
        }
        else
        {
            System.out.println("Not found. " );
            System.out.println(" ");
        }
        index = FindEmail(Info, "CharlesC@yahoo.com");
        if(index != -1){
            System.out.println(Info[index]);
            System.out.println(" ");
        }
        else
        {
            System.out.println("Not found. " );
            System.out.println(" ");
        }
        
    }
}
