namespace Hw51Shirts {
    internal class Shirts {
        static void Main(string[] args)
        {
            Shirt();
        }
        static void Shirt()
        {
            string[] colors = { "red", "blue", "green" };
            string[] patterns = { "checkered", "stripes", "plain"};

            for (int i = 0; i < colors.Length; i++)
            {
                for (int j = 0; j < patterns.Length; j++)
                {
                    Console.WriteLine(colors[i]+":"+ patterns[j]);
                }
            }
        }
    }
}
