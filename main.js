let var1 = "x";
let btn_active = 0;
let player = document.getElementById("player");
let mainarea=document.getElementById("mainarea");
let btn1 = document.getElementById("btn");
let content=document.getElementById("content");
function btn() {
    
      content.style.display="grid";    
      player.style.visibility="hidden";
    
   btn1.innerHTML = "player_" + var1;
   
    
    btn_active++;
}


                         // function for declearing all the boxes 
function fun1(id_code) {
    let boxelement = document.getElementById("b" + id_code);
    
    if (boxelement.innerHTML == "" && btn_active) {
        boxelement.innerHTML = var1;
        winner();
        checksign();
        player.style.fontSize = "30px";
        
        btn1.innerHTML = "player_" + var1;
    }
}
function checksign() {
    if (var1 == "x") var1 = "o";
    else
        var1 = "x";
}

function getbox(no) {
    return document.getElementById("b" + no).innerHTML;
}
function checkmove(a, b, c, m) {
    if (getbox(a) == m && getbox(b) == m && getbox(c) == m)
        return true;
    else
        return false;
}


//   ||||||| function for declear the winner  ||||||||||
function winner() {
    if (checkmove(1, 2, 3, var1) || checkmove(4, 5, 6, var1) || checkmove(7, 8, 9, var1) || checkmove(1, 4, 7, var1) || checkmove(2, 5, 8, var1) || checkmove(3, 6, 9, var1) || checkmove(3, 5, 7, var1) || checkmove(1, 5, 9, var1)) {
        player.innerHTML = var1 + ` is the winner`;
        btn1.innerHTML = "play again";
        btn_active = 0;
        
      content.style.display="none";
  player.style.visibility="visible";
      
        for (let i = 1; i <= 9; i++)
            document.getElementById("b" + i).innerHTML = "";
        throw "game end";
    }
    else {
        if (getbox(1) != "" && getbox(2) != "" && getbox(3) != "" && getbox(4) != "" && getbox(5) != "" && getbox(6) != "" && getbox(7) != "" && getbox(8) != "" && getbox(9) != "") {
            player.innerHTML = `the match is tie`;
            btn1.innerHTML = "play again";
            btn_active = 0;
            content.style.display="none";
            player.style.visibility="visible";
             
            for (let i = 1; i <= 9; i++)
            document.getElementById("b" + i).innerHTML = "";
            throw "its a tie";
        }
    }
}