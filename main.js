const fs = require('node:fs/promises');
const path = require('node:path');

const monologue = `Captain, I remember your grandfather. He chained me beneath this lake with a bell. It still rings.

At dawn, I open the dam. The valley floods; every bell in my drowned kingdom rings again. I promised them that. Promises are the one thing the dead still expect on time.

No, don't draw your sword. That scabbard is split. I can't have you bleeding on the map; the ink runs.

Three centuries to plan, and the council wants another meeting. Kneel if you like. I had the throne lowered. It saves us both the stairs.

You may ring the bell yourself, Captain. Your grandfather never got the chance.`;

async function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, 'entry.txt'), monologue, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
