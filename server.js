const FAVORITE_INSTRUCTOR = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVORITE_INSTRUCTOR} rocks!`);
    //console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
