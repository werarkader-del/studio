'use server';

import { answerFaq } from '@/ai/flows/faq-answer';
import { z } from 'zod';

const FaqSchema = z.object({
  question: z.string().min(10, 'Please ask a more detailed question.'),
});

interface FaqState {
  answer?: string;
  error?: string;
}

export async function askQuestion(
  prevState: FaqState,
  formData: FormData,
): Promise<FaqState> {
  const validatedFields = FaqSchema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.question?.[0],
    };
  }

  try {
    const result = await answerFaq({ question: validatedFields.data.question });
    if (result.answer) {
      return { answer: result.answer };
    }
    return { error: 'I could not find an answer to your question.' };
  } catch (e) {
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}
