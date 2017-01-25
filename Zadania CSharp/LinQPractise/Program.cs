using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//W aplikacji konsolowej zdefiniuj tablicę łańcuchów:
//string[] slowa = { "czereśnia", "jabłko", "borówka", "wiśnia", "jagoda",
//"gruszka", "śliwka", "malina" };
//Korzystając z metod-rozszerzeń LINQ, wyświetl:
//a) najdłuższą i najkrótszą długość słowa(Min i Max z odpowiednimi
//wyrażeniami lambda) - żeby było ciężej dodałęm od siebie, aby wyświetlić 
//słowa o największej i najmniejszej liczbie znaków;
//b) średnią długość słów(Average);
//c) całkowitą liczbę liter we wszystkich słowach(Sum).
//Przygotuj zapytania LINQ, które:
//a) zwraca wszystkie słowa o długości większej niż 6 liter posortowane
//alfabetycznie;
//b) zwraca wszystkie słowa o długości większej niż 6 liter posortowane
//według ich długości;
//c) zwraca wszystkie słowa kończące się na „a” posortowane według
//ostatniej litery;
//d) zwraca długości poszczególnych słów posortowane według alfabetycznej
//kolejności tych słów;
//e) jak w podpunkcie d, ale tylko dla słów, które zawierają literę „o”;
//f) zwraca słowa z tablicy ze zmienionymi literami na duże.

namespace LinQPractise
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] slowa = { "czeresnia", "jablko", "borowka", "wisnia", "jagoda", "gruszka", "sliwka", "malina", "pomidor", "ogorek", "baklazan" };

            //Linq Methods
            //    a)
            MaxAndMinWordLength(slowa);
            //    b)
            AverageWordLength(slowa);
            //    c)
            AllLettersCounted(slowa);

            //Linq Querries
            //    a) i b) Words longest than 6 characters, ordered alphabetical

            DisplaySixCharactersWords(slowa);

            //    c) Words ending with "a", ordered alphabetically

            string[] WordsEndingWithA = slowa.Where(x => x.EndsWith("a")).OrderBy(x => x.First()).ToArray();

            Console.WriteLine("\n\nSłowa kończące się na 'a', posortowane alfabetycznie: \n");

            foreach (string ElementWithA in WordsEndingWithA)
            {
                Console.WriteLine(ElementWithA);

            }

            string[] WordsLengthSorted = slowa.OrderBy(x => x.First().Select(x => x.Length).ToArray();

            Console.WriteLine("\n\nSłowa kończące się na 'a', posortowane alfabetycznie: \n");

            foreach (string ElementWithA in WordsEndingWithA)
            {
                Console.WriteLine(ElementWithA);

            }

            Console.ReadKey();

        }

        private static void DisplaySixCharactersWords(string[] slowa)
        {
            string[] SixCharactersLengthAlphabetically = slowa.Where(x => x.Length > 6).OrderBy(x => x.First()).ToArray();

            Console.WriteLine("\n\nSłowa dłuższe niż 6 znaków, posortowane alfabetycznie: \n");

            foreach (string SixCharacter in SixCharactersLengthAlphabetically)
            {
                Console.WriteLine(SixCharacter);

            }
            string[] SixCharactersLengthLongestFirst = slowa.Where(x => x.Length > 6).OrderByDescending(x => x.Length).ToArray();

            Console.WriteLine("\n\nSłowa dłuższe niż 6 znaków, posortowane od najdłuższego do najkrótszego: \n");

            foreach (string SixCharacter in SixCharactersLengthLongestFirst)
            {
                Console.WriteLine(SixCharacter);

            }
        }

        private static void AllLettersCounted(string[] slowa)
        {
            int AllLettersCounted = slowa.Sum(x => x.Length);
            Console.WriteLine("\n\nSuma znaków we wszystkich wyrazach to: \n" + AllLettersCounted);
        }

        private static void AverageWordLength(string[] slowa)
        {
            var AverageWordLength = slowa.Average(x => x.Length);
            double TotalAverageWordLength = Math.Ceiling(AverageWordLength);
            Console.WriteLine("\n\nŚrednia długość wyrazu w omawianym zbiorze to " + AverageWordLength + "liter(w zaokrągleniu " + TotalAverageWordLength + ")\n\n");
        }

        private static void MaxAndMinWordLength(string[] slowa)
        {
            int MaxLength = slowa.Max(x => x.Length);
            var LongestString = slowa.Where(max => max.Length == MaxLength);

            Console.WriteLine("Najdłuższy wyraz to:\n");
            foreach (string LongElement in LongestString)
            {
                Console.WriteLine(LongElement);
            }

            int MinLength = slowa.Min(x => x.Length);
            string[] ShortestString = slowa.Where(min => min.Length == MinLength).ToArray();

            Console.WriteLine("\n\nNajkrótszy wyraz to:\n");
            foreach (string ShortElement in ShortestString)
            {
                Console.WriteLine(ShortElement);

            }

        }
    }
}
