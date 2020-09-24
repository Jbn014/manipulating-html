document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement('button');
    let btnTxt = document.createTextNode('Alert');

    

    button.appendChild(btnTxt);
    document.body.appendChild(button);

    let btn = document.getElementById('button1')
    let txtbox = document.getElementById('textBox')
    let divColor = document.getElementById('colorChange')
    let pColor = document.getElementById('colorP')


    var colors = ["blue", "red", "orange", "yellow", "green", "purple"
                    ,"pink"];
    btn.onclick = function() {
        alert(txtbox.innerHTML)
    }

    divColor.addEventListener("mouseover", function(){
        divColor.style.background = "blue"

    })

    divColor.addEventListener("mouseleave", function(){
        divColor.style.background = ""
    })    
        
    pColor.addEventListener("click", function(){
        let randnumber = Math.floor((Math.random()*colors.length));

        pColor.style.background = colors[randnumber]

    })

    let button2 = document.createElement('button')
    let btnText2 = document.createTextNode('Reveal name!')
    let divCont = document.getElementById('Cont')

    


    button2.appendChild(btnText2);
    document.body.appendChild(divCont);
    divCont.appendChild(button2);

    

    button2.addEventListener('click', function(){
        let nameSpan = document.createElement('span')
        let nameSpantxt = document.createTextNode('Jared Nelson')

        nameSpan.appendChild(nameSpantxt)
        document.body.appendChild(nameSpan)
        
    })

    var friends = ["Garrett", "Addi", "Rae", "Jeffrey", "Ben", "Cam", "Luke", "Brooke", "Justin", "Angela"]

    let buttonFriend = document.getElementById("ulButton")
    let list = document.getElementById('friends')
    let counter = 0
    
    buttonFriend.addEventListener('click', function(){
        counter++
        if (counter <= friends.length){

        let friendLi = document.createElement('li');
        let liText = document.createTextNode(friends[counter-1])
        friendLi.appendChild(liText)
        list.appendChild(friendLi)}

    })

})
