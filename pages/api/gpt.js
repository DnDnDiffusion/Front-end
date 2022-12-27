import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
// this is how we spruce up our prompt into GPT-3.
// could even write a function in here that processes the req body in here (security risk?)
const basePromptPostfix = ` Generate a medium length prompt for text to image AI based on the previous text: `;
const basePromptPrefix = `Generate a Stable Diffusion text prompt for a D&D Character Avatar for a Dragonborn.  
Make sure stable diffusion can represent the unique dragon ancestry in the facial features of this specific Dragonborn.  
Use the following block of text to understand what is a dragonborn, and produce a prompt that can produce a visual representation using text to image AI. 
"Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.

Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each hand.

The blood of a particular type of dragon runs very strong through some dragonborn clans. These dragonborn often boast scales that more closely match those of their dragon ancestor—bright red, green, blue, or white, lustrous black, or gleaming metallic gold, silver, brass, copper, or bronze."  
The following text is about the specific dragonborn character:  `;

// example of something good the user should send in:
// blue ancestry dragonborn bard of eloquence wearing leather armor.

const generateAction = async (req, res) => {
  // Run first prompt

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.prompt}${basePromptPostfix}`,
    temperature: 0.7,
    max_tokens: 350,
  });
  console.log(`API: ${basePromptPrefix}${req.body.prompt}${basePromptPostfix}`);
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

// should return a prompt like this:
/* This Dragonborn character is a bard of eloquence, wearing leather armor and boasting scales that more closely match the vibrant blue of their dragon ancestor. They stand proudly at 6½ feet tall, with strong talon-like claws and a strong, muscular build. Their scales shimmer with a metallic blue hue, reflecting the light and giving them a regal and powerful presence. Their facial features are sharp and angular, representing the unique dragon ancestry of this Dragonborn. */

export default generateAction;
