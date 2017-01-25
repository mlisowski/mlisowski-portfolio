using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Przygotuj metodę o sygnaturze static long Silnia(byte argument);
//obliczającą silnię liczby podanej w argumencie.Silnia z liczby 3 to 3! = 1·2·3.
//Silnia z liczby n to n! = 1·2·...· (n – 1) n.Sprawdź, czy wartości zwracane
//przez metodę są prawidłowe, oraz ustal, dla jakich wartości argumentów
//wartość tej metody pozostaje w zakresie liczby long (maks.wartość to 9 223
//372 036 854 775 807). Dodaj do metody warunek sprawdzający, czy argument
//jest z prawidłowego zakresu(w przeciwnym przypadku należy zgłosić
//wyjątek ArgumentOutOfRangeException).

namespace Silnia
{
    class Program
    {
        static void Main(string[] args)

        {
            Silnia();
        }

        static long Silnia()
        {
            long wynikSilnia = 1;

            try
            {
                Console.WriteLine("Proszę podać liczbę:");
                int liczba = int.Parse(Console.ReadLine());

                for (int i = 1; i <= liczba; i++)
                {
                    wynikSilnia *= i;
                }
                Console.WriteLine("Silnia podanej liczby to: " + wynikSilnia);
                Console.ReadKey();
            }
            catch (ArgumentOutOfRangeException Ex)
            {
                Console.WriteLine(Ex.Message);
            }
            return wynikSilnia;
        }
    }
}
