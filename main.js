var html = document.getElementById('a_html');
var css = document.getElementById('a_css');
var js = document.getElementById('a_js');
var py = document.getElementById('a_py');
var sql = document.getElementById('a_sql');
var php = document.getElementById('ph');
var jque = document.getElementById('jq');

var a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0,
    g = 0;

// total section
var tot = 0;
// HTML Function
var div = document.createElement('div');
div.setAttribute('id', 'htm');
var na = document.createElement('span');
var pr = document.createElement('span');
pr.innerHTML = 4000;
na.innerHTML = 'HTML';
html.onclick = () => {
    if (a === 0) {
        document.getElementById('cartBody').appendChild(div);
        document.getElementById('htm').appendChild(na);
        document.getElementById('htm').appendChild(pr);
        tot += parseInt(pr.innerHTML);
        alert("HTML add Success, Go to cart");
        a++;
        document.getElementById('total').innerHTML = 'Rs. ' + tot.toLocaleString("en-US");
    } else {
        alert('already Added')

    }


}

// CSS Function

var div2 = document.createElement('div');
div2.setAttribute('id', 'cs');
var na2 = document.createElement('span');
var pr2 = document.createElement('span');
pr2.innerHTML = 4500;
na2.innerHTML = 'CSS';
css.onclick = () => {
    if (b === 0) {
        document.getElementById('cartBody').appendChild(div2);
        document.getElementById('cs').appendChild(na2);
        document.getElementById('cs').appendChild(pr2);
        tot += parseInt(pr2.innerHTML);
        document.getElementById('total').innerHTML = 'Rs. ' + tot.toLocaleString("en-US");
        alert("CSS add Success , Go to cart");
        b++;

    } else {
        alert('already Added')
    }
}

// javascript
var div3 = document.createElement('div');
div3.setAttribute('id', 'js1');
var na3 = document.createElement('span');
var pr3 = document.createElement('span');
pr3.innerHTML = 10000;
na3.innerHTML = 'JavaScript';
js.onclick = () => {
        if (c === 0) {
            document.getElementById('cartBody').appendChild(div3);
            document.getElementById('js1').appendChild(na3);
            document.getElementById('js1').appendChild(pr3);
            tot += parseInt(pr3.innerHTML);
            document.getElementById('total').innerHTML = 'Rs. ' + tot.toLocaleString("en-US");
            alert("JS add Success , Go to cart");
            c++;

        } else {
            alert('already Added')

        }

    }
    // python
var div4 = document.createElement('div');
div4.setAttribute('id', 'py');
var na4 = document.createElement('span');
var pr4 = document.createElement('span');
pr4.innerHTML = 20000;
na4.innerHTML = 'Python';
py.onclick = () => {
        if (d === 0) {
            document.getElementById('cartBody').appendChild(div4);
            document.getElementById('py').appendChild(na4);
            document.getElementById('py').appendChild(pr4);
            tot += parseInt(pr4.innerHTML);
            document.getElementById('total').innerHTML = 'Rs. ' + tot.toLocaleString("en-US");
            alert("python add Success , Go to cart");
            d++;
        } else {
            alert('already Added')

        }

    }
    // SQL

var div5 = document.createElement('div');
div5.setAttribute('id', 'sql1');
var na5 = document.createElement('span');
var pr5 = document.createElement('span');
pr5.innerHTML = 10000;
na5.innerHTML = 'sql';
sql.onclick = () => {
    if (e === 0) {
        document.getElementById('cartBody').appendChild(div5);
        document.getElementById('sql1').appendChild(na5);
        document.getElementById('sql1').appendChild(pr5);
        alert("SQL add Success , Go to cart");
        tot += parseInt(pr5.innerHTML);
        document.getElementById('total').innerHTML = 'Rs. ' + tot.toLocaleString("en-US");
        e++;

    } else {
        alert('already Added')

    }
}



// PHP

var div6 = document.createElement('div');
div6.setAttribute('id', 'php');
var na6 = document.createElement('span');
var pr6 = document.createElement('span');
pr6.innerHTML = 15000;
na6.innerHTML = 'PHP';
php.onclick = () => {
    if (f === 0) {
        document.getElementById('cartBody').appendChild(div6);
        document.getElementById('php').appendChild(na6);
        document.getElementById('php').appendChild(pr6);
        alert("PHP add Success , Go to cart");
        tot += parseInt(pr6.innerHTML);
        document.getElementById('total').innerHTML = 'Rs. ' + tot.toLocaleString("en-US");
        f++;

    } else {
        alert('already Added')

    }
}




// jQuery

var div7 = document.createElement('div');
div7.setAttribute('id', 'jq');
var na7 = document.createElement('span');
var pr7 = document.createElement('span');
pr7.innerHTML = 8000;
na7.innerHTML = 'sql';
jque.onclick = () => {
    if (g === 0) {
        document.getElementById('cartBody').appendChild(div7);
        document.getElementById('jq').appendChild(na7);
        document.getElementById('jq').appendChild(pr7);
        alert("jQuery add Success , Go to cart");
        tot += parseInt(pr7.innerHTML);
        document.getElementById('total').innerHTML = 'Rs. ' + tot.toLocaleString("en-US");
        g++;

    } else {
        alert('already Added')

    }
}