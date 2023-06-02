 var options = ['Intel', 'AMD'];
 var select = document.getElementById('ddlDanhsachhangsx');

 options.forEach(function(op){
    op = op.trim();

    if(op!=''){
        var option = document.createElement('option');
        option.text= op;
        select.add(option);
    }
 },this)

 function themHangSX(){
    var btnLuu = document.getElementById('btnLuu');
    btnLuu.classList.remove('show');

    var btnThem = document.getElementById('btnThem');
    btnThem.classList.add('show');

    var hang = document.getElementById('hang');
    hang.classList.remove('show');
}

function huy(){
    var hang = document.getElementById('hang');
    hang.classList.add('show');

    var btnLuu = document.getElementById('btnLuu');
    btnLuu.classList.add('show');

    var btnThem = document.getElementById('btnThem');
    btnThem.classList.remove('show');

    var error = document.getElementById('error');
    error.classList.add('show');

}

function soSanh() {
    var txtHang = document.getElementById('txtHang').value;
    var select = document.getElementById('ddlDanhsachhangsx');
    var length = select.options.length;
  
    for (var i = 0; i < length; i++) {
      if (txtHang.toLowerCase().localeCompare(select.options[i].value.toLowerCase()) == 0) {
        return false;
      }
    }
    return true;
  }
  


function luuHangSX(){

    var txtHang = document.getElementById('txtHang').value;
    var error = document.getElementById('error');

    if(txtHang==''){
        error.classList.remove('show');
        error.innerHTML='<span>Không được để trống</span>';
        document.getElementById('txtHang').focus();
    }else{
        if(soSanh()){
            var option = document.createElement('option');
            option.text= txtHang.trim();
            select.add(option);
            error.classList.remove('show');
            error.innerHTML='<span style="color:green">Thêm mới thành công!</span>';
            document.getElementById('txtHang').value = '';
        }else{
            error.classList.remove('show');
            error.innerHTML='<span>Hãng sản xuất đã tồn tại</span>';
            document.getElementById('txtHang').focus();
        }
    }

}
