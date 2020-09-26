function ShowMessage(numberValue){
    if(numberValue == 0){
        document.getElementsByClassName("message")[0].style.display = "none";
    }else{
        document.getElementsByClassName("message")[0].style.display = "block";
    }
}