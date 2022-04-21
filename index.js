//  import all these modules
const {
          Connection,
          PublicKey,
          clusterApiUrl,
          Keypair,
          LAMPORTS_PER_SOL

} = require("@solana/web3.js")

// create new wallet

const wallet = new Keypair() 

// Retrieve your wallet's credentials

const publicKey = new PublicKey(wallet._kerpair.publicKey)
const secretKey = wallet._kerpair.secretKey

// Get balance wallet
const getWalletBalance = async() => {
          try {
                    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
                    const walletBalance = await connection.getBalance(publicKey)
                    console.log('wallet balance is ${walletBalance}')
          } catch(err) {
                    console.error(err)
          }
}
const airDropSol = async() => {
          try {
                    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
                    const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL)
                    await connection.confirmTransaction(fromAirDropSignature)

          } catch(err) {
                    console.error(err)
          }
}
const main = async() => {
          await getWalletBalance()
          await airDropSol()
          await getWalletBalance()
}
main()
