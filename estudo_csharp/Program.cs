// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");
Console.WriteLine("Digite seu nome");
string name = Console.ReadLine();
Console.WriteLine("DIgite o ano de seu nascimento:");
int dateBirth = int.Parse(Console.ReadLine());
int age = 2022 - dateBirth;
Console.WriteLine($"Olá {name}, você tem {age} anos!");