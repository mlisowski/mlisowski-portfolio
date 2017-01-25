using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Miasto T.ma obecnie 100 tys.mieszkańców, ale jego populacja zwiększa się
//o 3% rocznie.Miasto B. ma 300 tys.mieszkańców i ta liczba rośnie w tempie
//2% na rok. Wykonaj symulację prezentującą liczbę mieszkańców w obu
//miastach i zatrzymującą się, gdy liczba mieszkańców miasta T.przekroczy
//liczbę z miasta B.

namespace CityGrow
{
    class Program
    {
        static void Main(string[] args)
        {
            double CityTPopulation = 100000;
            double CityBPopulation = 300000;
            double TYearlyGrowth = 0.03;
            double BYearlyGrowth = 0.02;
            int i = 0;
            Console.WriteLine("At the beginning, population of City T is: " + CityTPopulation + "citizens");
            Console.WriteLine("At the beginning, population of City B is: " + CityBPopulation + "citizens\n");

            TimeLapse(ref CityTPopulation, ref CityBPopulation, ref i, TYearlyGrowth, BYearlyGrowth);

            Console.WriteLine("Finally, population of City T is bigger than population of City B. It took " + i + "years");
            Console.ReadKey();
        }

        private static void TimeLapse(ref double CityTPopulation, ref double CityBPopulation, ref int i, double TYearlyGrowth, double BYearlyGrowth)
        {
            do
            {
                i++;
                CityTPopulation += (CityTPopulation * TYearlyGrowth);
                CityBPopulation += (CityBPopulation * BYearlyGrowth);

                CityBPopulation = Math.Ceiling(CityBPopulation);
                CityTPopulation = Math.Ceiling(CityTPopulation);

                Console.WriteLine("At the year " + i + ", population of City T is: " + CityTPopulation + " citizens");
                Console.WriteLine("At the year " + i + ", population of City B is: " + CityBPopulation + " citizens\n");

            }
            while (CityTPopulation <= CityBPopulation);
        }
    }
}
