const display = document.getElementById("display");

function AppendToDisplay(input) {
  display.value = display.value + input;
}

function Calculate() {
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "error";
    }
}

function ClearDisplay() {
  display.value = "";
}
