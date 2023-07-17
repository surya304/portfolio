var data = [
    [
        "class_id",
        "first_name",
        "last_name",
        "student_personal_id",
        "email",
        "description",
        "phone",
        "address",
        "gender",
        "father_name",
        "father_mobile",
        "father_email",
        "mother_name",
        "mother_mobile",
        "mother_email",
        "guardian_name",
        "guardian_mobile",
        "guardian_email\r"
    ],
    [
        "63f4cabbb6da89b41d61fb11",
        "asdsad",
        "asdsad",
        "3243223",
        "asdsad@g.com",
        "asdsad",
        "2323434",
        "asdasdasdsad ",
        "male",
        "asdsad",
        "3212131",
        "a@b.com",
        "asdasdasd",
        "asdasd",
        "a@b.com",
        "",
        "",
        "\r"
    ],
    [
        "63f4cac6b6da89b41d61fb16",
        "asdsad",
        "asdsad",
        "3243223",
        "asdsad@g.com",
        "asdsad",
        "2323434",
        "asdasdasdsad ",
        "male",
        "",
        "",
        "",
        "",
        "",
        "",
        "asdasdasd",
        "asdasd",
        "a@b.com\r"
    ],
    [
        "class Data",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\r"
    ],
    [
        "10A",
        "63f4cabbb6da89b41d61fb11",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\r"
    ],
    [
        "10ba",
        "63f4cac6b6da89b41d61fb16",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\r"
    ],
    [
        "9a",
        "63f4cacfb6da89b41d61fb1b",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\r"
    ],

];


// data.forEach(innerarr => {



//      for (let index = 0; index < innerarr.length; index++) {
//        const element = innerarr[0];
//        if(element.length > 20 ){
//          console.log(element,"element")
//          console.log(index,"index")



//        }

//      }

//      });



var newarr = [];


for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element[0].length > 20) {
        console.log(element, "element")
        newarr.push(element)



    }

}

var main_arr =
    [
        "class_id",
        "first_name",
        "last_name",
        "student_personal_id",
        "email",
        "description",
        "phone",
        "address",
        "gender",
        "father_name",
        "father_mobile",
        "father_email",
        "mother_name",
        "mother_mobile",
        "mother_email",
        "guardian_name",
        "guardian_mobile",
        "guardian_email"
    ];





var finalarr = [];

const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
function combinedata(mainarr, indidata) {
    var finaldata = [indidata].map(function (item) {
        var obj = {
            _id: makeid(19)
        };
        mainarr.forEach(function (key, i) {
            obj[key] = item[i];
        });
        return obj;
    });

    return finaldata[0];

}


for (let index = 0; index < newarr.length; index++) {

    const element = newarr[index];


    var adata = combinedata(main_arr, element);
    finalarr.push(adata);


}






console.log(finalarr, "finalarr")



var data23 = ["father_name", "father_mobile", "father_email", "mother_name", "mother_mobile", "mother_email", "guardian_name", "guardian_mobile", "guardian_email"];

var data332 = [
    {
        "_id": "trM95PGper3BUcu1AoI",
        "class_id": "63f4cabbb6da89b41d61fb11",
        "first_name": "asdsad",
        "last_name": "asdsad",
        "student_personal_id": "3243223",
        "email": "asdsad@g.com",
        "description": "asdsad",
        "phone": "2323434",
        "address": "asdasdasdsad ",
        "gender": "male",
        "father_name": "asdsad",
        "father_mobile": "3212131",
        "father_email": "a@b.com",
        "mother_name": "asdasdasd",
        "mother_mobile": "asdasd",
        "mother_email": "a@b.com",
        "guardian_name": "",
        "guardian_mobile": "",
        "guardian_email": "\r"
    },
    {
        "_id": "X4eKh9S6aPcMpMeGvFd",
        "class_id": "63f4cac6b6da89b41d61fb16",
        "first_name": "asdsad",
        "last_name": "asdsad",
        "student_personal_id": "3243223",
        "email": "asdsad@g.com",
        "description": "asdsad",
        "phone": "2323434",
        "address": "asdasdasdsad ",
        "gender": "male",
        "father_name": "asdasd",
        "father_mobile": "",
        "father_email": "",
        "mother_name": "",
        "mother_mobile": "",
        "mother_email": "",
        "guardian_name": "asdasdasd",
        "guardian_mobile": "asdasd",
        "guardian_email": "a@b.com\r"
    }
];



// data332.forEach(function(obj) {

//   data23.forEach(function(key) {

//     if (obj[key] < 4) {

//       console.log(key + " is empty for object with class_id: " + obj.class_id);


//     }
//   });
// });

var error_arr = []
for (let index = 0; index < data332.length; index++) {
    const element = data332[index];
    const father_name = data332[index].father_name;
    const mother_name = data332[index].mother_name;
    const guardian_name = data332[index].guardian_name;
    const class_id = data332[index].class_id;
    const _id = data332[index]._id;

   

    var final_str = ''

    if (class_id.length > 10) {


        if (father_name.length > 4 && mother_name.length > 4) {

            data332[index].isValidated=true;
            data332[index].type='parent';


        } else if (guardian_name.length > 4) {

            data332[index].isValidated=true;
            data332[index].type='guardian';
            
        }else {
            final_str += `missing ( mother and father Details )  or (Guardian Details) for -${class_id}`

        }


    } else {
        final_str += `missing Class_id -`
    }

    var obj = {
        data: final_str
    };
    error_arr.push(obj)


}


console.log(data332,"data332")
console.log(error_arr,"error_arr")

const final_error_arr = error_arr.filter(obj => obj.data.length > 0);

console.log(final_error_arr,"final_error_arr")




// var guardiandata = ["guardian_name", "guardian_mobile", "guardian_email"];
// var guardianfinalarr = [];

// data332.forEach(function (obj) {
//     guardiandata.forEach(function (key) {
//         if (obj[key] < 2) {

//             console.log(key + " is empty for object with class_id: " + obj.class_id);


//         } else {
//             guardianfinalarr.push(obj)
//         }
//     });
// });






// var parentarr = ["father_name", "father_mobile", "father_email", "mother_name", "mother_mobile", "mother_email"];
// var parentfinalarr = [];


// data332.forEach(function (obj) {
//     parentarr.forEach(function (key) {
//         if (obj[key] < 2) {

//             console.log(key + " is empty for object with class_id: " + obj.class_id);


//         } else {
//             parentfinalarr.push(obj)
//         }
//     });
// });

// console.log(guardianfinalarr, "guardianfinalarr")
// console.log(parentfinalarr, "parentfinalarr")
