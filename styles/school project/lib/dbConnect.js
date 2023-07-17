import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;




// import Klass from "../models/Klass";
// Klass.updateOne(
//   { _id:  "63e4be9dac231828eb88fdfe" },
//   {
//     $pull: { tuesday: mongoose.Types.ObjectId('63e62d1ea55bbe98ac7c3927') },
//   }
// );


const idToRemove = "63e62d1ea55bbe98ac7c3927";

//   Klass.update({_id:"63e4be9dac231828eb88fdfe"}, 
//   {$pull: {tuesday: {_id: '63e62d1ea55bbe98ac7c3927'}}}, 
//   {multi: true}),function(err, company) {
//   if (err) {
//     console.log(err,"err")

//       // res.status(500).send({ message: err });
//       // res.end();
//   } else {
//       console.log(company,"company")
//       // res.status(200).json({
//       //     data: "success",
//       // });
//       // res.end();

//   }
// }


// Klass.updateMany(
//   { _id: "63e4be9dac231828eb88fdfe" },
//   { $pull: { tuesday: { id: { $in: ["63e62d1ea55bbe98ac7c3927"] } } } },
//   { multi: true }
// );

// var result=Klass.update({ _id: "63e4be9dac231828eb88fdfe" }, 
//   {$pull: {tuesday: {$in: [ {"id": "63e62d1ea55bbe98ac7c3927"} ] } } }, 
//   {multi: true});

// const result =  Klass.findByIdAndUpdate("63e4be9dac231828eb88fdfe", {
//   $pull: {
//     tuesday: { _id: "63e62d1ea55bbe98ac7c3927" }
//   }
// }, { new: true });



// Klass.findOneAndUpdate({ _id: "63e4be9dac231828eb88fdfe" }, {$pull: {tuesday: "63e62d1ea55bbe98ac7c3927"}}, (err, data) => {
   
//     if (err) {
//     console.log(err,"err")

    
//   } else {
//       console.log(data,"data21")
  

//   }
// });




// const result =  Klass.updateOne({ _id: "63e4be9dac231828eb88fdfe" }, {
//   $pull: {
//     tuesday: { _id: "63e62d1ea55bbe98ac7c3927" }
//   }
// });
//   console.log(result,"result")



// var daytypedata=req.body.day_type;
// var from_time_key=`${daytypedata}.$.from_time`;
// var to_time_key=`${daytypedata}.$.to_time`;
// var subject_key=`${daytypedata}.$.subject_id`;
// var teacher_key=`${daytypedata}.$.teacher_id`;


// Klass.update({
//   _id: req.body.class_id,
//   [daytypedata]: {
//       $elemMatch: {
//           _id: req.body._id,
//       }
//   }
// }, {
//   // "$set": { `${req.body.daytype}.$.from_time`: req.body.from_time, "cityTestObj.$.price": price, "cityTestObj.$.disPrice": disPrice }
//   "$set": { [from_time_key]: req.body.from_time, [to_time_key]: req.body.to_time, [subject_key]: req.body.subject_id, [teacher_key]: req.body.teacher_id }
// },
// function(err, company) {
//   if (err) {
//     console.log(err,"err")

//       // res.status(500).send({ message: err });
//       // res.end();
//   } else {
//       console.log(company,"company")
//       // res.status(200).json({
//       //     data: "success",
//       // });
//       // res.end();

//   }
// });

// Klass.find({favouriteFoods: {"$in": ["sushi", "hotdog"]}})


// .exec(function(err, docs) {


//   if(err){
//     console.log(err,"err")
//     res.status(200).json({ success: true, placeInfo: undefined });

//   }else{

    
//     res.status(200).json({ success: true, placeInfo: placeInfo });

//   }

// });


// Klass.find({_id: "63cce4e3b0746cc2d11f117a"})
// .populate({
//     path: 'monday',
//     populate: [
//       {
//         path: 'teacher_id', 
//         model: 'Teacher',
//         select: 'first_name last_name'
      
//     },{
//       path: 'subject_id',
//       model: 'Subject',
//       select: 'name school_id'
//     }]}).exec(function(err, docs) {


//   if(err){
//     console.log(err,"err")
//     res.status(200).json({ success: true, placeInfo: undefined });

//   }else{

    
//     res.status(200).json({ success: true, placeInfo: placeInfo });

//   }
// });




// const newData = { school_id: "63f342d58b63575cf5dc3afc",
// name: "XA ",
// category_id: "63cce398b0746cc2d11f1175",
// subjects: ["63cce2a0b0746cc2d11f116e"],
// sort_number: 1,

// monday: [
//   {
//     teacher_id:"63cce31eb0746cc2d11f1173",
//     subject_id:"63cce2a0b0746cc2d11f116e",
//     from_time:"1130 AM ",
//     to_time:"1030 pm",

//   }
// ],


// };


  





// Klass.create(newData, function (err, newDoc) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("New document added to the database: ", newDoc);
//     }
// });

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}



/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {

  console.log("saa")
  
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}





export default dbConnect;
