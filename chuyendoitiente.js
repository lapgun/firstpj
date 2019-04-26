function n() {
    let nhapso = parseFloat(document.getElementById('output').value);
    let sodoi = parseFloat(document.getElementById('from').value);
    let  soduocdoi = parseFloat(document.getElementById('to').value);
    if (nhapso > 0)
    {
        let tong=0;
        tong=nhapso*soduocdoi/sodoi;
        // alert('tong');
        document.getElementById('result').innerHTML=tong;
    }

    else {
        document.getElementById('result').innerHTML='qua trinh nhap sai';
        // document.write('quá trình nhập sai');
    }
}