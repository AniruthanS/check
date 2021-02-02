var tb = document.createElement('table');
tb.setAttribute = ('class', 'table');
tb.style.border = 'solid';
var tr = document.createElement('tr');
tr.setAttribute = ('class', 'row1');
var head1 = document.createElement('th');
head1.setAttribute = ('class', 'head');
head1.innerHTML = 'Name';
var head2 = document.createElement('th');
head2.setAttribute = ('class', 'head');
head2.innerHTML = 'Email';
var head3 = document.createElement('th');
head3.setAttribute = ('class', 'head');
head3.innerHTML = 'Id';
tr.append(head1, head2, head3);
tb.append(tr);
var arr = [];


var b = prompt("How many IDs per page? Enter as numberics!");



var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
request.send();

request.onload = function fun() {
    var data = JSON.parse(this.response);

    console.log(data);
    function print(x) {
        for (var i = 0;i<b;i++) {
            console.log(data,i,x,b);
            var tr1 = document.createElement('tr');
            tr1.setAttribute = ('class', 'row1');
            var dataa1 = document.createElement('td');
            dataa1.innerHTML = data[i].name;
            var dataa2 = document.createElement('td');
            dataa2.innerHTML = data[i].email;
            var dataa3 = document.createElement('td');
            dataa3.innerHTML = data[i].id;
            tr1.append(dataa1, dataa2, dataa3);
            tb.append(tr1);
            dataa1.style.color = 'red';
            document.body.append(tb);
        }
    }
    for (var j = 0; j <= (data.length / b) - 1; j++) {
        
        var a = document.createElement('button');

        a.innerHTML = j + 1;
        
        
        document.body.appendChild(a);
        arr.push(a);
        arr[arr.length-1].onclick=()=>print(arr[arr.length-1].innerHTML);
        console.log(arr[arr.length-1], arr[arr.length-1].innerHTML);
    }
    console.log(arr[arr.length-1], arr[arr.length-1].innerHTML);
}















