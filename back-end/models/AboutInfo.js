const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InfoSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    note: {
        type: String,
        required: true,
      },
  }
)

// create mongoose Model
const AboutInfo = mongoose.model('AboutInfo', InfoSchema)

// export the model so other modules can import it
module.exports = {
    AboutInfo,
}
