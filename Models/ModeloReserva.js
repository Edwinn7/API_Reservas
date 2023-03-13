import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EsquemaReserva=new Schema({
    idCliente:{
        required:true,
        type:String
    },
    nombreCliente:{
        required:true,
        type:String
    },
    servicio:{
        required:true,
        type:String
    },
    fecha:{
        required:true,
        type:Date
    },
    costoReserva:{
        required:false,
        type:Number
    }
})

export const modeloReserva=mongoose.model('Reservas',EsquemaReserva)