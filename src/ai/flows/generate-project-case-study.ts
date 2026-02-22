'use server';
/**
 * @fileOverview A Genkit flow for generating a concise and engaging case study summary for a project.
 *
 * - generateProjectCaseStudy - A function that handles the generation of a project case study.
 * - GenerateProjectCaseStudyInput - The input type for the generateProjectCaseStudy function.
 * - GenerateProjectCaseStudyOutput - The return type for the generateProjectCaseStudy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectCaseStudyInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  problem: z.string().describe('A description of the problem the project aimed to solve.'),
  solution: z.string().describe('A description of the solution implemented by the project.'),
  technologies: z.string().describe('A comma-separated list of technologies used in the project.'),
  impact: z.string().describe('A description of the impact or results achieved by the project.'),
});
export type GenerateProjectCaseStudyInput = z.infer<
  typeof GenerateProjectCaseStudyInputSchema
>;

const GenerateProjectCaseStudyOutputSchema = z.string().describe('A concise and engaging case study summary for the project.');
export type GenerateProjectCaseStudyOutput = z.infer<
  typeof GenerateProjectCaseStudyOutputSchema
>;

const prompt = ai.definePrompt({
  name: 'generateProjectCaseStudyPrompt',
  input: {schema: GenerateProjectCaseStudyInputSchema},
  output: {schema: GenerateProjectCaseStudyOutputSchema},
  prompt: `You are an expert technical writer specializing in creating concise and engaging case study summaries for project portfolios.

Generate a compelling and professional case study summary (approximately 150-200 words) for the following project, focusing on its problem, solution, technologies, and achieved impact. The summary should highlight the project's value and appeal to potential employers or collaborators. Do not include a title for the summary.

Project Name: {{{projectName}}}
Problem: {{{problem}}}
Solution: {{{solution}}}
Technologies Used: {{{technologies}}}
Impact: {{{impact}}}`,
});

const generateProjectCaseStudyFlow = ai.defineFlow(
  {
    name: 'generateProjectCaseStudyFlow',
    inputSchema: GenerateProjectCaseStudyInputSchema,
    outputSchema: GenerateProjectCaseStudyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function generateProjectCaseStudy(
  input: GenerateProjectCaseStudyInput
): Promise<GenerateProjectCaseStudyOutput> {
  return generateProjectCaseStudyFlow(input);
}
