/*
Giới thiệu về 1 số hàm build in :

    1. Alert: pop up thông báo
    2. Console: chứa nhiều hàm bên trong (Phương thức)
    3. Confirm
    4. Prompt
    5. Set time out
    6. Set interval

*/

var fullName = 'Nguyen Ba Tuan';
console.log('In ra dong chu thong bao log');

confirm('Xác nhận bạn đủ tuổi để chơi game');
prompt('Nhập số tuổi của bạn:');
setTimeout(function () {
    console.log('Day la log');
}, 1000)
