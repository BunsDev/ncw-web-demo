import { FireblocksNCW, IKeyDescriptor, TMPCAlgorithm } from "@fireblocks/ncw-js-sdk";
import { CreateWeb3ConnectionResponse, ITransactionData, Web3Session } from "./services/ApiService";
import { TAsyncActionStatus, TFireblocksNCWStatus } from "./AppStore";

export interface IAppState {
  automateInitialization: boolean;
  userId: string | null;
  deviceId: string;
  walletId: string | null;
  txs: ITransactionData[];
  web3Connections: Web3Session[];
  pendingWeb3Connection: CreateWeb3ConnectionResponse | null;
  appStoreInitialized: boolean;
  loginToDemoAppServerStatus: TAsyncActionStatus;
  assignDeviceStatus: TAsyncActionStatus;
  fireblocksNCW: FireblocksNCW | null;
  fireblocksNCWStatus: TFireblocksNCWStatus;
  keysStatus: Record<TMPCAlgorithm, IKeyDescriptor> | null;
  passphrase: string | null;
  initAppStore: (token: string) => void;
  disposeAppStore: () => void;
  loginToDemoAppServer: () => void;
  assignCurrentDevice: () => Promise<void>;
  generateNewDeviceId: () => Promise<void>;
  createTransaction: () => Promise<void>;
  takeover: () => Promise<void>;
  setPassphrase: (passphrase: string) => void;
  regeneratePassphrase: () => void;
  initFireblocksNCW: () => Promise<void>;
  disposeFireblocksNCW: () => void;
  getWeb3Connections: () => Promise<void>;
  createWeb3Connection: (uri: string) => Promise<void>;
  approveWeb3Connection: () => Promise<void>;
  denyWeb3Connection: () => Promise<void>;
  removeWeb3Connection: (sessionId: string) => Promise<void>;
}
