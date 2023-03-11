import { ethers, network } from "hardhat";
import dotenv from "dotenv";

import { verify } from "../utils/verify";

dotenv.config();

const _metadataUri = process.env.METADATA_URL;

async function deploy(name: string, ...params: [string]) {
  const contractFactory = await ethers.getContractFactory(name);

  return await contractFactory.deploy(...params).then((f) => f.deployed());
}

async function main() {
  const [admin] = await ethers.getSigners();

  console.log(`Deploying a smart contract...`);

  const AVAXGods = (await deploy("AVAXGods", _metadataUri as string)).connect(
    admin
  );

  console.log({ AVAXGods: AVAXGods.address });

  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");
    await AVAXGods.deployTransaction.wait(6);
    await verify(AVAXGods.address, [_metadataUri as string]);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
