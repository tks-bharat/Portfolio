'use server';
/**
 * @fileOverview A Genkit flow for generating a professional description or blurb for a Skills Showcase
 * based on a list of skills provided by the user.
 *
 * - generateSkillDescription - A function that handles the skill description generation process.
 * - GenerateSkillDescriptionInput - The input type for the generateSkillDescription function.
 * - GenerateSkillDescriptionOutput - The return type for the generateSkillDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSkillDescriptionInputSchema = z.object({
  skills: z.array(z.string()).describe('A list of technical and soft skills.'),
});
export type GenerateSkillDescriptionInput = z.infer<typeof GenerateSkillDescriptionInputSchema>;

const GenerateSkillDescriptionOutputSchema = z.object({
  description: z.string().describe('A brief, professional description for a Skills Showcase.'),
});
export type GenerateSkillDescriptionOutput = z.infer<typeof GenerateSkillDescriptionOutputSchema>;

export async function generateSkillDescription(input: GenerateSkillDescriptionInput): Promise<GenerateSkillDescriptionOutput> {
  return generateSkillDescriptionFlow(input);
}

const generateSkillDescriptionPrompt = ai.definePrompt({
  name: 'generateSkillDescriptionPrompt',
  input: {schema: GenerateSkillDescriptionInputSchema},
  output: {schema: GenerateSkillDescriptionOutputSchema},
  prompt: `You are an AI assistant tasked with crafting a concise and professional description for a "Skills Showcase" section on a portfolio website.

The user will provide a list of their technical and soft skills. Your goal is to generate a brief, professional blurb that highlights their expertise, makes the section dynamic, and encourages visitors to explore their capabilities further.

Here are the skills:
{{#each skills}}- {{this}}
{{/each}}

Based on these skills, provide a professional description for a portfolio's Skills Showcase section. The description should be compelling, concise, and effectively convey the user's proficiency and potential.`,
});

const generateSkillDescriptionFlow = ai.defineFlow(
  {
    name: 'generateSkillDescriptionFlow',
    inputSchema: GenerateSkillDescriptionInputSchema,
    outputSchema: GenerateSkillDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateSkillDescriptionPrompt(input);
    return output!;
  }
);
