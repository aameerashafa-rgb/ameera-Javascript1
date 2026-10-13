//JavaScript - -> Programming Language 
/*
Programming Language 
1. input & output 
2. variable and data type
3. condition (if,else) 
4. looping (pengulangan)
5. function
/*

//Output
//

-//2. alert()
-alert("Welcome to My Website");

-//3. using document,writed()

-//4. using innerHTML -> buat mengganti teks
-document.getElementByID("id_name").innerHTML="
-document.getElementByID("first").innerHTML="my name is rara";
-//let
-let name = "rara"
-name ="ameera shafa arwandari" --> namenya ada garis tebgah hitam
-console.log(name) --> namenya ada garis tengah hitam
-let a = 4;
-let b = 3;
-let c = a+b
-let d = a*b
-console.log(a+b);
-console.log(c);
-console.log(c+d);
-let addreas= "Solo";
-console.log("My name is " + rara " Im from " + (addreas)"); --> namenya ada garis tengah hitam 

-let oke = 8;
-let OKE = 7;
-console.log(oke);
-console.log(OKE);

-const school = "sma abbs surakarta"

-console.log(school);

-/*Operator Aritmatika 
-penjumlahan (+)
-pengurangan (-)
-perkalian (*)
-pembagian (/)
-perpangkatan (**)
-modulo (%)
-*/

-let number1 = 100%;
-let number2 = 250%;
-console.log(number1+number2);
-console.log(number1+number2);
-console.log(number1+number2);
-console.log(number1+number2);
-console.log(number1+Numbers);
-cosule.log (number1 ** 2);

-//calculator 


//variable - -> to store data
-> kalo mau nulis variable selalu diawali dg "//let"
-> nama variabel cuman boleh diawali huruf, _ dan $. selainnya ga bisa
-> variabel bisa diawali dg "let, var dan const"
     -let bisa diubah
//variable = let, var, const
let angka = 5;
angka = 6; --> ga bisa dikasih/tidak let
console.log(angka);
     -var 
var angka1 = 5;
angka1 = 6; --> bisa dikasih/tidak var
     -const
const angka2 = 5; --> ga bisa diubah angkanya
console.log(angka2);

/*Data Type
1. STring = character (huruf, angka dll) dg syarat pake ""/''
   contoh: let data1 = "SMA ABBS Surakarta"; //string
           let data2 = "100"; //string
2. number (integer, float) 
   -integer = bilangan bulat
   -float = bilangan pecahan
   contoh: let data3 = 50; //integer
           let data4 = 25.25; //float
3. boolean = true, false 
   contoh: let data5 = false; //boolean
   
/*Comparison Operator --> the output of comparison operator are true or false
- equal (==) --> sama dengan
- not equal (!=) --> tidak sama dengan
- greater than (>) --> lebih dari
- greater than or equal (>=) --> lebih dari sama dengan
- less than (<) --> kurang dari
- less than or equal (<=) --> kurang dari sama dengan 
*/
//examples

let x = 5; 
console.log(x == 5); //true
console.log(x != 5); //false
console.log(x > 10); //false
console.log(x >= 10); //false
console.log(x < 10); //true
console.log(x <= 10); //true

/*
Logical Operators
- and (&&) jika semua nilainya true maka hasilnya true (1 true, 0 false)
  contoh: - and = variable A 1 variable B 1 hasilnya 1 true
                  variable A 1 variable B 0 hasilnya 0 false
                  variable A 0 variable B 1 hasilnya 0 false
                  variable A 0 variable B 0 hasilnya 0 false
- or (||) paling tidak ada 1 kondisi yang bernilai tru
  contoh: - or = variable A 1 variable B 1 hasilnya 1 true
                 variable A 1 variable B 0 hasilnya 1 true
                 variable A 0 variable B 1 hasilnya 1 true
                 variable A 0 variable B 0 hasilnya 0 false
- not (!) --> kebalikan dari kondisinya
  contoh: variable
/*

//

/*1. if (1 condition) 
       if (condition){
             actions;
       }
*/

contoh: kalo cuman punya 1 kondisi 
let time = 6; 
if (time <= 6){
    console.log("good morning");
}

/*1. if (2 condition) 
       if (condition 1){
             actions 1;
       }
       else{
          action 2;
       }
*/

let time1 = 6
if (time <= 6){
     console.log("good morning");
}
else{
       console.log("good bye");
}

kalo ga muncul berarti ga sesuai
             
pr besok dikerjain
/*kondisi
1. jika hari ini hujan, maka membawa payung 
2. jika hari ini tidak hujan, maka tidak membawa payung
*/
let cuaca = "hujan";
if (cuaca == "hujan"){
     console.log("bawa payung");
}
else{
       console.log("bawa payung");
}

//jika nilai lebih dari 75, maka lulus
//jika nilai kurang dari 75, maka tidak lulus
let nilai = 90;
console.log ("nilai = ", nilai");
if (nilai > 75){
    console.log("lulus");
}
else{
    console.log("tidak lulus");
}

//jika bilangannya itu genap, maka genap
//jika bilangannya ganjil, maka ganjil
let bilangan = 80;
console.log (bilangan%2 == 0){
    console.log(bilangan + "adalah bilangan genap");
}
else{
    console.log(bilangan + "adalah bilangan ganjil");
}

/*3. more than 2 conditions
     if(condition 1){
        action 2;
     }
     else{
          action 3;
     }
*/

//calculator bmi
let TB = 170;
let BB = 60;
let BMI = (BB/(TB*TB))*10000;
console.log("tinggi badan = ", TB, "cm");
console.log("berat badan = ", BB, "kg");
console.log("BMI = ", BMI);

//jika bmi < 18,5, maka under weight --> pake if
//jika bmi 18,5 - 24,9, maka normal weight --> pake else, if
//jika bmi 25,0 - 29,9, maka over weight --> pake else, if
//jika bmi >= 30,0, maka obese --> pake else

if(BMI < 18,5){
    console.log("under weight");
}
else if (BMI >= 18,5 && BMI <= 24,9){
    console.log("normal weight");
}
else if (BMI >= 24,9  && BMI <= 29,9){
    console.log("over weight");
}
else{
    console.log("obese");
}