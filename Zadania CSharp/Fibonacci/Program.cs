using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Przygotuj metodę CiągFibonacciego, która zapełnia podaną w argumencie
//tablicę kolejnymi wyrazami ciągu Fibonacciego, zaczynając od 1.

namespace Fibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Podaj liczbę do ciągu fibonacciego:");
            string input = Console.ReadLine();
            int n = int.Parse(input);

            int number = n - 1;
            int[] FibonacciOutput = new int[number + 1];
            FibonacciOutput[0] = 0;
            FibonacciOutput[1] = 1;



            if (n == 0)
            {
                FibonacciOutput[number] = 0;
            }
            else if (n == 1 || n == 2)
            {
                FibonacciOutput[number] = 1;
            }

            else
            {
                for (int i = 2; i <= number; i++)
                {
                    FibonacciOutput[i] = FibonacciOutput[i - 2] + FibonacciOutput[i - 1];
                }

            }

            Console.WriteLine("Wynik to: " + FibonacciOutput[number]);
            Console.ReadKey();
        }
    }
}
