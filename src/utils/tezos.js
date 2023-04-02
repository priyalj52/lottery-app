// TODO 1 - Setup Tezos Toolkit

// TODO 3 - Specify wallet provider for Tezos instance
import { TezosToolkit } from "@taquito/taquito";
import { wallet } from "./wallet";
export const tezos=new TezosToolkit("https://ghostnet.smartpy.io");

tezos.setWalletProvider(wallet);
