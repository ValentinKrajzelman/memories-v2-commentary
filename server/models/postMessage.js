//este es un modelo, es un objeto que se llama en los controllers sirve para 
//estandarizar la informacion que se guarda y evitar errores a la hora de crear 
//el controller. para hacer los modelos de mongoDB se usa mongoose
import mongoose from 'mongoose';

//esto es el schema, es un objeto que se usa para crear el modelo
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    //en likeCount se hace un objeto con type number por que se necesita tener un default
    //de cero likes
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

//esta es la creacion del modelo es lo que se exporta a los controladores
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;