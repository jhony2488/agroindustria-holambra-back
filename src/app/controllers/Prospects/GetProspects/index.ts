import {request, response} from 'express'
import Prospect  from "../../../models/Prospect";

async function getProspects(req: typeof request, res: typeof response){
  const { id } = req.query
  const prospects: any= Prospect
    // #swagger.tags = ['Email']
    // #swagger.description = 'Endpoint para enviar email de contato e enviar mensagem para o whatsapp como aviso do recebimento do email'
    /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para envio de email de contato",
                required: true,
                schema: { $ref: "#/definitions/SendMail" }
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const result = await id ? prospects.findOne({where: {id}}): prospects.findAll()
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/SendMailResponse" },
               description: 'Enviar email'
        } */
      return res.json({
        result
      })
    } catch (err) {
      /* #swagger.responses[400] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando houver um erro na requisição'
        } */
      return res.status(400).json({ message: err.message })
    }
  }

  export default getProspects;
