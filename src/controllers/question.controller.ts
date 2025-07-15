
import { Controller, Get, Post, Route, Body, Tags } from 'tsoa';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface QuestionInput {
  text: string;
  options: string[];
  correctAnswers: string[];
}

@Route("questions")
@Tags("Questions")
export class QuestionController extends Controller {
  @Get()
  public async getQuestions() {
    return prisma.question.findMany();
  }

  @Post()
  public async addQuestion(@Body() body: QuestionInput) {
    await prisma.question.create({ data: body });
    return { message: "Question added successfully." };
  }
}
