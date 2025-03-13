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
            manager: '0xbD1Dd73b5240A1Ad975ed696d94774a579e808B0',
            token: '0xE0D050DE52dC7B8855641E4F77aBF68644D38cf9',
            transceiver: [
              {
                address: '0xcc7Bdbf2Eda004FBd5189d1316896a573C127F5F',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'BaseSepolia',
            manager: '0xbD1Dd73b5240A1Ad975ed696d94774a579e808B0',
            token: '0xE0D050DE52dC7B8855641E4F77aBF68644D38cf9',
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
        address: '0xE0D050DE52dC7B8855641E4F77aBF68644D38cf9'
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
        address: '0xE0D050DE52dC7B8855641E4F77aBF68644D38cf9'
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
