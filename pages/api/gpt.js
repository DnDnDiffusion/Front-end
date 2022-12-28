import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const prefixDescription =
  "Parse this javascript object into a description. The object is a character in Dungeons and Dragons. The description should be several long paragraphs and detailed. Do not use the values in the object directly like saying 'her strength is +2', instead use them to generate a description and expand on each. Focus on physical descriptions and attributes of the character. Explain the feature value with a story: ";

const generateAction = async (req, res) => {
  console.log(req.body.data);

  const prompt = `${prefixDescription}: ${JSON.stringify(req.body.data)}`;
  console.log("prompt", prompt);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 350,
  });
  const basePromptOutput = baseCompletion.data.choices.pop();
  console.log("basePromptOutput", basePromptOutput);

  res.status(200).json({ output: basePromptOutput });
};

// should return a prompt like this:
/* This Dragonborn character is a bard of eloquence, wearing leather armor and boasting scales that more closely match the vibrant blue of their dragon ancestor. They stand proudly at 6½ feet tall, with strong talon-like claws and a strong, muscular build. Their scales shimmer with a metallic blue hue, reflecting the light and giving them a regal and powerful presence. Their facial features are sharp and angular, representing the unique dragon ancestry of this Dragonborn. */

export default generateAction;
