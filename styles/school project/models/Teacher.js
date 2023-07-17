import mongoose from 'mongoose'

/* OrderSchema will correspond to a collection in your MongoDB database. */
const teacherSchema = new mongoose.Schema({


  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    
  },

  employee_id: {
    type: String,
    required: true, // Unique to the school
  },
  key: {
    type: String,
    required: true, // Unique to the school
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  profile_pic: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'male',
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
    },
  ],

  attendance_data: [{

    is_present: {
      type: Boolean,
    },
    date_data: {
      type: String,
    },
    reason : {
      type: String,

    }


  }],
  
  is_del: { type: Boolean, default: false },
  is_active: { type: Boolean, default: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
})

export default mongoose.models.Teacher ||
  mongoose.model('Teacher', teacherSchema)

  
