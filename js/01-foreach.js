const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach((dizi,product,index)=>dizi[index]=product+" 11");
console.log(animals);

for(var i =0;i<animals.length;i++){
  console.log("nerdeydik abi :"+animals[i])
}

let boşdizi=[]
let sayıdizisi=[3,4,5];
sayıdizisi.forEach(function(sayı){
   boşdizi.push(sayı*3)
});
console.log(boşdizi)

animals.forEach((value,index,dizi)=>{
    console.log("value:"+ value);
    console.log("index :"+index);
    console.log("dizi :"+dizi);
})


let products =["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"];
// let newproducts =products.filter(eleman =>eleman.length>5)
let newproducts= products.filter(eleman=>eleman.length>5)
console.log(newproducts)


const users = [
	{fullName: "İsmail Etrez", isActive: false},
	{fullName: "Akif Tepeli", isActive: true},
    {fullName: "Hayriye koç", isActive: true},
    {fullName: "Musa Özkan", isActive: false},
]

const newusrers =users.filter(eleman=> eleman=eleman.isActive==true);
console.log(newusrers)

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];
  const yeniperson =person.filter(eleman=>eleman.age>30);
  console.log(yeniperson);
  let newperson =person.filter(function(elemna){
     return elemna.age>30

  })
  console.log(newperson)

  const pro = ["laptop","phone","spekear","desktop","pc"]
  pro.forEach((producd,index,array)=>(array[index]+index))

console.log(pro)

const firstname = ["Mikroofon","Kablo","Teelefon","Bilgiisayar","Mouse","llavye","ükran"]
let kane = firstname.filter(function(string){
  return string.length>5
})
console.log(kane)
let aa =firstname.filter(son=>son.length>5)
console.log(aa)

let ali =["AHMET","BÜNYAMİN","İSMET","ZAHİR"]
let ERİKSEN= ali.map(userr=>userr.toLowerCase())
console.log(ERİKSEN)

let muhammetali = ["POWER","SKİLS","DEAD","BUTTON"]
let newmami = muhammetali.map(function(parammetree){
  return parammetree.toLowerCase();
})
console.log(newmami)
//  DOREACH İLE MAP IN FARKI FOREACH TE YENİ BİR ARRAY OLUŞMAZ O YÜZDEN TENİ BİR ARRAYE  ATAYAMAYIZ 

const sayilar = [2, 3, 4, 5, 10]
let ikikatı =sayilar.map(değer => {
  return değer*2
});
console.log(ikikatı)





