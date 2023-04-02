import { useEffect, useState } from "react";
import { getAccount } from "../utils/wallet";
import { connectWallet } from "../utils/wallet";
const Navbar = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      const activeAccount=await getAccount()
      // TODO 5.b - Get the active account
      setAccount(activeAccount);
    })();
  }, []);

  // TODO 4.a - Complete onConnectWallet function
  const onConnectWallet = async () => {
await connectWallet();
const activeAccount=await getAccount();
setAccount(activeAccount)
  };

  return (
    <div className="navbar navbar-dark bg-dark fixed-top bgcolor-pink ">
      <div className="container py-2">
        <a href="/" className="navbar-brand">
          Tezos Lottery
        </a>
        <div className="d-flex">
          {/* TODO 4.b - Call connectWallet function onClick  */}
          <button className="btn btn-outline-info" onClick={onConnectWallet}>
            {/* TODO 5.a - Show account address if wallet is connected */}
            {account?account: "Connect Wallet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
