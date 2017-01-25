using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Znajdź metodę obliczającą podatek od podanej w argumencie kwoty zgodnie
//z poniższym wzorem:
//a) za mniej niż 10 tys. — 10%,
//b) za sumę z przedziału 10 tys. – 30 tys. — 15%,
//c) za kwotę większą niż 30 tys. — 20%.

namespace TaxCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Podaj kwotę do opodatkowania: ");
                        double Amount = double.Parse(Console.ReadLine());
            double TaxRate = 0;

            if (Amount < 10000)
            {
                TaxRate = 0.1;
            }
            else if (Amount >= 10000 && Amount <= 30000) {

                TaxRate = 0.15;
            }
            else if (Amount > 30000)
            {

                TaxRate = 0.20;
            }

            double TaxAmount = TaxRate * Amount;
            Console.WriteLine("Należny podatek to: " + TaxAmount + "PLN");
            Console.ReadKey();
        }
    }
}
