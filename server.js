
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const favQuote = process.env.FAVQUOTE;
async function main() {
  while(true) {
    console.log("$favQuote!");
    await sleep(5000);
  }
}

main();
