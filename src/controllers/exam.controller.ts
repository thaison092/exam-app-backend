
import { Controller, Post, Route, Body, Tags } from 'tsoa';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface ExamSubmission {
  studentName: string;
  score: number;
  answers: any;
}

@Route("exams")
@Tags("Exams")
export class ExamController extends Controller {
  @Post("submit")
  public async submit(@Body() body: ExamSubmission): Promise<{ message: string }> {
    await prisma.examResult.create({ data: body });
    return { message: "Exam submitted successfully." };
  }
}
