//NAV
    //recupération des données du DOM
    let menu = document.getElementById("displaynav");
    let navi = document.getElementById("navbar");
    let module1 = document.getElementById("module1");
    let module2 = document.getElementById("module2");
    let module3 = document.getElementById("module3");
    let module4 = document.getElementById("module4");
    let module5 = document.getElementById("module5");  
    let mod1 = document.getElementById("mod1");
    let mod2 = document.getElementById("mod2");
    let mod3 = document.getElementById("mod3");
    let mod4 = document.getElementById("mod4");
    let mod5 = document.getElementById("mod5");
    //appel de la fonction pour faire apparaitre/disparaitre element
    eventit(menu, navi);
    eventit(module1, mod1);
    eventit(module2, mod2);
    eventit(module3, mod3);
    eventit(module4, mod4);
    eventit(module5, mod5);
    //fonction d'appel de la fct displayit
    function eventit(event, target){
        event.addEventListener('click', function(){
            displayit(target)
        })
    };
    //fonction pour faire apparaitre et disparaitre un élément
    function displayit(e){
        if (e.style.display == "grid"){
            e.style.display = "none"
        } else {
            e.style.display = "grid"
        }
    };
    
    
//MODULE1
    //recupération du dom
    let link1 = document.getElementById("l1");
    let link2 = document.getElementById("l2");
    let link3 = document.getElementById("l3");
    let link4 = document.getElementById("l4");
    let link5 = document.getElementById("l5");
    let link6 = document.getElementById("l6");
    let link7 = document.getElementById("l7");
    let link8 = document.getElementById("l8");
    let link9 = document.getElementById("l9");
    let images = document.getElementById("avatar");
    //appel de la fonction mouseIt
    mouseIt(link1);
    mouseIt(link2);
    mouseIt(link3);
    mouseIt(link4);
    mouseIt(link5);
    mouseIt(link6);
    mouseIt(link7);
    mouseIt(link8);
    mouseIt(link9);
    //fonction d'ecoute d'évènements (mouseover, mouseout)
    function mouseIt(e){
        e.addEventListener("mouseover", mouseOver);
        e.addEventListener("mouseout", mouseOut);
    }
    //fonction d'apparition et de changement d'image au survol
    function mouseOver() {
        //apparition de l'image
        images.style.transition = "all 0.5s ease-in-out";
        images.style.visibility = "visible";
        //vérification du link survolé et changement de src de l'image
        switch(this) {
            case link1:
                images.src = "/assets_img/lapin.png"
                break;
            case link2:
                images.src= "/assets_img/aigle.png"
                break;
            case link3:
                images.src = "/assets_img/chat.webp"
                break;
            case link4:
                images.src = "/assets_img/chien.png"
                break;
            case link5:
                images.src = "/assets_img/cochon.png"
                break;
            case link6:
                images.src = "/assets_img/demon.png"
                break;
            case link7:
                images.src = "/assets_img/king.png"
                break;
            case link8:
                images.src = "/assets_img/vache.png"
                break;
            default:
                images.src = "/assets_img/zombie.png"
        }
    };
    //fonction de disparition après survol 
    function mouseOut() {
        images.style.visibility = "hidden";
    };


//MODULE2
    //recuperation des données
    let valid = document.getElementById("add");
    let perso = document.getElementById("perso")  
    //listener de l'évènement click sur le bouton
    valid.addEventListener('click', function(){
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
        let text = document.getElementById("lorem");
            //verification de l'opt selectionnée et changement de style en fct
            if(menu2 == "style2"){
                text.style.color = "rgb(95, 95, 250)";
                text.style.fontFamily = "Courier New";
                text.style.fontSize = "15px";
            }
            else if(menu2 == "style3"){
                text.style.color = "#DB1342";
                text.style.fontSize = "20px";
                text.style.fontFamily = "Georgia";
            }
            else {
                text.style.color = "black";
                text.style.fontFamily = "arial";
                text.style.fontSize = "15px";
            }
        }


//MODULE4
    //je récupère mes li et mes boutons que je place dans des variables
    let randomise = document.getElementsByClassName("valeur");
    let toUp = document.getElementById("up");
    let toDown = document.getElementById("down");
    //je crée un tableau avec pour éléments les valeurs des li
    let tabli = ["Value1", "Value2", "Value3", "Value4"];
    //je créer un écouteur d'évènement au clic sur les boutons up et down pour lancer les fonctions haut et bas
    toUp.addEventListener('click', haut);
    toDown.addEventListener('click', bas);
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
        let result = document.getElementById("result");
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
        
             