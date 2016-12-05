using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoneyExchange
{
    class Program
    {
        static void Main(string[] args)
        {
            double AmountInput;
            double[] NominalValues = { 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01 };
            int i;
            int DifferentNominals = 0;

            Console.Write("Type your amount to exchange: ");

            if (!double.TryParse(Console.ReadLine(), out AmountInput))
            {
                Console.WriteLine("Incorrect type of input!");
                Console.ReadKey();
                Environment.Exit(0);
            }

            i = 0;
            while (AmountInput > 0)
            {
                if (AmountInput >= NominalValues[i])
                {
                    int NominalsQuantity = (int)(AmountInput / NominalValues[i]);
                    AmountInput = Math.Round(AmountInput - NominalValues[i] * NominalsQuantity, 2);

                    if (NominalsQuantity > 0)
                    {
                        DifferentNominals += 1;
                    }

                    Console.WriteLine("Used nominals: " + NominalsQuantity + " x " + NominalValues[i] + " PLN");
                    
                }

                i++;
                
            }
            Console.WriteLine("Numbers of different nominals:" + DifferentNominals);
            Console.ReadKey();

        }
    }
}
