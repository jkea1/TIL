import { printHearts } from './domains/Heart.js'
import { inputHeartNumber } from './views/inputs.js'

async function main() {
  const heartNumber = await inputHeartNumber()

  console.log(printHearts(heartNumber))
}

main()
