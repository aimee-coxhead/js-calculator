var entries = [];
var total = 0;
var temp = '';

function clearAll(){
    entries = [];
    total = 0;
    temp = '';
    document.getElementById("display").value = "0";
}

function enter(num){
    if(temp === '0' && num === 0){
        return
    }
    else if(temp.includes('.') && num === '.'){
        return
    }
    temp += num;
    document.getElementById("display").value = temp;
}

function symbol(sym) {
    if (entries.length === 0 && temp === ''){
        entries.push(total)
        entries.push(sym)
        document.getElementById("display").value = sym;
        return;
    }
    entries.push(temp);
    entries.push(sym);
    temp = '';
    document.getElementById("display").value = sym;
}

function equals(equalsSign){
    entries.push(temp);
    var nt = Number(entries[0])
    for (var i = 1; i < entries.length; i += 2) {
        var nextNum = Number(entries[i+1])
        var calc = entries[i];
        if (calc === '+') { 
            nt += nextNum; 
        } else if (calc === '-') { 
            nt -= nextNum; 
        } else if (calc === 'x') { 
            nt *= nextNum; 
        } else if (calc === '/') { 
            nt /= nextNum; 
        }
  }
    document.getElementById("display").value = nt;
    entries = [];
    total = nt;
    temp = '';
}