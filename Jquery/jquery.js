$( document ).ready( function() {
    console.log ("hi")
    let $alrtBtn = $('#alrtBtn')
    $($alrtBtn).click(function(){
        alert('Good Morning' , {
    })
})
    let $txtarea = $("#textBox")
    let $btn2 = $('#button1')
    $btn2.click(function(){
        alert($txtarea.innerhtml)
    })
    let $clrChange = $("#colorChange")
    $($clrChange).mouseover(function(){
        $clrChange.css("background-color", "blue")
    })
    $($clrChange).mouseleave(function(){
        $clrChange.css("background-color", "")
    })

})
    
    var colors = ["blue", "red", "orange", "yellow", "green", "purple"
    ,"pink"];

    let $colorP = $("#colorP")
    $colorP.dblclick(function(){
        let randnumber = Math.floor(Math.random()*colors.length);
        $colorP.css("background-color", colors[randnumber])
    })
    let spnBtn = $("#spanButton")
    let spnTxt = $("Jared Nelson")
    spnBtn.click(function(){
       let spnVar = ("<span>Jared Nelson</span>")
        $("body").append(spnVar)
    })
    let btnFriend = $("#ulButton")
    let list = $("#friends")
    var friends = ["Garrett", "Addi", "Rae", "Jeffrey", "Ben", "Cam", "Luke", "Brooke", "Justin", "Angela"]
    let counter = 0


    btnFriend.click(function(){
        counter++
        if (counter <= friends.length){
            let friendVar = ("<li>", friends[counter-1], "</li>")
        $("#friendsList").append(friendVar)}

    })
        