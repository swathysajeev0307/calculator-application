/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const element = document.getElementsByTagName('li');
const screen = document.querySelectorAll('p')[0];
const clear = document.getElementById('clear');

for(let i = 0; i<element.length; i++){
    if(element[i].innerHTML === '='){
        element[i].addEventListener("click", calculate(i));
    }else{
        element[i].addEventListener("click",addToCurrentValue(i));
    }
}


function addToCurrentValue(i){

    return function(){
        if(element[i].innerHTML === "x"){
            screen.innerHTML += '*';
        }else{
            screen.innerHTML += element[i].innerHTML;
        }
    }
}

function calculate(i){

    return function(){
        screen.innerHTML = eval(screen.innerHTML);
    }
}

clear.onclick = function(){
    screen.innerHTML = "";
}