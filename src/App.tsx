import WormholeConnect, {
  WormholeConnectConfig,
  nttRoutes,
  WormholeConnectTheme,
} from '@wormhole-foundation/wormhole-connect';

const wormholeConfig: WormholeConnectConfig = {
  network: 'Testnet',
  chains: ['Sepolia', 'BaseSepolia'],
  tokens: ['BBYsep', 'BBYbase'],
  ui: {
    title: 'Boys Club NTT UI',
    // defaultInputs: {
    //   fromChain: 'Sepolia',
    //   toChain: 'Solana'
    // },
    showHamburgerMenu: false,
  },
  // TODO: use a private RPC for mainnet
  // rpcs: {
  //   Solana: 'https://mainnet.helius-rpc.com/?api-key=$KEY',
  // },
  routes: [
    ...nttRoutes({
      tokens: {
        BBY_NTT: [
          {
            chain: 'Sepolia',
            manager: '0x2Dc2D212843529F14c907A0b81a54f58C1f76018',
            token: '0xE28732F61D31040cE986D7903CADF76e9e2feAff',
            transceiver: [
              {
                address: '0x12C3187d4D1A82272fBa748D38190BdB17cB190a',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'BaseSepolia',
            manager: '0xaC534d659Baa2813CF3Ed2Ec91D23d0013371315',
            token: '0xd8721E63D8455de281D49F7121893d5F82D6403A',
            transceiver: [
              {
                address: '0xcc7Bdbf2Eda004FBd5189d1316896a573C127F5F',
                type: 'wormhole',
              },
            ],
          },
        ],
      },
    }),
  ],
  tokensConfig: {
    BBYsep: {
      key: 'BBYsep',
      symbol: 'BBY',
      nativeChain: 'Sepolia',
      displayName: 'BBY',
      tokenId: {
        chain: 'Sepolia',
        address: '0xE28732F61D31040cE986D7903CADF76e9e2feAff'
      },
      coinGeckoId: 'wormhole',
      icon: 'https://wormhole.com/token.png',
      decimals: 18
    },
    BBYbase: {
      key: 'BBYbase',
      symbol: 'BBY',
      nativeChain: 'BaseSepolia',
      displayName: 'BBY',
      tokenId: {
        chain: 'BaseSepolia',
        address: '0xd8721E63D8455de281D49F7121893d5F82D6403A'
      },
      coinGeckoId: 'wormhole',
      icon: 'https://wormhole.com/token.png',
      decimals: 18
    }
  }
}

function App() {
  const theme: WormholeConnectTheme = {
    mode: 'dark',
    primary: '#78c4b6',
  };

  return (
    <div>
      <WormholeConnect config={wormholeConfig} theme={theme} />
    </div>
  )
}
export default App
