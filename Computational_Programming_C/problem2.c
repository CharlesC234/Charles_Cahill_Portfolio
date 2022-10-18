#include<stdio.h>
#include <stdlib.h>

#define MAX_LIMIT 100
struct book {
	char title[MAX_LIMIT]; 
	char author[MAX_LIMIT];
	int pages;
	double price; 
};
void printBookInfo(struct Book* book);
void minPriceBook(struct Book library[], int nBooks);

int main(void) {

	struct book arr_book[MAX_LIMIT] = {
          {"Fundamentals of Wavelets", "Goswami Jaideva", 935, 95},
      {"Data Smart", "Foreman John", 695, 55},
      {"God Created the Integers", "Hawking Stephen", 987, 142},
      {"Superfreakonomics", "Dubner Stephen", 376, 173},
      {"Orientalism", "Said Edward", 246, 36},
      {"Nature of Statistical Learning Theory", "Vapnik Vladimir", 392, 83},
      {"Integration of the Indian States", "Menon V P", 834, 75},
      {"Drunkard's Walk", "Mlodinow Leonard", 139, 108},
      {"Image Processing & Mathematical Morphology", "Shih Frank", 483, 150},
      {"How to Think Like Sherlock Holmes", "Konnikova Maria", 514, 69},
      {"Data Scientists at Work", "Sebastian Gutierrez", 729, 82},
      {"Slaughterhouse Five", "Vonnegut Kurt", 444, 196},
      {"Birth of a Theorem", "Villani Cedric", 73, 147},
      {"Structure & Interpretation of Computer Programs", "Sussman Gerald", 247, 16},
      {"Age of Wrath", "Eraly Abraham", 59, 165},
      {"Trial", "Kafka Frank", 188, 56},
      {"Statistical Decision Theory'", "Pratt John", 214, 41},
      {"Data Mining Handbook", "Nisbet Robert", 615, 140},
      {"New Machiavelli", "Wells H. G.", 79, 185},
      {"Physics & Philosophy", "Heisenberg Werner", 434, 32},
      {"Making Software", "Oram Andy", 296, 43},
      {"Analysis, Vol I", "Tao Terence", 251, 107},
      {"Machine Learning for Hackers", "Conway Drew", 802, 72},
      {"Signal and the Noise", "Silver Nate", 986, 22},
      {"Python for Data Analysis", "McKinney Wes", 688, 144},
      {"Introduction to Algorithms", "Cormen Thomas", 772, 51},
      {"Beautiful and the Damned", "Deb Siddhartha", 837, 135},
      {"Outsider", "Camus Albert", 132, 45},
      {"Complete Sherlock Holmes - Vol I", "Doyle Arthur Conan", 658, 189},
      {"Complete Sherlock Holmes - Vol II", "Doyle Arthur Conan", 900, 166},
      {"Wealth of Nations", "Smith Adam", 653, 123},
      {"Pillars of the Earth", "Follett Ken", 437, 116},
      {"Mein Kampf", "Hitler Adolf", 320, 35},
      {"Tao of Physics", "Capra Fritjof", 307, 140},
      {"Surely You're Joking Mr Feynman", "Feynman Richard", 414, 114},
      {"Farewell to Arms, A", "Hemingway Ernest", 927, 197},
      {"Veteran", "Forsyth Frederick", 906, 31},
      {"False Impressions", "Archer Jeffery", 936, 48},
      {"Last Lecture", "Pausch Randy", 835, 171},
      {"Return of the Primitive", "Rand Ayn", 332, 25},
      {"Jurassic Park", "Crichton Michael", 801, 117},
      {"Russian Journal, A", "Steinbeck John", 456, 141},
      {"Tales of Mystery and Imagination", "Poe Edgar Allen", 410, 165},
      {"Freakonomics", "Dubner Stephen", 679, 196},
      {"Hidden Connections", "Capra Fritjof", 366, 91},
      {"Story of Philosophy", "Durant Will", 804, 155},
      {"Asami Asami", "Deshpande P L", 433, 181},
      {"Journal of a Novel", "Steinbeck John", 753, 99},
      {"Once There Was a War", "Steinbeck John", 447, 180},
      {"Moon is Down", "Steinbeck John", 419, 89},
      {"Brethren", "Grisham John", 916, 80},
      {"In a Free State", "Naipaul V. S.", 911, 87},
      {"Catch 22", "Heller Joseph", 996, 20},
      {"Complete Mastermind", "BBC", 804, 139},
      {"Dylan on Dylan", "Dylan Bob", 971, 57},
      {"Soft Computing & Intelligent Systems", "Gupta Madan", 533, 46},
      {"Textbook of Economic Theory", "Stonier Alfred", 990, 108},
      {"Econometric Analysis", "Greene W. H.", 478, 15},
      {"Learning OpenCV", "Bradsky Gary", 261, 91},
      {"Data Structures Using C & C++", "Tanenbaum Andrew", 781, 153},
      {"Computer Vision, A Modern Approach", "Forsyth David", 152, 116},
      {"Principles of Communication Systems", "Taub Schilling", 695, 27},
      {"Let Us C", "Kanetkar Yashwant", 917, 117},
      {"Amulet of Samarkand", "Stroud Jonathan", 990, 159},
      {"Crime and Punishment", "Dostoevsky Fyodor", 189, 88},
      {"Angels & Demons", "Brown Dan", 966, 17},
      {"Argumentative Indian", "Sen Amartya", 653, 60},
      {"Sea of Poppies", "Ghosh Amitav", 646, 89},
      {"Idea of Justice", "Sen Amartya", 103, 179},
      {"Raisin in the Sun, A", "Hansberry Lorraine", 301, 161},
      {"All the President's Men", "Woodward Bob", 636, 112},
      {"Prisoner of Birth, A", "Archer Jeffery", 65, 17},
      {"Scoop!", "Nayar Kuldip", 751, 142},
      {"Ahe Manohar Tari", "Deshpande Sunita", 256, 110},
      {"Last Mughal", "Dalrymple William", 701, 73},
      {"Social Choice & Welfare, Vol 39 No. 1", "Various", 173, 173},
      {"Radiowaril Bhashane & Shrutika", "Deshpande P L", 357, 156},
      {"Gun Gayin Awadi", "Deshpande P L", 435, 115},
      {"Aghal Paghal", "Deshpande P L", 134, 132},
      {"Maqta-e-Ghalib", "Garg Sanjay", 73, 57},
      {"Beyond Degrees", "Bodanis David", 758, 42},
      {"Manasa", "Kale V P", 466, 50},
      {"India from Midnight to Milennium", "Tharoor Shashi", 698, 43},
      {"World's Greatest Trials", "Maugham William S", 861, 12},
      {"Great Indian Novel", "Tharoor Shashi", 894, 118},
      {"O Jerusalem!", "Lapierre Dominique", 332, 156},
      {"City of Joy", "Lapierre Dominique", 442, 184},
      {"Freedom at Midnight", "Lapierre Dominique", 841, 173},
      {"Winter of Our Discontent", "Steinbeck John", 715, 38},
      {"On Education", "Russell Bertrand", 779, 127},
      {"Free Will", "Harris Sam", 371, 24},
      {"Bookless in Baghdad", "Tharoor Shashi", 948, 170},
      {"Case of the Lame Canary", "Gardner Earle Stanley", 717, 55},
      {"Theory of Everything", "Hawking Stephen", 369, 165},
      {"New Markets & Other Essays", "Drucker Peter", 876, 199},
      {"Electric Universe", "Bodanis David", 441, 118},
      {"Hunchback of Notre Dame", "Hugo Victor", 343, 139},
      {"Burning Bright", "Steinbeck John", 754, 138},
      {"Age of Discontuinity", "Drucker Peter", 484, 175},
      {"Doctor in the Nude", "Gordon Richard", 123, 185},
	};

    for (int i = 0; i < MAX_LIMIT; i++) {
        printBookInfo(&arr_book[i]);
    }
    minPriceBook(arr_book, 100);

}

void printBookInfo(struct Book* book) {
    puts("------------------------------");
    printf("Author: %s", book->author);
    printf("Title: %s", book->title);
    printf("Pages: %d", book->pages);
    printf("Price: %f", book->price);
}

void minPriceBook(struct Book library[], int nBooks) {
    int pricev = 1000; 
    int index = 0;
    for (int i = 0; i < nBooks; i++) {
        if (library[i].price < pricev) {
            pricev = library[i].price;
            index = i;
        }
    }
    printf("Book with the minimum price is: ");
    printBookInfo(library[index]);
}