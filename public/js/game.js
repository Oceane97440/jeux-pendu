 //compteur perdu
 var compteur_erreur = 0;
 var compteur_sucess = 0;


 //fonction qui remplace la lettre dans le mot
 function putLetter(letter, position, sucess) {

     // console.log(position)
     // console.log(letter)

     var tab_id_span = $(".underscore");

     var remplace = tab_id_span[position].innerHTML = letter;
     //console.log(remplace)

     //console.log(sucess.includes(remplace));

     compteur_sucess++
     document.getElementById("sucess").innerHTML = "Compteur nombres de letrre trouvés = " + compteur_sucess + "/" +sucess.length;

     if (compteur_sucess == sucess.length) {

         alert("Vous avez gagné")
         document.location.reload();

     }

 }
 //function crée des _ selon la longeur du mot
 function met_underscore(nombre) {
     var span = Object();
     for (var i = 0; i < nombre; i++) {

         span = document.createElement("SPAN");

         span.id = i;

         span.setAttribute("class", "underscore");


         span.innerHTML = " _ ";

         document.getElementById("mots").appendChild(span);


     }
 }

 $.get("http://localhost/jeux-pendu/dico.json", function (data) {


     //recup la data du fichier json
     var mots = data.mots

     //Mot aléatoire
     var mot = mots[Math.floor(Math.random() * mots.length)];

     //si le mot à un longeur excute la function
     if (mot.length > 0) {
         met_underscore(mot.length);
     }



     //Ecoute event clic
     const button = document.querySelectorAll('button.btn.btn-default');

     button.forEach(element => {

         element.addEventListener('click', function () {



             const mon_mot = mot;

             //event click choix de la lettre 
             var lettre = element.innerHTML

             //décompose le mot en lettre renvoie sous forme de tab ["M","O","T"]
             const split_mot = mon_mot.split('');


             //boucle sur longeur de la table
             for (var i = 0; i < split_mot.length; i++) {


                 //si la lettre click est = à un des lettre du tableu
                 if (split_mot[i] == lettre) {

                     //console.log(i)

                     putLetter(lettre, i, split_mot);


                 } else {

                     //a ne pas faire a la maison 
                     if (i + 1 == mot.length) {


                         //détermine si la valeur est dans le tableau
                         var perdu = split_mot.includes(lettre);

                         //si la lettre n'est pas dans le mot le compteur demarre
                         if (perdu == false) {

                             compteur_erreur++
                             document.getElementById("compteur").innerHTML = "Compteur perdu = " + compteur_erreur;


                             //console.log("pendu : " + compteur_erreur);
                             switch (compteur_erreur) {
                                 case 1:
                                     document.getElementById("pendu").style.backgroundPosition = "-200px 0px";
                                     break;
                                 case 2:
                                     document.getElementById("pendu").style.backgroundPosition = "-750px 0px";
                                     break;
                                 case 3:
                                     document.getElementById("pendu").style.backgroundPosition = "-1000px 0px";
                                     break;
                                 case 4:
                                     document.getElementById("pendu").style.backgroundPosition = "-1250px 0px";
                                     break;
                                 case 5:
                                     document.getElementById("pendu").style.backgroundPosition = "-1500px  0px";
                                     break;
                                 case 6:
                                     document.getElementById("pendu").style.backgroundPosition = "-1750px 0px";
                                     break;
                                 case 7:
                                     document.getElementById("pendu").style.backgroundPosition = "-2000px 0px";
                                     break;
                                 case 8:
                                     document.getElementById("pendu").style.backgroundPosition = "-2250px 0px";
                                     break;
                                 case 9:
                                     alert("Vous avez perdu ! Le mot secret était : " + mot);
                                     document.location.reload();


                                     break;
                                 default:
                                     break;
                             }

                         }
                     }

                 }



             }

         });

     })



 })