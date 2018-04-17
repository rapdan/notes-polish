import random


WORDS = ("python", "anagram", "łatwy", "skomplikowany", "odpowiedź", "ksylofon", "samochód", "samolot", "Norwegia", "Polska", "Francja", "Hiszpania", "ciężarowka", "taczka", "podróż", "statek", "problem", "kawalerka")
word = random.choice(WORDS)
# utwórz zmienną, by później użyć jej do sprawdzenia, czy odpowiedź jest poprawna
correct = word
# utwórz 'pomieszaną' wersję słowa
jumble =""
ocena =5
wskaznik =0
#mieszanie liter w wybranym słowie
while word:
    position = random.randrange(len(word))
    jumble += word[position]                        #tworzenie mieszanki
    word = word[:position] + word[(position + 1):]  #wycinanie litery z wylosowanego słowa

#rozpocznij grę
print(
        """
         Witaj w grze 'Wymieszane litery'!
           Uporządkuj litery, aby odtworzyć prawidłowe słowo.
        (Aby zakończyć zgadywanie, naciśnij klawisz Enter bez podawania odpowiedzi.)
        (Aby uzyskać pomoc wpisz "p" lub "h")
        """
)
print("Zgadnij, jakie to słowo:", jumble)

guess = input("\nTwoja odpowiedź: ")
while guess != correct and guess != "":
    if guess.lower() =="p" or  guess.lower() =="h":
        if wskaznik>4:
            print("Niestety nie zdałeś. To było słowo: {}".format(correct))
            break
        ocena -=1
        print("Podpowiedź kosztuje cię obniżenie oceny do {}".format(ocena))
        wskaznik +=1
        print("Zaczyna się od {}".format(correct[0:wskaznik]))

    else:
        print("Niestety, to nie to słowo.")
    guess = input("Twoja odpowiedź: ")

if guess == correct:
   print("Zgadza się! Zgadłeś!\n")
   print("Twoja ocena: {}".format(ocena))

print("Dziękuję za udział w grze.")
input("\n\nAby zakończyć program, naciśnij klawisz Enter.")
