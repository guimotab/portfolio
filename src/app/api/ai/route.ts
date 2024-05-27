import IApiResponse from "@/interface/IApiResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

export async function POST(request: Request, res: NextApiResponse) {
  const { prompt } = await request.json() as { prompt: string }
  try {
    const apiKey = process.env.OPENAI_API_KEY
    const openai = createOpenAI({
      apiKey,
      organization: "org-SkP00yh454mZH5JfaA7WRrOh",
      project: "proj_oEXZ4qNq3ARLNQoBxlexGJzM",
    });
    const model = openai('gpt-3.5-turbo');

    const { text } = await generateText({
      model,
      prompt,
    });

    return NextResponse.json({ resp: "Success", data: text, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", data: err, status: 500 } as IApiResponse)
  }
}