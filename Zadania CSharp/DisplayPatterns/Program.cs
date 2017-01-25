using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace GuessNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            Random randomNumber = new Random();
            int ComputerGuess = randomNumber.Next(1, 10);
            Console.WriteLine("AI has chosen a random number.");
            bool GoodGuess = false;
            Console.WriteLine("Try to guess it.");
            int YourGuess = 0;

            do
            {
                if (YourGuess != ComputerGuess)
                {
                    if (YourGuess == 0)
                    {
                        YourGuess = YourChoicePicker(YourGuess);
                    }
                    else
                    {
                        Console.WriteLine("Try again.");
                        YourGuess = YourChoicePicker(YourGuess);
                    }
                }
                else if (YourGuess == ComputerGuess)
                {
                    GoodGuess = true;
                    Console.WriteLine("Correct! Computer's choice was number " + ComputerGuess);
                }
            }
            while (GoodGuess == false);
            Console.ReadKey();
        }

        private static int YourChoicePicker(int YourGuess)
        {
            try
            {
                YourGuess = int.Parse(Console.ReadLine());
            }
            catch (Exception Ex)
            {
                Console.WriteLine("You can only choose a number.");
            }

            return YourGuess;
        }
    }
}
