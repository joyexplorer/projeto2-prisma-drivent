import { AuthenticatedRequest } from "@/middlewares";
import ticketsTypeService from "@/services/tickets-services";
import { Response } from "express";
import httpStatus from "http-status";

export async function ticketsTypes(req: AuthenticatedRequest, res: Response) {

  try {
    const ticketTypes = await ticketsTypeService.getTicketTypes();

    return res.status(httpStatus.OK).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
