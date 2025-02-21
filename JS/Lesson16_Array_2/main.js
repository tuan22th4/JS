/*
    Làm việc với Array
*/


//  1. To string
//  2. Join
//  3. Pop
//  4. Push
//  5. Shift
//  6. Unshift
//  7. Splicing
//  8. Concat
//  9. Slicing

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];
//  1. To string
console.log(languages.toString());
//  2. Join
console.log(languages.join());
//  3. Pop
console.log(languages.pop());
// Xoá phần tử cuối mảng và trả về phần tử cuối mảng
// Kiểm tra sau khi xoá
console.log(languages);

//  4. Push
// Thêm phần tử dart vào mảng
console.log(languages.push('Dart'));
// Kiểm tra sau khi xoá
console.log(languages);


//  5. Shift (Ngược với Push)
// Thêm phần tử dart vào mảng
console.log(languages.shift);
// Kiểm tra sau khi xoá
console.log(languages);

//  6. Unshift
console.log(languages.unshift('Dart', 'Java'));
console.log(languages);

//  7. Splicing 
//  Xoá,cắt, chèn phần tử vào mảng
languages.splice(1,1);
//  8. Concat
console.log(languages.concat(languages));
//  9. Slicing

console.log(languages.slice(1,2));


