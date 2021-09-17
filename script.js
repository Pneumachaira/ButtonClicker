function login(element){
    if(element.innerText=="Login"){
        element.innerText="Logout";
    }
    else element.innerText="Login";
}

function like(element){
    var x = 0;
    var arr = ["Like", "1 like", "2 likes", "3 likes", "4 likes", "5 likes", "6 likes", "7 likes", "8 likes", "9 likes", "10 likes", "11 likes", "LOVE IT"];
    if (element.innerText != arr[arr.length-1]){
        while (element.innerText != arr[x]){
            x++;
        }
        element.innerText = arr[x+1];
    }
    else alert("Okay, we get it. Please stop clicking that button.");
}

function remove(element){
    element.remove();
}