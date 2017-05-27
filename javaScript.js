Dokumentacja 
https://developer.mozilla.org

//--------------------Liczby
tylko jeden typ liczb (float64, 8 bajtów zmiennoprzecinkowy)
0.1+0.2 == 0.3; // false
1 == 1.0

1/0 = Infinity	//nieskonczonosc
-1/0 = -Infinity
NaN = oznacza: nie liczba

//--------------------Dowolna operacja z NaN daje NaN
NaN != NaN
isNaN(...)

//--------------------Niektóre funkcje:
Number(10); // 10
Number(“42.23”); // 42.23
Number(“71oshi”); // NaN
parseInt(“18”); // 18
parseInt(“19kdjas”); // 19 konwertuje na liczbe INT dopóki nie spotka znaku który nie jest cyfra
parseInt(“74.54”); // 74
parseFloat(“74.54”); // 74.54 konwertuje na liczbe float

//--------------------Przeksztalcenia na inne systemy zapisu np. szestnastkowy:
parseInt(num, base)
parseInt("ff"); //NaN
parseInt("ff","16"); //255 w systemie szestnastkowym
parseInt(“0x10”); // 16
parseInt(“0x10”,”10”); // 0 gdyz x powoduje przerwanie parsowania

//--------------------Stringi
var string1 = "DR";
var string2 = ‘terrible’;
string2.length; // 8
“dance”.length; // 5
’42’.length; // 2
var uni = "\u1552"; // "?"
"\u1552".length; // 1

//--------------------Ekranowanie
‘it’s my life’;	//tutaj mamy problem z apostrofem
‘it\’s my life’; // znak \ jest pomocny w rozwiazaniu tego problemu
‘\u1552’; //tutaj potrzebny dla rozróżnienia że jest to znak unicodu

//--------------------Symbole: W js nie ma symboli. Symbol to string z jednym znakiem.
"abcdef".charAt(2); // “c”
"abcdef".charAt(200); // “”
"abcdef".charAt(-1); // “”

//--------------------Konkatenacja stringow
"abcdef".charAt(0) + "abcdef".charAt(2) + "abcdef".charAt(4); // “ace”
"together” + “ again”; // “together again”
12 + “ or ” + “20”; // “12 or 20”

//--------------------Liczby i stringi
12 + “ or ” + “20”; // “12 or 20”
“12” / 2 + 1; // 7
“day” * 2; // NaN
var a = 42; // 42
a.toString(); // “42”
a.toString().length; // 2
a.toString().length.toString(); // “2” //można zamienić długość stringu na string

“Blink ” + 182; // “Blink 182”
“Blink ” + 181 + 1; // “Blink 1811”
“Blink ” + (181 + 1); // “Blink 182”

//--------------------Porównanie stringów
“a” < “b”; // true
“c” < “b”; // false
“abcd” < “abcd”; // false
“abcd” < “abdc”; // true
“toy” === “toy”; // true
“toy” === “t” + “o” + “y”; // true

//--------------------Objekt przykład:
var person = {
“name” : “Alex”,
“age” : 25
};
//--------------------Odwołanie się do objektu:
person.name; // “Alex”
person.age; // 25

//--------------------Prototypy
var Human = {
type : “Human”,
head : 1,
legs : 2,
bad-thing : 22, // błąd, bo jest znak -
“good-thing” : 23, // ok gdyż w cudzysłowach
“:;;:” : 24 // ok
};
var Megahuman = Object.create(Human); //tworzenie Megahuman na podstawie prototypu

//--------------------Usunięcie właściwości
var Human = {
type : “Human”,
head : 1,
legs : 2
};
var Megahuman = Object.create(Human);
Megahuman.head = 2;
Megahuman.head; // 2 Megahuman ma teraz 2 głowy
delete Megahuman.head; //usunięcie tej właściwości
Megahuman.head; // 1 Ma jedna głowę bo dziedziczy właściwość od Human

//--------------------Tworzenie Funkcji
var average = function (x, y) {
return (x+y)/2;
};

//--------------------Słowo this
var obj = {
	base : 13,
	average : function (x, y) {
		return (this.base+x+y)/3; // this wskazuje na objekt w momencie uruchomienia
		};
	};
	
//---------Argumenty funkcji, może ich być więcej niż zdefiniowano parametrów dla funkcji (są obcinane)
function myFuncName (x, y, z) {...}; // trzy parametry
myFuncName (1,2,3,4,5,6,7,8); // osiem argumentow z których wykorzysta pierwsze trzy (1,2,3)

//----------Zawsze zmienne deklaruj na początku funkcji!
var a = 10;
(function() {
console.log(a);
var a = 11; // tutaj zmienna została zadeklarowana na końcu
})();
//To spowoduje
var a = 10;
(function() {
var a;			//zmienna zadeklarowana, ale nie zainicjowana
console.log(a);	//wyświetlenie undefined
a = 11;
})();

//--------Zamykanie
var getAnswer = (function() {
var answer = 42;
return function inner(){  //tworzenie funkcji w funkcji która ma jeszcze dostęp do danych, chociaż funkcja została już "zakończona"
return answer;
};
}())
getAnswer(); // 42

/*//------------------REGULARNE WYRAŻENIA
\ 	odwraca specjalny symbol w zwykły i odwrotnie
. 	dowolny znak oprócz przejścia do noweo wiersza
* 	powtórzenie wcześniejszego znaku 0 i więcej razy
+ 	powtórzenie wcześniejszego znaku 1 i więcej razy
? 	powtórzenie wcześniejszego znaku 0 lub 1 raz
\d 	dowolna cyfra
\w	dowolny znak (litery, cyfry i _)	
[XYZ]	dowolny znak z podanych
[XYZ]+	jeden lub więcej znaków z podanych
$		koniec danych
^		początek danych
[^a-z]	NIE mała litera (znak ^ w środku oznacza NIE)
()		nawiasy CAPTURE to co ma byc na wyjściu	
|		lub
{m,n}	od m do n powtórzeń wcześniejszego znaku
WWW.regexone.com

Konstruktor regularnych wyrażeń w JavaScript:
new RegExp("\\w+c" , "igm");	//1-parametr to szablon odwrotne sleshe \ ekranujemy
								//2-parametr to flagi:
									//g-globalne wyszukiwanie
									//i-nie odróżniać wierszowe i poza wierszowe przeszukiwanie
									//m-wielowierszowe przeszukiwanie
ekwiwalent: var re = /\w+c/igm;
---------------------*/

//------Metody dla regularnych wyrażeń

// ---------Metoda: test 
//	Objekt: RegExp 		Zwraca: true lub false 
//	Opis: Czy jest zgodne z wyrażeniem 
var email =/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;		//regularne wyrażenie sprawdzające email.
email.test("hfhfhffj")			//rezultat będzie false, hfhfhffj nie jest emailem
email.test("dan@kola.co.uk")	//true

// 	--------Metoda: exec 
//	Objekt: RegExp 		Zwraca: tablicę 
//	Opis: Szuka zgodności w tablicy
var reg =/\d/g;	//regularne wyrażenie: cyfra i globalne wyrażenie
var input="kk5g3hh6hj@!#jdjd123kddk";
reg.exec(input);	// rezultatem będzie tablica, 
					//najpierw cyfra 5 -pierwsza zgodność
					//później index: 2 -gdzie się znajduje
					//na końcu string input: 'kk5g3hh6hj@!#jdjd123kddk'

//	--------Metoda: search 
//	objekt: String		Zwraca: index zgodności / -1 
//	Opis: Szuka zgodności w stringu
"ds6374828edejfew8383".search(/\d{2,8}/)	//szuka w stringu cyfr 2 lub więcej do ośmiu zwraca index, tutaj: 2
"ds6374828edejfew8383".match(/\d{2,8}/)		//szuka w stringu cyfr 2 lub więcej do ośmiu zwraca tablicę, tutaj: '6374828', index:2, input:'ds6374828edejfew8383'

// 	---------Metoda: replace 
//	Objekt: String 		Zwraca: String 
//	Opis: Szuka zgodności w stringu i zamienia
var str="Blink jet najlepsze, bo Blink ..., ja lubie blink, blink";
str.replace("blink","Banan"); 	// zamieni tylko ostatni trzeci blink
str.replace(/blink/ig, "Banan")	//	zamieni wszystkie i-wyłącza rejetr dużych i małych liter g-globalnie
"Daniel Radan".replace(/(\w+)\s(\w+)/,"$2, $1 bleble ble");	// zamieni miejscami Daniel Radan z przecinkiem i doda bleble ble.				
function x(m){return "+" + m.toUpperCase();}	//tworzymy funkcję która dodaje plusiki i zamienia małe litery na duże, h.toUpperCase() daje w rezultacie "H"
"HGGSddfkffGGGhUUUkskkdf".replace(/[a-z]/g, x);	//w drugim parametrze funkcji replace użyto funkcję x która zamieni małe litery na duże z plusikami

/*ZASADY PRZY PISANIU JAVASCRIPTU
1.	Nie wstawiaj klamrowych nawiasów funkcji {} w nowym wierszu
2.	Zawsze używaj === i !==
3.	Zawsze używaj var
4.	Nie używaj eval
*/


//------------------------------------------------------------------------------------
// 	JavaScript w praktyce dla Browsers
//	Udemy - A Functional Guide Understanding Functions In JavaScript
//------------------------------------------------------------------------------------

function addImage (times, myImg){
    
    var src = document.getElementById("Gallery"); 	// odniesienie do elementu <div id="Gallery">
    
    for ( i=0; i<times; i++){						// pętla times razy
        var img = document.createElement("img");	// Stworzenie elementu "img"
        img.src = myImg;							// przypisanie źródła obrazka
        src.appendChild(img);						// utworzenie węzła w DOM
    }
}
addImage(4,"tata.jpg");								//wywołanie kilka razy funkcji z różnymi argumentami
addImage(3,"tata2.jpg");
addImage(1,"tendal.jpg");
addImage(5,"tendal2.jpg");

//-----------------------------------------------------------------------------------

function addText (tekst){
    
	var znakP = document.createElement("p");			//tworzenie elementów <p>
	var pText = document.createTextNode(tekst);			//tworzenie tekstu
	znakP.appendChild(pText);							//dodanie węzłów do tekstu
    document.getElementById("Text").appendChild(znakP);	//dodanie stworzonych elementów do dokumentu strony
}
addText("jajaj");

function addH1 (tekst){
    
	var znakH1 = document.createElement("h1");			//tworzenie elementów <h1>
	var hText = document.createTextNode(tekst);			//tworzenie tekstu
	znakH1.appendChild(hText);							//dodanie węzłów do tekstu
    document.getElementById("Text").appendChild(znakH1);	//dodanie stworzonych elementów do dokumentu strony
}
addH1("jajaj");

//-------------------------------
var ptk = document.getElementById("ii");				//Rozpoznanie miejsca (po id="ii")w którym chcemy dodać element
var tekst = document.createTextNode("Moj nowy tekst.");	//Tworzenie tekstu
var h = document.createElement("h2");					//Tworzenie elementu h2
h.appendChild(tekst);									//Przypisanie h2 utworzongo wcześniej tekstu
function spr(){
    ptk.appendChild(h);									//Przypisanie całej gałezi do DOM
}
function rem1(){
    ptk.removeChild(h);									//Wykasowanie elementu h2 utworzonego wcześniej
}
function rep(){
    ptk.replaceChild(document.getElementById("ii");		//Zamiana elementów HTML
}
/* To jest w HTML-u:
	<div id="blk">
        <h3 id="ii">To jest naglowek</h3>
    </div>
    <button onclick="spr()" >Dodaj</button>
    <button onclick="rem1()" >Remove</button>
    <button onclick="rep()" >Zamiana</button>
*/

//-------------------------------
// Prosty sposób dodawania HTML-u
var pkt = document.getElementsByTagName("h3"); 			//Rozpoznanie miejsca wstawienia po tagu
console.log(pkt);										//Tablica
pkt[0].innerHTML = "Tratatata";							//Wstawienie 
var pkt2 = document.getElementsByClassName("social");	//Rozpoznanie miejsca wstawienia po class
pkt2[0].innerHTML = "Nowe dane";						//Dodanie tekstu
var pkt3 = document.getElementById("hh");				//Rozpoznanie po id, nie zwraca tablicy tylko element
pkt3.innerHTML = "Najnowszy wpis";						//Wstawienie tekstu

//--------------------------------
// Alert Prompt Confirm

alert("Zamknij to okno!");								//Wyskakujące okno
var imie = prompt("Podaj swoje imie: ");				//Okno do wpisania danych
console.log(imie);
var man = confirm("Czy jesteś mężczyzną? ");			//Okno wyboru "tak" lun "nie"
console.log(man);

//--------------------------------
// Zmiana od przycisku button

<button onclick="change()" >Clik me!</button>			//Wstaw na stronie button z funkcją
//-------												//Wstaw w pliku js funkcje zmieniającą HTML
function change(){
    var pkt3 = document.getElementById("hh");
    pkt3.innerHTML = "Najnowszy wpis";
}
//-----------------------------------------------------------------------------------
//  Kalkulator

var calc ={												//tworzenie obiektu calc
    sum: function (a,b){								//funkcja dodawania
    return total=a+b;
    },
    sub: function (a,b){								//odejmowanie
    return total=a-b;
    },   
    mul: function (a,b){								//mnożenie
    return total=a*b;
    },
    div: function (a,b){								//dzielenie
    return total=a/b;
    }
}
var a = parseInt (prompt("Wprowadź wartość a :"));		//wprowadzanie a
var b = parseInt (prompt("Wprowadź wartość b :"));		//wprowadzanie b
console.log("Add " + calc.sum(a,b));					//wyświetlenie w konsoli wyników
console.log("Sub " + calc.sub(a,b));
console.log("Mul " + calc.mul(a,b));
console.log("Div " + calc.div(a,b));

//------------------------------------------------------------------------------------
// Kalkulator na stronie

/* To jest w index.tml
	<form id="forms">
       x: <input type="tekst" name="first"></input>
       y: <input type="tekst" name="second"></input>
       result: <input type="tekst" name="result"></input>
    </form>
     </br>
     <button onclick="sum()" >Suma</button>
     <button onclick="odej()" >Odejowanie</button>
     <button onclick="mul()" >Mnożenie</button>
     <button onclick="div()" >Dzielenie</button>
*/
var result = document.getElementById('forms');								//Odnośnik do id="forms"
function sum(){																//suma
    result[2].value = Number(result[0].value) +  Number(result[1].value);
};
function odej(){															//odejmowanie
    result[2].value = Number(result[0].value) -  Number(result[1].value);
};
function mul(){																//mnożenie
    result[2].value = Number(result[0].value) *  Number(result[1].value);
};
function div(){																//dzielenie
     result[2].value = Number(result[0].value) / Number(result[1].value);
    console.log( result[2].value);
    if(result[2].value === 'Infinity'){										//w przypadku dzielenia przez 0
       alert("You can't divine by zero!!!");
        result[2].value = "ERROR!!!";
       }
};
// Konstruktor

var Dog = function (){
	var name, breed;
}
firstDog = new Dog;
firstDog.name = "Tommy";
firstDog.breed = "Dobername";
console.log(firstDog.name);			// daje Tommy
console.dir(firstDog);				// daje Dog

//--------------------------------------------------------------------------------------
// Prototype. Expanding functionality through Prototype
var Speak = function(){
    var saySomthing;
}
var Dog = function (){
	var name, breed;
}
Dog.prototype.Speak = Speak;		// niejako przechodzi na funkcję Dog (expanding)
firstDog = new Dog;
firstDog.name = "Tommy";
firstDog.breed = "Dobername";
firstDog.Speak = "Woff";

console.log(firstDog.name);
console.log(firstDog.Speak);
console.dir(firstDog);

//---------------------------------------------------------------------------------------
// Call oraz Apply (Call przekazuje argumenty z innego objektu, Apply przekazuje tablicę)
var speak = function(what){
    console.log(what);
    console.log(this.love); 
}
var saySomething = {normal:"miau", love:"brrbrr"}
//speak.call(saySomething, saySomething.normal); 	//call
speak.apply(saySomething, ['Kukuryku']);			//aply

//---------------------------------------------------------------------------------------
// Arguments.length oraz Arguments[i]
var plus = function(){
    var sum = 0;
    for (var i=arguments.length-1; i>=0; i--){	// zlicza ilość argumentów
        sum += arguments[i];					//sumuje wartości argumentów
    }
    return sum;			//teraz możesz sumować dowolną ilość argumentów np. plus(3,4,2,5,7,9,11)
}

//---------------------------------------------------------------------------------------
// Ćwiczenie: dodanie ikon i linków do mediów społecznościowych za pomoca javaScript

var socialMedia = {
    facebook : 'http://facebook.com/100art',
    twiter : 'http://twitter.com/100art',
    flickr : 'http://flickr.com/100art',
    youtube: 'http://youtube.com/100art'
};

var social = function(){
    var output ='<ul>',
    myList = document.querySelectorAll('.social');  //wybór wszystkich selektorów class=social w index.html
    for(var key in arguments[0]){
        output += '<li><a href="' + socialMedia[key] + '">' +
        '<img src="images/' + key + '.png" alt="icon for ' + key + '">' +   //icony w /images są typu .png
        '</a></li>';
    }
    output += '</ul>';
    for(var i = myList.length-1; i>=0; i--){    //pętla przelatująca po wszystkich miejscach z class=social
        myList[i].innerHTML = output;           //i dodająca wygenerowany kod HTML
    };
}(socialMedia);

 //------------------------------------------------------------------------------------
 //-- Anonimowe zamknięcia
 (function(){
    console.log("foo");
})();		//funkcja bez nazwy, która sama siebie zapuszcza

//--------------------------------------------------------------------------------------
// Scope - zakres widzialności 
// Pamiętaj żeby zawsze najpierw deklarować zmienne i funkcje

//--------------------------------------------------------------------------------------
// Przekazywanie argumentów
var ray =(function(){
    var DEFAULTS = {
        say : 'Hello'
    }
    return{
        speak : function(){
            var myArguments = arguments[0] || ''; //argumenty można odfiltrować po indeksie
            var statement = myArguments.say || DEFAULTS.say;
            console.log(statement);
        }
    };
})();           // ray.speak({ say : 'Waawh' }) - najlepiej przekazywać przez arguments

//----------------------------------------------------------------------------------------
// Funkcje warunkowe if, switch, while, do while, for, for of, for in

//-----------IF
var a = 23;
if (a == 23){
	document.write("Wartość a = 23");
}else{
	document.write("Wartość a nie równa 23");
}
//------------------------------------------
//------------switch
var i = 25;
switch(i){
	case 23:
		document.write("i=23");
		break;
	case 24:
		document.write("i=24");
		break;
	default:
		document.write("Nie równa 23 oraz nie równa 24");
}
//-----------------------------------------
//-----------while
var a = 100;
var b = 1000;
while (a<b){
	a++;
	document.write(a);
	document.write("</br>");
}

//-----------------------------------------
//----------do while
var a = 100;
var b = 1000;
do{
	a++;
	document.write(a);
	document.write("</br>");
}while (a<b);

//-----------------------------------------
//----------for
var arr = [23, 45, 63, 45];
for (var i=0;i<arr.length; i++){
	document.write(arr[i] + " ");
}

//------------------------------------------
//----------break
var a = 10;
var b = 100;
for (a; a<b; a++){
	document.write(a + "</br>");
	if (a==40){					//przerwanie wykonywania operacji gdy a==40
		break;
	};
};
//-------------------------------------------
//----------continue
var a = 0;
var b = 100;
while ( a<b ){
	document.write(a + "</br>");
    a++;
	if (a%3 === 0){				//gdy reszta z dzielenia przez 3 jest równa 0
		a++;					//dodaje bez wyświetlenia a
		continue;				//kontynuacja pętli
	};
};
//--------------------------------------------
//------------for of oraz in
var arr = [ 23, 54, 98, 50, 198];
for (var a of arr){
	document.write(a + " ");	//wypisze kolejne liczby 23 54 98...
}

var arr = [ 23, 54, 98, 50, 198];
for (var a in arr){
	document.write(a + " ");	//wypisze indexy 0 1 2 3 4
}

var arr = [ 23, 54, 98, 50, 198];
for (var a in arr){
	document.write( arr[a] + " ");	//wypisze wartości 
}

//-------------------------------------------------
//-----------funkcja sortująca
function sorting(arr){
    for (var a = 0; a < arr.length; a++){		//pobranie pierwszej danej
        for(var b=a+1; b < arr.length; b++){	//pobranie następnej danej z tablicy arr
            if(arr[a]>arr[b]){					// porównanie
                var save = arr[a];				//zamiana miejscami
                arr[a] = arr[b];
                arr[b] = save;
            };
        };
    };
    document.write(arr);
};
var k = [ 23, 54, 98, 50, 198, 11, 12, 43, 56, 1, 5, 4];
sorting(k);

//---------------------------------------------------
//--------Funkcje matematyczne
Math.PI				//zwraca liczbę 3.14...
Math.round()		//zaokrągla
Math.sqrt()			//pierwiastek
Math.max()			//wybranie największej wartości
Math.random()		//losowa wartość

var t = new Date();
document.write(t.getFullYear); 	//wypisze aktualny rok np.2017
document.write(t.getDate()); 	//wypisze aktualny dzień miesiąca np. 25

