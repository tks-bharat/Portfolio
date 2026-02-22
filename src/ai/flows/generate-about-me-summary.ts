'use server';
/**
 * @fileOverview A Genkit flow for generating a personalized 'About Me' summary.
 *
 * - generateAboutMeSummary - A function that handles the generation of the 'About Me' summary.
 * - GenerateAboutMeSummaryInput - The input type for the generateAboutMeSummary function.
 * - GenerateAboutMeSummaryOutput - The return type for the generateAboutMeSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeSummaryInputSchema = z.object({
  professionalExperience: z
    .string()
    .describe('A summary of your professional experience and background.'),
  aspirations: z
    .string()
    .describe('Your career aspirations and future goals.'),
  interests: z
    .string()
    .describe('Your personal interests, hobbies, or unique qualities.'),
});
export type GenerateAboutMeSummaryInput = z.infer<
  typeof GenerateAboutMeSummaryInputSchema
>;

const GenerateAboutMeSummaryOutputSchema = z.object({
  summary: z.string().describe("The generated 'About Me' summary."),
});
export type GenerateAboutMeSummaryOutput = z.infer<
  typeof GenerateAboutMeSummaryOutputSchema
>;

export async function generateAboutMeSummary(
  input: GenerateAboutMeSummaryInput
): Promise<GenerateAboutMeSummaryOutput> {
  return generateAboutMeSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMeSummaryPrompt',
  input: {schema: GenerateAboutMeSummaryInputSchema},
  output: {schema: GenerateAboutMeSummaryOutputSchema},
  prompt: `As an expert career coach and professional biographer, your task is to craft a compelling and personalized 'About Me' summary for a portfolio website.

The summary should highlight the individual's professional journey, future aspirations, and unique personal interests to create a well-rounded and engaging profile.

Focus on creating a narrative that is concise, impactful, and authentic, suitable for a minimalist, professional portfolio.

Professional Experience: {{{professionalExperience}}}
Aspirations: {{{aspirations}}}
Interests: {{{interests}}}

Craft the 'About Me' summary now:`,
});

const generateAboutMeSummaryFlow = ai.defineFlow(
  {
    name: 'generateAboutMeSummaryFlow',
    inputSchema: GenerateAboutMeSummaryInputSchema,
    outputSchema: GenerateAboutMeSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
