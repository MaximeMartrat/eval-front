//NAV
    //appel de la fonction d'affichage pour tous les btn
    eventit(hidden_nav, navbar);
    eventit(modul1, mod1);
    eventit(modul2, mod2);
    eventit(modul3, mod3);
    eventit(modul4, mod4);
    eventit(modul5, mod5);
    //fonction d'ecouteur et d'affichage
    function eventit(event, target){
        //ecouteurs du btn pour changer le display des modules
        event.addEventListener('click', function(){
            if (target.style.display == "grid"){
                target.style.display = "none"
            } else {
                target.style.display = "grid"
            }
        })
    };
    
    
//MODULE1
    //initialisation tableau vide
    let links = [];
    //boucle pour envoyer les liens dans le tableau
    for (let i = 1; i <= 9; i++){
        links.push(document.getElementById("l" + i));
    }
    //boucle pour appliquer la fonction d'écoute à tous les liens
    for (let i = 0; i < 9; i++){
        links[i].addEventListener("mouseover", mouseOver);
        links[i].addEventListener("mouseout", mouseOut);
    }
    //fonction d'apparition et de changement d'image au survol
    function mouseOver() {
        //apparition de l'image
        avatar.style.transition = "all 0.5s ease-in-out";
        avatar.style.visibility = "visible";
        //vérification du link survolé et changement de src de l'image
        switch(this.id) {
            case "l1":
                avatar.src = "/assets_img/lapin.png"
                break;
            case "l2":
                avatar.src= "/assets_img/aigle.png"
                break;
            case "l3":
                avatar.src = "/assets_img/chat.webp"
                break;
            case "l4":
                avatar.src = "/assets_img/chien.png"
                break;
            case "l5":
                avatar.src = "/assets_img/cochon.png"
                break;
            case "l6":
                avatar.src = "/assets_img/demon.png"
                break;
            case "l7":
                avatar.src = "/assets_img/king.png"
                break;
            case "l8":
                avatar.src = "/assets_img/vache.png"
                break;
            default:
                avatar.src = "/assets_img/zombie.png"
        }
    };
    //fonction de disparition après survol 
    function mouseOut() {
        avatar.style.visibility = "hidden";
    };


//MODULE2  
    //listener de l'évènement click sur le bouton
    add.addEventListener('click', function(){
        //recupération des valeurs du formulaire
        let nom = document.getElementById("nom").value;
        let prenom = document.getElementById("prenom").value;
        //vérification que les champs ne sont pas vide
        if(nom == "" || prenom == ""){
            alert("Veuillez remplir tous les champs")
        } else {
            //creation de l'objet personnage dans le tableau
            perso.innerHTML += "<tr><td>" + nom + "</td><td>" + prenom + "</td></tr>"                
        }
    });


//MODULE3
    //appel de la fonction stylish
    stylish();
    //declaration de la fonction stylish
    function stylish(){
        //recupération des données
        let menu2 = document.getElementById("menu").value;
            //verification de l'opt selectionnée et changement de style en fct
            if(menu2 == "style2"){
                lorem.style.color = "rgb(95, 95, 250)";
                lorem.style.fontFamily = "Courier New";
                lorem.style.fontSize = "15px";
            }
            else if(menu2 == "style3"){
                lorem.style.color = "#DB1342";
                lorem.style.fontSize = "12px";
                lorem.style.fontFamily = "Georgia";
            }
            else {
                lorem.style.color = "black";
                lorem.style.fontFamily = "arial";
                lorem.style.fontSize = "15px";
            }
        }


//MODULE4
    //je récupère mes li et mes boutons que je place dans des variables
    let randomise = document.getElementsByClassName("valeur");
    //je crée un tableau avec pour éléments les valeurs des li
    let tabli = ["Value1", "Value2", "Value3", "Value4"];
    //je créer un écouteur d'évènement au clic sur les boutons up et down pour lancer les fonctions haut et bas
    up.addEventListener('click', haut);
    down.addEventListener('click', bas);
    //fonction pour le up
    function haut(){
        //je retire la première valeur du tableau avec la methode shift
        let firstli = tabli.shift();
        //j'ajoute la première valeur à la fin du tableau avec la methode push
        tabli.push(firstli);
        //je crée une boucle for pour mettre à jour les valeurs de chaque li
        for (let i = 0; i < randomise.length; i++){
            randomise[i].innerHTML = tabli[i];               
        }
    };
    //fonction pour le down
    function bas(){
        //je retire la dernière valeur du tableau avec la methode pop
        let lastli = tabli.pop();
        //j'ajoute la dernière valeur au debut du tableau avec la methode unshift
        tabli.unshift(lastli);
        //je crée une boucle for pour mettre à jour les valeurs de chaque li
        for (let i = 0 ; i < randomise.length; i++){
            randomise[i].innerHTML = tabli[i];
        }
    };


//MODULE5
    //fonction d'affichage des checks
    function display(){
        //recupération des inputs de la checkbox
        let checkboxes = document.querySelectorAll("input[type='checkbox']");
        //initialisation d'un tableau vide
        let selected = [];
        //boucle pour chaque checkbox
        for (let i = 0; i < checkboxes.length; i++){
            if (checkboxes[i].checked) {
            //si la checkbox est sélectionné on l'ajoute au tableau selected
            selected.push(checkboxes[i].value);
            }
        }
        // Vérification s'il y a au moins une checkbox sélectionnée
        if (selected.length === 0) {
            alert("Au moins une checkbox doit être sélectionnée");
            return;
        }
        //récupération de la valeurs de la radio sélectionnée et de la cible
        let radioValue = document.querySelector('input[name="display"]:checked').value;
        //réinitialisation de la cible à chaque click
        result.innerHTML = "";
        //vérification de la valeur de la radio sélectionnée
        if (radioValue === "div"){
            result.innerHTML = "<div>" + selected.join(", ") + "</div>";
        } else if (radioValue === "select"){
            let options = "";
            for (let j = 0; j < selected.length; j++){
                options += "<option value='" + selected[j] + "'>" + selected[j] + "</option>";
            }
            result.innerHTML = "<select>" + options + "</select>";
        }
    }
        
             