
var foutuMachin;
var tripoteN;
var tripoteNMoins1;
var quelquUnSait;
var tenterDiable;
var reparation;
var demission;
var resumes=[
    "<p>En résumé : cet utilitaire vous conseille de ne plus toucher à ce matériel.</p>",
    "En résumé : cet utilitaire vous conseille de 1.",
    "En résumé : cet utilitaire vous conseille de 2."
];

// document.write écrase le document HTML s'il est totalement chargé !!!


// question 1

function questionFonctionne(){
foutuMachin = prompt("Est-ce que ce foutu machin fonctionne ?","O pour oui, N pour non");
result=foutuMachin;
  if (foutuMachin =="O"){
    document.write(resumes[0]);
    alert("Surtout n'y touchez plus ! ");
    alert("Fin de ce programme. Bonne journée, à bientôt.");
    terminerProgramme();
  }

  else if (foutuMachin == "N") {questionTripoteN();
  }
  
  else {alert("merci d'entrer votre réponse sous la forme O ou N");
       questionFonctionne();
  }

}


// question 2
function questionTripoteN() {
tripoteN = prompt("L'avez-vous tripoté ?","O pour oui, N pour non" );
result=tripoteN;
  if (tripoteN =="O"){
      alert("Pauvre idiot ! ");
      questionQuelquUnSait()
  ;}  
  else if (tripoteN == "N") {questionTripoteNMoins1()
  ;}
  
  else {alert("merci d'entrer votre réponse sous la forme O ou N");}
}

// question 3
function questionQuelquUnSait (){
    quelquUnSait = prompt("Est-ce que quelqu'un sait que vous y avez touché ?","O pour oui, N pour non");
    result=quelquUnSait;
    if (quelquUnSait =="O"){alert("Vous êtes encore plus idiot que je ne le pensais ! ");
        questionReparation();
    }  
else if (quelquUnSait == "N") {alert("Surtout fermez-la ! ");
alert("Fin de ce programme. Bonne journée, à bientôt.")}

else {alert("merci d'entrer votre réponse sous la forme O ou N");}
}

// question 4
function questionTripoteNMoins1(){
    tripoteNMoins1 = prompt("Est-ce que l'un de vos subordonnés l'a tripoté ?","O pour oui, N pour non");
    result=tripoteNMoins1;
    if (tripoteNMoins1 =="O"){alert("Faites plonger ce connard ! ");
    questionReparation();
    }  
else if (tripoteNMoins1 == "N") {questionTenterDiable()}

else {alert("merci d'entrer votre réponse sous la forme O ou N");}

}


// question 5 
function questionTenterDiable (){
    tenterDiable = prompt("Voulez-vous tenter le diable ?","O pour oui, N pour non");
    result=tenterDiable;

        if (tenterDiable =="O"){questionReparation();}  
        else if (tenterDiable == "N") {alert("Foutez ce machin à la poubelle ! ")
            alert("Fin de ce programme. Bonne journée, à bientôt.")}

        else {alert("merci d'entrer votre réponse sous la forme O ou N");}   
  
     
;}

// question 6

function questionReparation (){
    reparation = prompt("Est-ce que ça peut être réparé avant que le boss s'en aperçoive ?","O pour oui, N pour non");
    result=reparation;
        if (reparation =="O"){alert("Vous avez de la chance ! Faites vite ! ");
            alert("Fin de ce programme. Bonne journée, à bientôt.")
    ;}  
else if (reparation == "N") {alert("Vous êtes vraiment dans la merde ! ")
    questionDemission();}

else {alert("merci d'entrer votre réponse sous la forme O ou N");}   
  
;}


// question 7

function questionDemission (){
demission = prompt("Voulez-vous démissionner ? ","O pour oui, N pour non");
result = demission;
if (demission == "O"){alert ("Démissionez maintenant !")
alert("Fin de ce programme. Bonne journée, à bientôt.")
;}
else if (demission == "N") {alert ("Vous êtes viré !")
alert("Fin de ce programme. Bonne journée, à bientôt.")
;}   

else {alert("merci d'entrer votre réponse sous la forme O ou N");} 
}



// terminer le programme

function terminerProgramme(){
    var satisfaction=prompt("Etes-vous satisfait de cette réponse ?","O pour oui, N pour non");
    result=satisfaction;
    if (satisfaction=="O"){alert("Merci, bonne journée ")}
    else if (satisfaction == "N") {alert ("Vous cherchez vraiment les problèmes...");}   
    else {alert("merci d'entrer votre réponse sous la forme O ou N");
    alert("Pas étonnant que les machins tombent en panne si vous ne savez pas respecter cette consigne.");
    alert("Vous êtes vraiment un boulet")
    alert("Essayez encore !")
    terminerProgramme()
    ;}
}
