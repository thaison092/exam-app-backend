
import { Controller, Get, Route, Path, Tags } from 'tsoa';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Route("reports")
@Tags("Reports")
export class ReportController extends Controller {
  @Get()
  public async getAll() {
    return prisma.examResult.findMany({ orderBy: { dateTaken: 'desc' } });
  }

  @Get("{id}")
  public async getOne(@Path() id: number) {
    return prisma.examResult.findUnique({ where: { id } });
  }
}
