function tegla_szamol() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    document.getElementById('k_tegla').value = 2 * (a + b);
    document.getElementById('t_tegla').value = a * b;
}

function k_szamol(mibol) {
    if (mibol == "r") {
    let r = parseInt(document.getElementById('r').value);
    document.getElementById('k_kor').value = Math.round(2 * r * Math.PI * 10) / 10;
    document.getElementById('t_kor').value = r * r * Math.PI;
    }
    else if (mibol == "k") {
        let k = parseInt(document.getElementById('k_kor').value);
        let r = k / 2 / Math.PI;
        document.getElementById('r').value = r;
        document.getElementById('t_kor').value = r * r * Math.PI;
    }
    else {
        let t = parseInt(document.getElementById('t_kor').value);
        let r = Math.sqrt(t / Math.PI);
        document.getElementById('r').value = r;
        document.getElementById('k_kor').value = 2 * r * Math.PI;
    }
}

function haromszog_szamol() {
    let a = parseInt(document.getElementById('h_a').value);
    let b = parseInt(document.getElementById('h_b').value);
    let c = parseInt(document.getElementById('h_c').value);
    let k = a + b + c;
    let s = k / 2;
    let t = Math.sqrt((s * (s-a) * (s-b) * (s-c))); 
    document.getElementById('k_haromszog').value = k;
    document.getElementById('t_haromszog').value = t;
}

function negyzet_szamol() {
    let a = parseInt(document.getElementById('n_a').value);
    document.getElementById('k_negyzet').value = 4 * a;
    document.getElementById('t_negyzet').value = a * a;
}

function hatszog_szamol() {
    let a = parseInt(document.getElementById('hatszog_a').value);
    document.getElementById('k_hatszog').value = 6 * a;
    document.getElementById('t_hatszog').value = (3 / 2) * (a * a) * Math.pow(3, 1/2);
}

function valt(mire) {
    // document.getElementById('teglalap').style.display = "none";
    // document.getElementById('kor').style.display = "none";
    // document.getElementById('haromszog').style.display = "none";
    let formok = document.getElementsByTagName('form');
    for (i=0; i < formok.length; i++) {
        formok[i].style.display = "none";
    }
    document.getElementById(mire).style.display = "block";
    // switch (mire) {
        // case 'kor':
        //     document.getElementById('kor').style.display = "block";
        //     break;
        // case 'teglalap':
        //     document.getElementById('teglalap').style.display = "block";
        //     break;
        // case 'haromszog':
        //     document.getElementById('haromszog').style.display = "block";
        //     break; 
        // case 'negyzet':
        //     document.getElementById('negyzet').style.display = "block";
        //     break;
        // case 'hatszog':
        //     document.getElementById('hatszog').style.display = "block";
        //     break;
    // }
}

function torol() {
    document.getElementById('k_kor').value = "";
    document.getElementById('t_kor').value = "";
    document.getElementById('r').value = "";
}