const h1_inv1 = document.getElementById('invitado-1');
const h1_inv2 = document.getElementById('invitado-2');
const unique = document.getElementById('invitado-unico');
const div1 = document.getElementById('varios');
const div2 = document.getElementById('solo');

const values = window.location.search;
const params = new URLSearchParams(values)


if( params.getAll('invitado').length > 1 ) {
    if(div1.classList.contains('none')) div1.classList.remove('none');
    div2.classList.remove('un-invitado');
    div2.classList.add('none');
    let [inv1, inv2] = params.getAll('invitado');

    const space1 = inv1.indexOf(' ');
    const space2 = inv2.indexOf(' ');
    
    let firstName1 = inv1[0].toUpperCase() + inv1.substring(1, space1);
    let firstName2 = inv2[0].toUpperCase() + inv2.substring(1, space2);
    
    let validSpace1 = inv1.includes(' ');
    let validSpace2 = inv1.includes(' ');
    
    if( validSpace1 ) {
        let lastName = inv1[space1 + 1].toUpperCase() + inv1.substring(space1 + 2);
        h1_inv1.innerText = firstName1 + ' ' + lastName;
    }
    
    if( validSpace2 ) {
        let lastName = inv2[space2 + 1].toUpperCase() + inv2.substring(space2 + 2);
        h1_inv2.innerText = firstName2 + ' ' + lastName;
    }
} else {
    if(div2.classList.contains('none')) div2.classList.remove('none');
    div1.classList.remove('varios-invitados');
    div1.classList.add('none');
    let [ inv ] = params.getAll('invitado');

    const space = inv.indexOf(' ');
    let firstName = inv[0].toUpperCase() + inv.substring(1, space);
    let validSpace = inv.includes(' ');

    if( validSpace ) {
        let lastName = inv[space + 1].toUpperCase() + inv.substring(space + 2);
        unique.innerText = firstName + ' ' + lastName;
    }
}


