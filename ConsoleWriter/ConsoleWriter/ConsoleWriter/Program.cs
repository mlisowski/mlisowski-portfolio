﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleWriter
{
    class Program
    {
        static void Main(string[] args)
        {
            int i;

            for (i=1;i<=100;i++)
            {
                if (i % 3 == 0)
                {
                    Console.WriteLine("Ala ma kota");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine("Ala ma psa");
                }

                else if (i % 3 == 0 && i % 5 == 0)
                {
                    Console.WriteLine("Ala ma kota i psa");
                }

                else
                {
                    Console.WriteLine(i);
                }

            }

            Console.ReadKey();

        }
    }
}
