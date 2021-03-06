import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvaiabilityService';

export default class ProviderDayAvailabilityController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { provider_id } = req.params;
    const { day, month, year } = req.body;

    const listProviderDayAvaiabilityService = container.resolve(
      ListProviderDayAvailabilityService,
    );
    const avaibility = await listProviderDayAvaiabilityService.execute({
      provider_id,
      day,
      month,
      year,
    });

    return res.status(200).json(avaibility);
  }
}
