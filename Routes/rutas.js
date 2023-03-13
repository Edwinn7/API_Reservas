import express from 'express'
import { ControladorReserva } from '../Controllers/ControladorReserva.js'
let controladorReserva=new ControladorReserva
export let rutas=express.Router()

rutas.get('/barber/reservas',controladorReserva.buscarReservas)

rutas.get('/barber/reserva/:idCliente',controladorReserva.buscarReservaPorId)

// ------------
// rutas.get('/barber/reservado/:idClien',controladorReserva.buscarReservaPorIdCliente)
// ------------

rutas.post('/barber/reserva',controladorReserva.registrarReserva)

rutas.put('/barber/reserva/:idCliente',controladorReserva.editarReserva)

rutas.delete('/barber/reserva/:idCliente',controladorReserva.eliminarReserva)