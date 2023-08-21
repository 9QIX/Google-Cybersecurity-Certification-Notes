'use strict';

var require$$0 = require('electron');
var EventEmitter = require('events');
var require$$0$1 = require('timers');
var net = require('net');
var obsidian = require('obsidian');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var net__default = /*#__PURE__*/_interopDefaultLegacy(net);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var require$$1 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

let register;
try {
  const { app } = require$$0__default["default"];
  register = app.setAsDefaultProtocolClient.bind(app);
} catch (err) {
  try {
    register = require$$1;
  } catch (e) {} // eslint-disable-line no-empty
}

if (typeof register !== 'function') {
  register = () => false;
}

function pid() {
  if (typeof process !== 'undefined') {
    return process.pid;
  }
  return null;
}

const uuid4122 = () => {
  let uuid = '';
  for (let i = 0; i < 32; i += 1) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    let n;
    if (i === 12) {
      n = 4;
    } else {
      const random = Math.random() * 16 | 0;
      if (i === 16) {
        n = (random & 3) | 0;
      } else {
        n = random;
      }
    }
    uuid += n.toString(16);
  }
  return uuid;
};

var util = {
  pid,
  register,
  uuid: uuid4122,
};

var browser$2 = createCommonjsModule(function (module, exports) {

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof commonjsGlobal !== 'undefined') { return commonjsGlobal; }
	throw new Error('unable to locate global object');
};

var globalObject = getGlobal();

module.exports = exports = globalObject.fetch;

// Needed for TypeScript and Webpack.
if (globalObject.fetch) {
	exports.default = globalObject.fetch.bind(globalObject);
}

exports.Headers = globalObject.Headers;
exports.Request = globalObject.Request;
exports.Response = globalObject.Response;
});

const { uuid: uuid$1 } = util;

const OPCodes = {
  HANDSHAKE: 0,
  FRAME: 1,
  CLOSE: 2,
  PING: 3,
  PONG: 4,
};

function getIPCPath(id) {
  if (process.platform === 'win32') {
    return `\\\\?\\pipe\\discord-ipc-${id}`;
  }
  const { env: { XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP } } = process;
  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || '/tmp';
  return `${prefix.replace(/\/$/, '')}/discord-ipc-${id}`;
}

function getIPC(id = 0) {
  return new Promise((resolve, reject) => {
    const path = getIPCPath(id);
    const onerror = () => {
      if (id < 10) {
        resolve(getIPC(id + 1));
      } else {
        reject(new Error('Could not connect'));
      }
    };
    const sock = net__default["default"].createConnection(path, () => {
      sock.removeListener('error', onerror);
      resolve(sock);
    });
    sock.once('error', onerror);
  });
}

async function findEndpoint(tries = 0) {
  if (tries > 30) {
    throw new Error('Could not find endpoint');
  }
  const endpoint = `http://127.0.0.1:${6463 + (tries % 10)}`;
  try {
    const r = await browser$2(endpoint);
    if (r.status === 404) {
      return endpoint;
    }
    return findEndpoint(tries + 1);
  } catch (e) {
    return findEndpoint(tries + 1);
  }
}

function encode(op, data) {
  data = JSON.stringify(data);
  const len = Buffer.byteLength(data);
  const packet = Buffer.alloc(8 + len);
  packet.writeInt32LE(op, 0);
  packet.writeInt32LE(len, 4);
  packet.write(data, 8, len);
  return packet;
}

const working = {
  full: '',
  op: undefined,
};

function decode(socket, callback) {
  const packet = socket.read();
  if (!packet) {
    return;
  }

  let { op } = working;
  let raw;
  if (working.full === '') {
    op = working.op = packet.readInt32LE(0);
    const len = packet.readInt32LE(4);
    raw = packet.slice(8, len + 8);
  } else {
    raw = packet.toString();
  }

  try {
    const data = JSON.parse(working.full + raw);
    callback({ op, data }); // eslint-disable-line callback-return
    working.full = '';
    working.op = undefined;
  } catch (err) {
    working.full += raw;
  }

  decode(socket, callback);
}

class IPCTransport extends EventEmitter__default["default"] {
  constructor(client) {
    super();
    this.client = client;
    this.socket = null;
  }

  async connect() {
    const socket = this.socket = await getIPC();
    socket.on('close', this.onClose.bind(this));
    socket.on('error', this.onClose.bind(this));
    this.emit('open');
    socket.write(encode(OPCodes.HANDSHAKE, {
      v: 1,
      client_id: this.client.clientId,
    }));
    socket.pause();
    socket.on('readable', () => {
      decode(socket, ({ op, data }) => {
        switch (op) {
          case OPCodes.PING:
            this.send(data, OPCodes.PONG);
            break;
          case OPCodes.FRAME:
            if (!data) {
              return;
            }
            if (data.cmd === 'AUTHORIZE' && data.evt !== 'ERROR') {
              findEndpoint()
                .then((endpoint) => {
                  this.client.request.endpoint = endpoint;
                })
                .catch((e) => {
                  this.client.emit('error', e);
                });
            }
            this.emit('message', data);
            break;
          case OPCodes.CLOSE:
            this.emit('close', data);
            break;
          default:
            break;
        }
      });
    });
  }

  onClose(e) {
    this.emit('close', e);
  }

  send(data, op = OPCodes.FRAME) {
    this.socket.write(encode(op, data));
  }

  async close() {
    return new Promise((r) => {
      this.once('close', r);
      this.send({}, OPCodes.CLOSE);
      this.socket.end();
    });
  }

  ping() {
    this.send(uuid$1(), OPCodes.PING);
  }
}

var ipc = IPCTransport;
var encode_1 = encode;
var decode_1 = decode;
ipc.encode = encode_1;
ipc.decode = decode_1;

function keyMirror(arr) {
  const tmp = {};
  for (const value of arr) {
    tmp[value] = value;
  }
  return tmp;
}


var browser$1 = typeof window !== 'undefined';

var RPCCommands$1 = keyMirror([
  'DISPATCH',
  'AUTHORIZE',
  'AUTHENTICATE',
  'GET_GUILD',
  'GET_GUILDS',
  'GET_CHANNEL',
  'GET_CHANNELS',
  'CREATE_CHANNEL_INVITE',
  'GET_RELATIONSHIPS',
  'GET_USER',
  'SUBSCRIBE',
  'UNSUBSCRIBE',
  'SET_USER_VOICE_SETTINGS',
  'SET_USER_VOICE_SETTINGS_2',
  'SELECT_VOICE_CHANNEL',
  'GET_SELECTED_VOICE_CHANNEL',
  'SELECT_TEXT_CHANNEL',
  'GET_VOICE_SETTINGS',
  'SET_VOICE_SETTINGS_2',
  'SET_VOICE_SETTINGS',
  'CAPTURE_SHORTCUT',
  'SET_ACTIVITY',
  'SEND_ACTIVITY_JOIN_INVITE',
  'CLOSE_ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_INVITE_USER',
  'ACCEPT_ACTIVITY_INVITE',
  'INVITE_BROWSER',
  'DEEP_LINK',
  'CONNECTIONS_CALLBACK',
  'BRAINTREE_POPUP_BRIDGE_CALLBACK',
  'GIFT_CODE_BROWSER',
  'GUILD_TEMPLATE_BROWSER',
  'OVERLAY',
  'BROWSER_HANDOFF',
  'SET_CERTIFIED_DEVICES',
  'GET_IMAGE',
  'CREATE_LOBBY',
  'UPDATE_LOBBY',
  'DELETE_LOBBY',
  'UPDATE_LOBBY_MEMBER',
  'CONNECT_TO_LOBBY',
  'DISCONNECT_FROM_LOBBY',
  'SEND_TO_LOBBY',
  'SEARCH_LOBBIES',
  'CONNECT_TO_LOBBY_VOICE',
  'DISCONNECT_FROM_LOBBY_VOICE',
  'SET_OVERLAY_LOCKED',
  'OPEN_OVERLAY_ACTIVITY_INVITE',
  'OPEN_OVERLAY_GUILD_INVITE',
  'OPEN_OVERLAY_VOICE_SETTINGS',
  'VALIDATE_APPLICATION',
  'GET_ENTITLEMENT_TICKET',
  'GET_APPLICATION_TICKET',
  'START_PURCHASE',
  'GET_SKUS',
  'GET_ENTITLEMENTS',
  'GET_NETWORKING_CONFIG',
  'NETWORKING_SYSTEM_METRICS',
  'NETWORKING_PEER_METRICS',
  'NETWORKING_CREATE_TOKEN',
  'SET_USER_ACHIEVEMENT',
  'GET_USER_ACHIEVEMENTS',
]);

var RPCEvents$1 = keyMirror([
  'CURRENT_USER_UPDATE',
  'GUILD_STATUS',
  'GUILD_CREATE',
  'CHANNEL_CREATE',
  'RELATIONSHIP_UPDATE',
  'VOICE_CHANNEL_SELECT',
  'VOICE_STATE_CREATE',
  'VOICE_STATE_DELETE',
  'VOICE_STATE_UPDATE',
  'VOICE_SETTINGS_UPDATE',
  'VOICE_SETTINGS_UPDATE_2',
  'VOICE_CONNECTION_STATUS',
  'SPEAKING_START',
  'SPEAKING_STOP',
  'GAME_JOIN',
  'GAME_SPECTATE',
  'ACTIVITY_JOIN',
  'ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_SPECTATE',
  'ACTIVITY_INVITE',
  'NOTIFICATION_CREATE',
  'MESSAGE_CREATE',
  'MESSAGE_UPDATE',
  'MESSAGE_DELETE',
  'LOBBY_DELETE',
  'LOBBY_UPDATE',
  'LOBBY_MEMBER_CONNECT',
  'LOBBY_MEMBER_DISCONNECT',
  'LOBBY_MEMBER_UPDATE',
  'LOBBY_MESSAGE',
  'CAPTURE_SHORTCUT_CHANGE',
  'OVERLAY',
  'OVERLAY_UPDATE',
  'ENTITLEMENT_CREATE',
  'ENTITLEMENT_DELETE',
  'USER_ACHIEVEMENT_UPDATE',
  'READY',
  'ERROR',
]);

var RPCErrors = {
  CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
  GET_GUILD_TIMED_OUT: 5002,
  INVALID_ACTIVITY_JOIN_REQUEST: 4012,
  INVALID_ACTIVITY_SECRET: 5005,
  INVALID_CHANNEL: 4005,
  INVALID_CLIENTID: 4007,
  INVALID_COMMAND: 4002,
  INVALID_ENTITLEMENT: 4015,
  INVALID_EVENT: 4004,
  INVALID_GIFT_CODE: 4016,
  INVALID_GUILD: 4003,
  INVALID_INVITE: 4011,
  INVALID_LOBBY: 4013,
  INVALID_LOBBY_SECRET: 4014,
  INVALID_ORIGIN: 4008,
  INVALID_PAYLOAD: 4000,
  INVALID_PERMISSIONS: 4006,
  INVALID_TOKEN: 4009,
  INVALID_USER: 4010,
  LOBBY_FULL: 5007,
  NO_ELIGIBLE_ACTIVITY: 5006,
  OAUTH2_ERROR: 5000,
  PURCHASE_CANCELED: 5008,
  PURCHASE_ERROR: 5009,
  RATE_LIMITED: 5011,
  SELECT_CHANNEL_TIMED_OUT: 5001,
  SELECT_VOICE_FORCE_REQUIRED: 5003,
  SERVICE_UNAVAILABLE: 1001,
  TRANSACTION_ABORTED: 1002,
  UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
  UNKNOWN_ERROR: 1000,
};

var RPCCloseCodes = {
  CLOSE_NORMAL: 1000,
  CLOSE_UNSUPPORTED: 1003,
  CLOSE_ABNORMAL: 1006,
  INVALID_CLIENTID: 4000,
  INVALID_ORIGIN: 4001,
  RATELIMITED: 4002,
  TOKEN_REVOKED: 4003,
  INVALID_VERSION: 4004,
  INVALID_ENCODING: 4005,
};

var LobbyTypes = {
  PRIVATE: 1,
  PUBLIC: 2,
};

var RelationshipTypes$1 = {
  NONE: 0,
  FRIEND: 1,
  BLOCKED: 2,
  PENDING_INCOMING: 3,
  PENDING_OUTGOING: 4,
  IMPLICIT: 5,
};

var constants = {
	browser: browser$1,
	RPCCommands: RPCCommands$1,
	RPCEvents: RPCEvents$1,
	RPCErrors: RPCErrors,
	RPCCloseCodes: RPCCloseCodes,
	LobbyTypes: LobbyTypes,
	RelationshipTypes: RelationshipTypes$1
};

const { browser } = constants;

// eslint-disable-next-line
const WebSocket = browser ? window.WebSocket : require$$1;

const pack = (d) => JSON.stringify(d);
const unpack = (s) => JSON.parse(s);

class WebSocketTransport extends EventEmitter__default["default"] {
  constructor(client) {
    super();
    this.client = client;
    this.ws = null;
    this.tries = 0;
  }

  async connect() {
    const port = 6463 + (this.tries % 10);
    this.tries += 1;

    this.ws = new WebSocket(
      `ws://127.0.0.1:${port}/?v=1&client_id=${this.client.clientId}`,
      browser ? undefined : { origin: this.client.options.origin },
    );
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onerror = this.onError.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
  }

  onOpen() {
    this.emit('open');
  }

  onClose(event) {
    if (!event.wasClean) {
      return;
    }
    this.emit('close', event);
  }

  onError(event) {
    try {
      this.ws.close();
    } catch {} // eslint-disable-line no-empty

    if (this.tries > 20) {
      this.emit('error', event.error);
    } else {
      setTimeout(() => {
        this.connect();
      }, 250);
    }
  }

  onMessage(event) {
    this.emit('message', unpack(event.data));
  }

  send(data) {
    this.ws.send(pack(data));
  }

  ping() {} // eslint-disable-line no-empty-function

  close() {
    return new Promise((r) => {
      this.once('close', r);
      this.ws.close();
    });
  }
}

var websocket = WebSocketTransport;

var transports = {
  ipc: ipc,
  websocket: websocket,
};

const { setTimeout: setTimeout$1, clearTimeout } = require$$0__default$1["default"];


const { RPCCommands, RPCEvents, RelationshipTypes } = constants;
const { pid: getPid, uuid } = util;

function subKey(event, args) {
  return `${event}${JSON.stringify(args)}`;
}

/**
 * @typedef {RPCClientOptions}
 * @extends {ClientOptions}
 * @prop {string} transport RPC transport. one of `ipc` or `websocket`
 */

/**
 * The main hub for interacting with Discord RPC
 * @extends {BaseClient}
 */
class RPCClient extends EventEmitter__default["default"] {
  /**
   * @param {RPCClientOptions} [options] Options for the client.
   * You must provide a transport
   */
  constructor(options = {}) {
    super();

    this.options = options;

    this.accessToken = null;
    this.clientId = null;

    /**
     * Application used in this client
     * @type {?ClientApplication}
     */
    this.application = null;

    /**
     * User used in this application
     * @type {?User}
     */
    this.user = null;

    const Transport = transports[options.transport];
    if (!Transport) {
      throw new TypeError('RPC_INVALID_TRANSPORT', options.transport);
    }

    this.fetch = (method, path, { data, query } = {}) =>
      browser$2(`${this.fetch.endpoint}${path}${query ? new URLSearchParams(query) : ''}`, {
        method,
        body: data,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }).then(async (r) => {
        const body = await r.json();
        if (!r.ok) {
          const e = new Error(r.status);
          e.body = body;
          throw e;
        }
        return body;
      });

    this.fetch.endpoint = 'https://discord.com/api';

    /**
     * Raw transport userd
     * @type {RPCTransport}
     * @private
     */
    this.transport = new Transport(this);
    this.transport.on('message', this._onRpcMessage.bind(this));

    /**
     * Map of nonces being expected from the transport
     * @type {Map}
     * @private
     */
    this._expecting = new Map();

    /**
     * Map of current subscriptions
     * @type {Map}
     * @private
     */
    this._subscriptions = new Map();

    this._connectPromise = undefined;
  }

  /**
   * Search and connect to RPC
   */
  connect(clientId) {
    if (this._connectPromise) {
      return this._connectPromise;
    }
    this._connectPromise = new Promise((resolve, reject) => {
      this.clientId = clientId;
      const timeout = setTimeout$1(() => reject(new Error('RPC_CONNECTION_TIMEOUT')), 10e3);
      timeout.unref();
      this.once('connected', () => {
        clearTimeout(timeout);
        resolve(this);
      });
      this.transport.once('close', () => {
        this._expecting.forEach((e) => {
          e.reject(new Error('connection closed'));
        });
        this.emit('disconnected');
        reject(new Error('connection closed'));
      });
      this.transport.connect().catch(reject);
    });
    return this._connectPromise;
  }

  /**
   * @typedef {RPCLoginOptions}
   * @param {string} clientId Client ID
   * @param {string} [clientSecret] Client secret
   * @param {string} [accessToken] Access token
   * @param {string} [rpcToken] RPC token
   * @param {string} [tokenEndpoint] Token endpoint
   * @param {string[]} [scopes] Scopes to authorize with
   */

  /**
   * Performs authentication flow. Automatically calls Client#connect if needed.
   * @param {RPCLoginOptions} options Options for authentication.
   * At least one property must be provided to perform login.
   * @example client.login({ clientId: '1234567', clientSecret: 'abcdef123' });
   * @returns {Promise<RPCClient>}
   */
  async login(options = {}) {
    let { clientId, accessToken } = options;
    await this.connect(clientId);
    if (!options.scopes) {
      this.emit('ready');
      return this;
    }
    if (!accessToken) {
      accessToken = await this.authorize(options);
    }
    return this.authenticate(accessToken);
  }

  /**
   * Request
   * @param {string} cmd Command
   * @param {Object} [args={}] Arguments
   * @param {string} [evt] Event
   * @returns {Promise}
   * @private
   */
  request(cmd, args, evt) {
    return new Promise((resolve, reject) => {
      const nonce = uuid();
      this.transport.send({ cmd, args, evt, nonce });
      this._expecting.set(nonce, { resolve, reject });
    });
  }

  /**
   * Message handler
   * @param {Object} message message
   * @private
   */
  _onRpcMessage(message) {
    if (message.cmd === RPCCommands.DISPATCH && message.evt === RPCEvents.READY) {
      if (message.data.user) {
        this.user = message.data.user;
      }
      this.emit('connected');
    } else if (this._expecting.has(message.nonce)) {
      const { resolve, reject } = this._expecting.get(message.nonce);
      if (message.evt === 'ERROR') {
        const e = new Error(message.data.message);
        e.code = message.data.code;
        e.data = message.data;
        reject(e);
      } else {
        resolve(message.data);
      }
      this._expecting.delete(message.nonce);
    } else {
      const subid = subKey(message.evt, message.args);
      if (!this._subscriptions.has(subid)) {
        return;
      }
      this._subscriptions.get(subid)(message.data);
    }
  }

  /**
   * Authorize
   * @param {Object} options options
   * @returns {Promise}
   * @private
   */
  async authorize({ scopes, clientSecret, rpcToken, redirectUri } = {}) {
    if (clientSecret && rpcToken === true) {
      const body = await this.fetch('POST', '/oauth2/token/rpc', {
        data: new URLSearchParams({
          client_id: this.clientId,
          client_secret: clientSecret,
        }),
      });
      rpcToken = body.rpc_token;
    }

    const { code } = await this.request('AUTHORIZE', {
      scopes,
      client_id: this.clientId,
      rpc_token: rpcToken,
    });

    const response = await this.fetch('POST', '/oauth2/token', {
      data: new URLSearchParams({
        client_id: this.clientId,
        client_secret: clientSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    return response.access_token;
  }

  /**
   * Authenticate
   * @param {string} accessToken access token
   * @returns {Promise}
   * @private
   */
  authenticate(accessToken) {
    return this.request('AUTHENTICATE', { access_token: accessToken })
      .then(({ application, user }) => {
        this.accessToken = accessToken;
        this.application = application;
        this.user = user;
        this.emit('ready');
        return this;
      });
  }


  /**
   * Fetch a guild
   * @param {Snowflake} id Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Guild>}
   */
  getGuild(id, timeout) {
    return this.request(RPCCommands.GET_GUILD, { guild_id: id, timeout });
  }

  /**
   * Fetch all guilds
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Guild>>}
   */
  getGuilds(timeout) {
    return this.request(RPCCommands.GET_GUILDS, { timeout });
  }

  /**
   * Get a channel
   * @param {Snowflake} id Channel ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Channel>}
   */
  getChannel(id, timeout) {
    return this.request(RPCCommands.GET_CHANNEL, { channel_id: id, timeout });
  }

  /**
   * Get all channels
   * @param {Snowflake} [id] Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Channel>>}
   */
  async getChannels(id, timeout) {
    const { channels } = await this.request(RPCCommands.GET_CHANNELS, {
      timeout,
      guild_id: id,
    });
    return channels;
  }

  /**
   * @typedef {CertifiedDevice}
   * @prop {string} type One of `AUDIO_INPUT`, `AUDIO_OUTPUT`, `VIDEO_INPUT`
   * @prop {string} uuid This device's Windows UUID
   * @prop {object} vendor Vendor information
   * @prop {string} vendor.name Vendor's name
   * @prop {string} vendor.url Vendor's url
   * @prop {object} model Model information
   * @prop {string} model.name Model's name
   * @prop {string} model.url Model's url
   * @prop {string[]} related Array of related product's Windows UUIDs
   * @prop {boolean} echoCancellation If the device has echo cancellation
   * @prop {boolean} noiseSuppression If the device has noise suppression
   * @prop {boolean} automaticGainControl If the device has automatic gain control
   * @prop {boolean} hardwareMute If the device has a hardware mute
   */

  /**
   * Tell discord which devices are certified
   * @param {CertifiedDevice[]} devices Certified devices to send to discord
   * @returns {Promise}
   */
  setCertifiedDevices(devices) {
    return this.request(RPCCommands.SET_CERTIFIED_DEVICES, {
      devices: devices.map((d) => ({
        type: d.type,
        id: d.uuid,
        vendor: d.vendor,
        model: d.model,
        related: d.related,
        echo_cancellation: d.echoCancellation,
        noise_suppression: d.noiseSuppression,
        automatic_gain_control: d.automaticGainControl,
        hardware_mute: d.hardwareMute,
      })),
    });
  }

  /**
   * @typedef {UserVoiceSettings}
   * @prop {Snowflake} id ID of the user these settings apply to
   * @prop {?Object} [pan] Pan settings, an object with `left` and `right` set between
   * 0.0 and 1.0, inclusive
   * @prop {?number} [volume=100] The volume
   * @prop {bool} [mute] If the user is muted
   */

  /**
   * Set the voice settings for a user, by id
   * @param {Snowflake} id ID of the user to set
   * @param {UserVoiceSettings} settings Settings
   * @returns {Promise}
   */
  setUserVoiceSettings(id, settings) {
    return this.request(RPCCommands.SET_USER_VOICE_SETTINGS, {
      user_id: id,
      pan: settings.pan,
      mute: settings.mute,
      volume: settings.volume,
    });
  }

  /**
   * Move the user to a voice channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * @param {boolean} [options.force] Force this move. This should only be done if you
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectVoiceChannel(id, { timeout, force = false } = {}) {
    return this.request(RPCCommands.SELECT_VOICE_CHANNEL, { channel_id: id, timeout, force });
  }

  /**
   * Move the user to a text channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectTextChannel(id, { timeout } = {}) {
    return this.request(RPCCommands.SELECT_TEXT_CHANNEL, { channel_id: id, timeout });
  }

  /**
   * Get current voice settings
   * @returns {Promise}
   */
  getVoiceSettings() {
    return this.request(RPCCommands.GET_VOICE_SETTINGS)
      .then((s) => ({
        automaticGainControl: s.automatic_gain_control,
        echoCancellation: s.echo_cancellation,
        noiseSuppression: s.noise_suppression,
        qos: s.qos,
        silenceWarning: s.silence_warning,
        deaf: s.deaf,
        mute: s.mute,
        input: {
          availableDevices: s.input.available_devices,
          device: s.input.device_id,
          volume: s.input.volume,
        },
        output: {
          availableDevices: s.output.available_devices,
          device: s.output.device_id,
          volume: s.output.volume,
        },
        mode: {
          type: s.mode.type,
          autoThreshold: s.mode.auto_threshold,
          threshold: s.mode.threshold,
          shortcut: s.mode.shortcut,
          delay: s.mode.delay,
        },
      }));
  }

  /**
   * Set current voice settings, overriding the current settings until this session disconnects.
   * This also locks the settings for any other rpc sessions which may be connected.
   * @param {Object} args Settings
   * @returns {Promise}
   */
  setVoiceSettings(args) {
    return this.request(RPCCommands.SET_VOICE_SETTINGS, {
      automatic_gain_control: args.automaticGainControl,
      echo_cancellation: args.echoCancellation,
      noise_suppression: args.noiseSuppression,
      qos: args.qos,
      silence_warning: args.silenceWarning,
      deaf: args.deaf,
      mute: args.mute,
      input: args.input ? {
        device_id: args.input.device,
        volume: args.input.volume,
      } : undefined,
      output: args.output ? {
        device_id: args.output.device,
        volume: args.output.volume,
      } : undefined,
      mode: args.mode ? {
        mode: args.mode.type,
        auto_threshold: args.mode.autoThreshold,
        threshold: args.mode.threshold,
        shortcut: args.mode.shortcut,
        delay: args.mode.delay,
      } : undefined,
    });
  }

  /**
   * Capture a shortcut using the client
   * The callback takes (key, stop) where `stop` is a function that will stop capturing.
   * This `stop` function must be called before disconnecting or else the user will have
   * to restart their client.
   * @param {Function} callback Callback handling keys
   * @returns {Promise<Function>}
   */
  captureShortcut(callback) {
    const subid = subKey(RPCEvents.CAPTURE_SHORTCUT_CHANGE);
    const stop = () => {
      this._subscriptions.delete(subid);
      return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: 'STOP' });
    };
    this._subscriptions.set(subid, ({ shortcut }) => {
      callback(shortcut, stop);
    });
    return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: 'START' })
      .then(() => stop);
  }

  /**
   * Sets the presence for the logged in user.
   * @param {object} args The rich presence to pass.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  setActivity(args = {}, pid = getPid()) {
    let timestamps;
    let assets;
    let party;
    let secrets;
    if (args.startTimestamp || args.endTimestamp) {
      timestamps = {
        start: args.startTimestamp,
        end: args.endTimestamp,
      };
      if (timestamps.start instanceof Date) {
        timestamps.start = Math.round(timestamps.start.getTime());
      }
      if (timestamps.end instanceof Date) {
        timestamps.end = Math.round(timestamps.end.getTime());
      }
      if (timestamps.start > 2147483647000) {
        throw new RangeError('timestamps.start must fit into a unix timestamp');
      }
      if (timestamps.end > 2147483647000) {
        throw new RangeError('timestamps.end must fit into a unix timestamp');
      }
    }
    if (
      args.largeImageKey || args.largeImageText
      || args.smallImageKey || args.smallImageText
    ) {
      assets = {
        large_image: args.largeImageKey,
        large_text: args.largeImageText,
        small_image: args.smallImageKey,
        small_text: args.smallImageText,
      };
    }
    if (args.partySize || args.partyId || args.partyMax) {
      party = { id: args.partyId };
      if (args.partySize || args.partyMax) {
        party.size = [args.partySize, args.partyMax];
      }
    }
    if (args.matchSecret || args.joinSecret || args.spectateSecret) {
      secrets = {
        match: args.matchSecret,
        join: args.joinSecret,
        spectate: args.spectateSecret,
      };
    }

    return this.request(RPCCommands.SET_ACTIVITY, {
      pid,
      activity: {
        state: args.state,
        details: args.details,
        timestamps,
        assets,
        party,
        secrets,
        buttons: args.buttons,
        instance: !!args.instance,
      },
    });
  }

  /**
   * Clears the currently set presence, if any. This will hide the "Playing X" message
   * displayed below the user's name.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  clearActivity(pid = getPid()) {
    return this.request(RPCCommands.SET_ACTIVITY, {
      pid,
    });
  }

  /**
   * Invite a user to join the game the RPC user is currently playing
   * @param {User} user The user to invite
   * @returns {Promise}
   */
  sendJoinInvite(user) {
    return this.request(RPCCommands.SEND_ACTIVITY_JOIN_INVITE, {
      user_id: user.id || user,
    });
  }

  /**
   * Request to join the game the user is playing
   * @param {User} user The user whose game you want to request to join
   * @returns {Promise}
   */
  sendJoinRequest(user) {
    return this.request(RPCCommands.SEND_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  /**
   * Reject a join request from a user
   * @param {User} user The user whose request you wish to reject
   * @returns {Promise}
   */
  closeJoinRequest(user) {
    return this.request(RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  createLobby(type, capacity, metadata) {
    return this.request(RPCCommands.CREATE_LOBBY, {
      type,
      capacity,
      metadata,
    });
  }

  updateLobby(lobby, { type, owner, capacity, metadata } = {}) {
    return this.request(RPCCommands.UPDATE_LOBBY, {
      id: lobby.id || lobby,
      type,
      owner_id: (owner && owner.id) || owner,
      capacity,
      metadata,
    });
  }

  deleteLobby(lobby) {
    return this.request(RPCCommands.DELETE_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  connectToLobby(id, secret) {
    return this.request(RPCCommands.CONNECT_TO_LOBBY, {
      id,
      secret,
    });
  }

  sendToLobby(lobby, data) {
    return this.request(RPCCommands.SEND_TO_LOBBY, {
      id: lobby.id || lobby,
      data,
    });
  }

  disconnectFromLobby(lobby) {
    return this.request(RPCCommands.DISCONNECT_FROM_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  updateLobbyMember(lobby, user, metadata) {
    return this.request(RPCCommands.UPDATE_LOBBY_MEMBER, {
      lobby_id: lobby.id || lobby,
      user_id: user.id || user,
      metadata,
    });
  }

  getRelationships() {
    const types = Object.keys(RelationshipTypes);
    return this.request(RPCCommands.GET_RELATIONSHIPS)
      .then((o) => o.relationships.map((r) => ({
        ...r,
        type: types[r.type],
      })));
  }

  /**
   * Subscribe to an event
   * @param {string} event Name of event e.g. `MESSAGE_CREATE`
   * @param {Object} [args] Args for event e.g. `{ channel_id: '1234' }`
   * @param {Function} callback Callback when an event for the subscription is triggered
   * @returns {Promise<Object>}
   */
  subscribe(event, args, callback) {
    if (!callback && typeof args === 'function') {
      callback = args;
      args = undefined;
    }
    return this.request(RPCCommands.SUBSCRIBE, args, event).then(() => {
      const subid = subKey(event, args);
      this._subscriptions.set(subid, callback);
      return {
        unsubscribe: () => this.request(RPCCommands.UNSUBSCRIBE, args, event)
          .then(() => this._subscriptions.delete(subid)),
      };
    });
  }

  /**
   * Destroy the client
   */
  async destroy() {
    await this.transport.close();
  }
}

var client = RPCClient;

var src = {
  Client: client,
  register(id) {
    return util.register(`discord-${id}`);
  },
};

var Logger = /** @class */ (function () {
    function Logger() {
        this.plugin = this.plugin;
    }
    Logger.prototype.log = function (message, showPopups) {
        if (showPopups) {
            new obsidian.Notice(message);
        }
        console.log("discordrpc: ".concat(message));
    };
    Logger.prototype.logIgnoreNoNotice = function (message) {
        new obsidian.Notice(message);
        console.log("discordrpc: ".concat(message));
    };
    return Logger;
}());

var DiscordRPCSettings = /** @class */ (function () {
    function DiscordRPCSettings() {
        this.showVaultName = true;
        this.showCurrentFileName = true;
        this.showPopups = true;
        this.customVaultName = "";
        this.showFileExtension = false;
        this.useLoadedTime = false;
        this.connectOnStart = true;
        this.autoHideStatusBar = true;
    }
    return DiscordRPCSettings;
}());
var PluginState;
(function (PluginState) {
    PluginState[PluginState["connected"] = 0] = "connected";
    PluginState[PluginState["connecting"] = 1] = "connecting";
    PluginState[PluginState["disconnected"] = 2] = "disconnected";
})(PluginState || (PluginState = {}));

var DiscordRPCSettingsTab = /** @class */ (function (_super) {
    __extends(DiscordRPCSettingsTab, _super);
    function DiscordRPCSettingsTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = new Logger();
        return _this;
    }
    DiscordRPCSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Discord Rich Presence Settings" });
        containerEl.createEl("h3", { text: "Vault Name Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Vault Name")
            .setDesc("Enable this to show the name of the vault you are working with.")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.showVaultName).onChange(function (value) {
                plugin.settings.showVaultName = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("Vault Name is now Visable");
                }
                else {
                    _this.logger.logIgnoreNoNotice("Vault Name is no longer Visable");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Set Custom Vault Name")
            .setDesc("Change the vault name shown publicly. Leave blank to use your actual vault name.")
            .addText(function (text) {
            return text.setValue(plugin.settings.customVaultName).onChange(function (value) {
                plugin.settings.customVaultName = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "File Name Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Current File Name")
            .setDesc("Enable this to show the name of the file you are working on.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showCurrentFileName)
                .onChange(function (value) {
                plugin.settings.showCurrentFileName = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("File Name is now Visable");
                }
                else {
                    _this.logger.logIgnoreNoNotice("File Name is no longer Visable");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show File Extension")
            .setDesc("Enable this to show file extension.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showFileExtension)
                .onChange(function (value) {
                plugin.settings.showFileExtension = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Time Settings" });
        new obsidian.Setting(containerEl)
            .setName("Use Obsidian Total Time")
            .setDesc("Enable to use the total time you have been using Obsidian, instead of the time spent editing a single file.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.useLoadedTime).onChange(function (value) {
                plugin.settings.useLoadedTime = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Status Bar Settings" });
        new obsidian.Setting(containerEl)
            .setName("Automatically hide Status Bar")
            .setDesc("Automatically hide status bar after successfully connecting to Discord.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.autoHideStatusBar).onChange(function (value) {
                plugin.settings.autoHideStatusBar = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Startup Settings" });
        new obsidian.Setting(containerEl)
            .setName("Automatically Connect to Discord")
            .setDesc("Automatically connect to Discord on startup. You can always click the status bar to manually connect.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.connectOnStart).onChange(function (value) {
                plugin.settings.connectOnStart = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Notice Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Notices")
            .setDesc("Enable this to show connection Notices.")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.showPopups).onChange(function (value) {
                plugin.settings.showPopups = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("Notices Enabled");
                }
                else {
                    _this.logger.logIgnoreNoNotice("Notices Disabled");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
    };
    return DiscordRPCSettingsTab;
}(obsidian.PluginSettingTab));

var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl) {
        this.statusBarEl = statusBarEl;
    }
    StatusBar.prototype.displayState = function (state, autoHide) {
        switch (state) {
            case PluginState.connected:
                this.displayConnected(autoHide ? 10000 : 0);
                break;
            case PluginState.connecting:
                this.statusBarEl.setText("Connecting to Discord...");
                break;
            case PluginState.disconnected:
                this.statusBarEl.setText("\uD83D\uDDD8 Reconnect to Discord");
                break;
        }
    };
    StatusBar.prototype.displayConnected = function (timeout) {
        var _this = this;
        this.statusBarEl.setText("\uD83C\uDF0D Connected to Discord");
        if (timeout && timeout > 0) {
            window.setTimeout(function () {
                _this.statusBarEl.setText("");
            }, timeout);
        }
        else {
            window.setTimeout(function () {
                _this.statusBarEl.setText("\uD83C\uDF0D");
            }, 5000);
        }
    };
    return StatusBar;
}());

var ObsidianDiscordRPC = /** @class */ (function (_super) {
    __extends(ObsidianDiscordRPC, _super);
    function ObsidianDiscordRPC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = new Logger();
        return _this;
    }
    ObsidianDiscordRPC.prototype.setState = function (state) {
        this.state = state;
    };
    ObsidianDiscordRPC.prototype.getState = function () {
        return this.state;
    };
    ObsidianDiscordRPC.prototype.getApp = function () {
        return this.app;
    };
    ObsidianDiscordRPC.prototype.getPluginManifest = function () {
        return this.manifest;
    };
    ObsidianDiscordRPC.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl, _a, activeLeaf_1, files;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        statusBarEl = this.addStatusBarItem();
                        this.statusBar = new StatusBar(statusBarEl);
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = (_b.sent()) || new DiscordRPCSettings();
                        this.registerEvent(this.app.workspace.on("file-open", this.onFileOpen, this));
                        this.registerDomEvent(statusBarEl, "click", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(this.getState() == PluginState.disconnected)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.connectDiscord()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        if (!(this.getState() == PluginState.connected)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.disconnectDiscord()];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        this.addSettingTab(new DiscordRPCSettingsTab(this.app, this));
                        this.addCommand({
                            id: "reconnect-discord",
                            name: "Reconnect to Discord",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.connectDiscord()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); },
                        });
                        this.addCommand({
                            id: "disconnect-discord",
                            name: "Disconnect from Discord",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.disconnectDiscord()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); },
                        });
                        if (!this.settings.connectOnStart) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.connectDiscord()];
                    case 2:
                        _b.sent();
                        activeLeaf_1 = this.app.workspace.activeLeaf;
                        files = this.app.vault.getMarkdownFiles();
                        files.forEach(function (file) {
                            if (file.basename === activeLeaf_1.getDisplayText()) {
                                _this.onFileOpen(file);
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState(PluginState.disconnected);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onFileOpen = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentFile = file;
                        if (!(this.getState() === PluginState.connected)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), file.basename, file.extension)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        this.rpc.clearActivity();
                        this.rpc.destroy();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.connectDiscord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadedTime = new Date();
                        this.rpc = new src.Client({
                            transport: "ipc",
                        });
                        this.setState(PluginState.connecting);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        this.rpc.once("ready", function () {
                            _this.setState(PluginState.connected);
                            _this.statusBar.displayState(_this.getState(), _this.settings.autoHideStatusBar);
                            _this.logger.log("Connected to Discord", _this.settings.showPopups);
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rpc.login({
                                clientId: "763813185022197831",
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), "...", "")];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a.sent();
                        this.setState(PluginState.disconnected);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        this.logger.log("Failed to connect to Discord", this.settings.showPopups);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.disconnectDiscord = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.rpc.clearActivity();
                this.rpc.destroy();
                this.setState(PluginState.disconnected);
                this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                this.logger.log("Disconnected from Discord", this.settings.showPopups);
                return [2 /*return*/];
            });
        });
    };
    ObsidianDiscordRPC.prototype.setActivity = function (vaultName, fileName, fileExtension) {
        return __awaiter(this, void 0, void 0, function () {
            var vault, file, date;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getState() === PluginState.connected)) return [3 /*break*/, 8];
                        vault = void 0;
                        if (this.settings.customVaultName === "") {
                            vault = vaultName;
                        }
                        else {
                            vault = this.settings.customVaultName;
                        }
                        file = void 0;
                        if (this.settings.showFileExtension) {
                            file = fileName + "." + fileExtension;
                        }
                        else {
                            file = fileName;
                        }
                        date = void 0;
                        if (this.settings.useLoadedTime) {
                            date = this.loadedTime;
                        }
                        else {
                            date = new Date();
                        }
                        if (!(this.settings.showVaultName && this.settings.showCurrentFileName)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.setActivity({
                                details: "Editing ".concat(file),
                                state: "Vault: ".concat(vault),
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 2:
                        if (!this.settings.showVaultName) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rpc.setActivity({
                                state: "Vault: ".concat(vault),
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!this.settings.showCurrentFileName) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.rpc.setActivity({
                                details: "Editing ".concat(file),
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rpc.setActivity({
                            startTimestamp: date,
                            largeImageKey: "logo",
                            largeImageText: "Obsidian",
                        })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return ObsidianDiscordRPC;
}(obsidian.Plugin));

module.exports = ObsidianDiscordRPC;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9kaXNjb3JkLXJwYy9zcmMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL2Jyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvaXBjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jb25zdGFudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jbGllbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL2luZGV4LmpzIiwiLi4vc3JjL2xvZ2dlci50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5ncy10YWIudHMiLCIuLi9zcmMvc3RhdHVzLWJhci50cyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xyXG4gICAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XHJcbiAgICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xyXG4gICAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XHJcbiAgICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcclxuICAgIHZhciBfLCBkb25lID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XHJcbiAgICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcclxuICAgICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xyXG4gICAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xyXG4gICAgZG9uZSA9IHRydWU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xyXG4gICAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XHJcbiAgICAgICAgdmFyIGRpc3Bvc2U7XHJcbiAgICAgICAgaWYgKGFzeW5jKSB7XHJcbiAgICAgICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xyXG4gICAgICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhc3luYykge1xyXG4gICAgICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XHJcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xyXG4gICAgZnVuY3Rpb24gZmFpbChlKSB7XHJcbiAgICAgICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xyXG4gICAgICAgIGVudi5oYXNFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWMgPSBlbnYuc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVjLmRpc3Bvc2UgJiYgcmVjLmRpc3Bvc2UuY2FsbChyZWMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZmFpbChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBfX2V4dGVuZHM6IF9fZXh0ZW5kcyxcclxuICAgIF9fYXNzaWduOiBfX2Fzc2lnbixcclxuICAgIF9fcmVzdDogX19yZXN0LFxyXG4gICAgX19kZWNvcmF0ZTogX19kZWNvcmF0ZSxcclxuICAgIF9fcGFyYW06IF9fcGFyYW0sXHJcbiAgICBfX21ldGFkYXRhOiBfX21ldGFkYXRhLFxyXG4gICAgX19hd2FpdGVyOiBfX2F3YWl0ZXIsXHJcbiAgICBfX2dlbmVyYXRvcjogX19nZW5lcmF0b3IsXHJcbiAgICBfX2NyZWF0ZUJpbmRpbmc6IF9fY3JlYXRlQmluZGluZyxcclxuICAgIF9fZXhwb3J0U3RhcjogX19leHBvcnRTdGFyLFxyXG4gICAgX192YWx1ZXM6IF9fdmFsdWVzLFxyXG4gICAgX19yZWFkOiBfX3JlYWQsXHJcbiAgICBfX3NwcmVhZDogX19zcHJlYWQsXHJcbiAgICBfX3NwcmVhZEFycmF5czogX19zcHJlYWRBcnJheXMsXHJcbiAgICBfX3NwcmVhZEFycmF5OiBfX3NwcmVhZEFycmF5LFxyXG4gICAgX19hd2FpdDogX19hd2FpdCxcclxuICAgIF9fYXN5bmNHZW5lcmF0b3I6IF9fYXN5bmNHZW5lcmF0b3IsXHJcbiAgICBfX2FzeW5jRGVsZWdhdG9yOiBfX2FzeW5jRGVsZWdhdG9yLFxyXG4gICAgX19hc3luY1ZhbHVlczogX19hc3luY1ZhbHVlcyxcclxuICAgIF9fbWFrZVRlbXBsYXRlT2JqZWN0OiBfX21ha2VUZW1wbGF0ZU9iamVjdCxcclxuICAgIF9faW1wb3J0U3RhcjogX19pbXBvcnRTdGFyLFxyXG4gICAgX19pbXBvcnREZWZhdWx0OiBfX2ltcG9ydERlZmF1bHQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldDogX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRJbjogX19jbGFzc1ByaXZhdGVGaWVsZEluLFxyXG4gICAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2U6IF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxyXG4gICAgX19kaXNwb3NlUmVzb3VyY2VzOiBfX2Rpc3Bvc2VSZXNvdXJjZXMsXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IHJlZ2lzdGVyO1xudHJ5IHtcbiAgY29uc3QgeyBhcHAgfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG4gIHJlZ2lzdGVyID0gYXBwLnNldEFzRGVmYXVsdFByb3RvY29sQ2xpZW50LmJpbmQoYXBwKTtcbn0gY2F0Y2ggKGVycikge1xuICB0cnkge1xuICAgIHJlZ2lzdGVyID0gcmVxdWlyZSgncmVnaXN0ZXItc2NoZW1lJyk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbn1cblxuaWYgKHR5cGVvZiByZWdpc3RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICByZWdpc3RlciA9ICgpID0+IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwaWQoKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5waWQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IHV1aWQ0MTIyID0gKCkgPT4ge1xuICBsZXQgdXVpZCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpICs9IDEpIHtcbiAgICBpZiAoaSA9PT0gOCB8fCBpID09PSAxMiB8fCBpID09PSAxNiB8fCBpID09PSAyMCkge1xuICAgICAgdXVpZCArPSAnLSc7XG4gICAgfVxuICAgIGxldCBuO1xuICAgIGlmIChpID09PSAxMikge1xuICAgICAgbiA9IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgICBpZiAoaSA9PT0gMTYpIHtcbiAgICAgICAgbiA9IChyYW5kb20gJiAzKSB8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuID0gcmFuZG9tO1xuICAgICAgfVxuICAgIH1cbiAgICB1dWlkICs9IG4udG9TdHJpbmcoMTYpO1xuICB9XG4gIHJldHVybiB1dWlkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBpZCxcbiAgcmVnaXN0ZXIsXG4gIHV1aWQ6IHV1aWQ0MTIyLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbFxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXG5cdC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuXHQvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cblx0aWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfVxuXHRpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfVxuXHR0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xufVxuXG52YXIgZ2xvYmFsT2JqZWN0ID0gZ2V0R2xvYmFsKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGdsb2JhbE9iamVjdC5mZXRjaDtcblxuLy8gTmVlZGVkIGZvciBUeXBlU2NyaXB0IGFuZCBXZWJwYWNrLlxuaWYgKGdsb2JhbE9iamVjdC5mZXRjaCkge1xuXHRleHBvcnRzLmRlZmF1bHQgPSBnbG9iYWxPYmplY3QuZmV0Y2guYmluZChnbG9iYWxPYmplY3QpO1xufVxuXG5leHBvcnRzLkhlYWRlcnMgPSBnbG9iYWxPYmplY3QuSGVhZGVycztcbmV4cG9ydHMuUmVxdWVzdCA9IGdsb2JhbE9iamVjdC5SZXF1ZXN0O1xuZXhwb3J0cy5SZXNwb25zZSA9IGdsb2JhbE9iamVjdC5SZXNwb25zZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmV0ID0gcmVxdWlyZSgnbmV0Jyk7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuY29uc3QgeyB1dWlkIH0gPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbmNvbnN0IE9QQ29kZXMgPSB7XG4gIEhBTkRTSEFLRTogMCxcbiAgRlJBTUU6IDEsXG4gIENMT1NFOiAyLFxuICBQSU5HOiAzLFxuICBQT05HOiA0LFxufTtcblxuZnVuY3Rpb24gZ2V0SVBDUGF0aChpZCkge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiBgXFxcXFxcXFw/XFxcXHBpcGVcXFxcZGlzY29yZC1pcGMtJHtpZH1gO1xuICB9XG4gIGNvbnN0IHsgZW52OiB7IFhER19SVU5USU1FX0RJUiwgVE1QRElSLCBUTVAsIFRFTVAgfSB9ID0gcHJvY2VzcztcbiAgY29uc3QgcHJlZml4ID0gWERHX1JVTlRJTUVfRElSIHx8IFRNUERJUiB8fCBUTVAgfHwgVEVNUCB8fCAnL3RtcCc7XG4gIHJldHVybiBgJHtwcmVmaXgucmVwbGFjZSgvXFwvJC8sICcnKX0vZGlzY29yZC1pcGMtJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBnZXRJUEMoaWQgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGdldElQQ1BhdGgoaWQpO1xuICAgIGNvbnN0IG9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBpZiAoaWQgPCAxMCkge1xuICAgICAgICByZXNvbHZlKGdldElQQyhpZCArIDEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjb25uZWN0JykpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc29jayA9IG5ldC5jcmVhdGVDb25uZWN0aW9uKHBhdGgsICgpID0+IHtcbiAgICAgIHNvY2sucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICByZXNvbHZlKHNvY2spO1xuICAgIH0pO1xuICAgIHNvY2sub25jZSgnZXJyb3InLCBvbmVycm9yKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRFbmRwb2ludCh0cmllcyA9IDApIHtcbiAgaWYgKHRyaWVzID4gMzApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGVuZHBvaW50Jyk7XG4gIH1cbiAgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovLzEyNy4wLjAuMTokezY0NjMgKyAodHJpZXMgJSAxMCl9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpO1xuICAgIGlmIChyLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICByZXR1cm4gZW5kcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiBmaW5kRW5kcG9pbnQodHJpZXMgKyAxKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmaW5kRW5kcG9pbnQodHJpZXMgKyAxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGUob3AsIGRhdGEpIHtcbiAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICBjb25zdCBsZW4gPSBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKTtcbiAgY29uc3QgcGFja2V0ID0gQnVmZmVyLmFsbG9jKDggKyBsZW4pO1xuICBwYWNrZXQud3JpdGVJbnQzMkxFKG9wLCAwKTtcbiAgcGFja2V0LndyaXRlSW50MzJMRShsZW4sIDQpO1xuICBwYWNrZXQud3JpdGUoZGF0YSwgOCwgbGVuKTtcbiAgcmV0dXJuIHBhY2tldDtcbn1cblxuY29uc3Qgd29ya2luZyA9IHtcbiAgZnVsbDogJycsXG4gIG9wOiB1bmRlZmluZWQsXG59O1xuXG5mdW5jdGlvbiBkZWNvZGUoc29ja2V0LCBjYWxsYmFjaykge1xuICBjb25zdCBwYWNrZXQgPSBzb2NrZXQucmVhZCgpO1xuICBpZiAoIXBhY2tldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB7IG9wIH0gPSB3b3JraW5nO1xuICBsZXQgcmF3O1xuICBpZiAod29ya2luZy5mdWxsID09PSAnJykge1xuICAgIG9wID0gd29ya2luZy5vcCA9IHBhY2tldC5yZWFkSW50MzJMRSgwKTtcbiAgICBjb25zdCBsZW4gPSBwYWNrZXQucmVhZEludDMyTEUoNCk7XG4gICAgcmF3ID0gcGFja2V0LnNsaWNlKDgsIGxlbiArIDgpO1xuICB9IGVsc2Uge1xuICAgIHJhdyA9IHBhY2tldC50b1N0cmluZygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh3b3JraW5nLmZ1bGwgKyByYXcpO1xuICAgIGNhbGxiYWNrKHsgb3AsIGRhdGEgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FsbGJhY2stcmV0dXJuXG4gICAgd29ya2luZy5mdWxsID0gJyc7XG4gICAgd29ya2luZy5vcCA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgd29ya2luZy5mdWxsICs9IHJhdztcbiAgfVxuXG4gIGRlY29kZShzb2NrZXQsIGNhbGxiYWNrKTtcbn1cblxuY2xhc3MgSVBDVHJhbnNwb3J0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLnNvY2tldCA9IG51bGw7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KCkge1xuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuc29ja2V0ID0gYXdhaXQgZ2V0SVBDKCk7XG4gICAgc29ja2V0Lm9uKCdjbG9zZScsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpKTtcbiAgICBzb2NrZXQub24oJ2Vycm9yJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICAgIHNvY2tldC53cml0ZShlbmNvZGUoT1BDb2Rlcy5IQU5EU0hBS0UsIHtcbiAgICAgIHY6IDEsXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50LmNsaWVudElkLFxuICAgIH0pKTtcbiAgICBzb2NrZXQucGF1c2UoKTtcbiAgICBzb2NrZXQub24oJ3JlYWRhYmxlJywgKCkgPT4ge1xuICAgICAgZGVjb2RlKHNvY2tldCwgKHsgb3AsIGRhdGEgfSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgICAgY2FzZSBPUENvZGVzLlBJTkc6XG4gICAgICAgICAgICB0aGlzLnNlbmQoZGF0YSwgT1BDb2Rlcy5QT05HKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT1BDb2Rlcy5GUkFNRTpcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5jbWQgPT09ICdBVVRIT1JJWkUnICYmIGRhdGEuZXZ0ICE9PSAnRVJST1InKSB7XG4gICAgICAgICAgICAgIGZpbmRFbmRwb2ludCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGVuZHBvaW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudC5yZXF1ZXN0LmVuZHBvaW50ID0gZW5kcG9pbnQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT1BDb2Rlcy5DTE9TRTpcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xvc2UnLCBkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsb3NlKGUpIHtcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgZSk7XG4gIH1cblxuICBzZW5kKGRhdGEsIG9wID0gT1BDb2Rlcy5GUkFNRSkge1xuICAgIHRoaXMuc29ja2V0LndyaXRlKGVuY29kZShvcCwgZGF0YSkpO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyKSA9PiB7XG4gICAgICB0aGlzLm9uY2UoJ2Nsb3NlJywgcik7XG4gICAgICB0aGlzLnNlbmQoe30sIE9QQ29kZXMuQ0xPU0UpO1xuICAgICAgdGhpcy5zb2NrZXQuZW5kKCk7XG4gICAgfSk7XG4gIH1cblxuICBwaW5nKCkge1xuICAgIHRoaXMuc2VuZCh1dWlkKCksIE9QQ29kZXMuUElORyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJUENUcmFuc3BvcnQ7XG5tb2R1bGUuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGtleU1pcnJvcihhcnIpIHtcbiAgY29uc3QgdG1wID0ge307XG4gIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyKSB7XG4gICAgdG1wW3ZhbHVlXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0bXA7XG59XG5cblxuZXhwb3J0cy5icm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydHMuUlBDQ29tbWFuZHMgPSBrZXlNaXJyb3IoW1xuICAnRElTUEFUQ0gnLFxuICAnQVVUSE9SSVpFJyxcbiAgJ0FVVEhFTlRJQ0FURScsXG4gICdHRVRfR1VJTEQnLFxuICAnR0VUX0dVSUxEUycsXG4gICdHRVRfQ0hBTk5FTCcsXG4gICdHRVRfQ0hBTk5FTFMnLFxuICAnQ1JFQVRFX0NIQU5ORUxfSU5WSVRFJyxcbiAgJ0dFVF9SRUxBVElPTlNISVBTJyxcbiAgJ0dFVF9VU0VSJyxcbiAgJ1NVQlNDUklCRScsXG4gICdVTlNVQlNDUklCRScsXG4gICdTRVRfVVNFUl9WT0lDRV9TRVRUSU5HUycsXG4gICdTRVRfVVNFUl9WT0lDRV9TRVRUSU5HU18yJyxcbiAgJ1NFTEVDVF9WT0lDRV9DSEFOTkVMJyxcbiAgJ0dFVF9TRUxFQ1RFRF9WT0lDRV9DSEFOTkVMJyxcbiAgJ1NFTEVDVF9URVhUX0NIQU5ORUwnLFxuICAnR0VUX1ZPSUNFX1NFVFRJTkdTJyxcbiAgJ1NFVF9WT0lDRV9TRVRUSU5HU18yJyxcbiAgJ1NFVF9WT0lDRV9TRVRUSU5HUycsXG4gICdDQVBUVVJFX1NIT1JUQ1VUJyxcbiAgJ1NFVF9BQ1RJVklUWScsXG4gICdTRU5EX0FDVElWSVRZX0pPSU5fSU5WSVRFJyxcbiAgJ0NMT1NFX0FDVElWSVRZX0pPSU5fUkVRVUVTVCcsXG4gICdBQ1RJVklUWV9JTlZJVEVfVVNFUicsXG4gICdBQ0NFUFRfQUNUSVZJVFlfSU5WSVRFJyxcbiAgJ0lOVklURV9CUk9XU0VSJyxcbiAgJ0RFRVBfTElOSycsXG4gICdDT05ORUNUSU9OU19DQUxMQkFDSycsXG4gICdCUkFJTlRSRUVfUE9QVVBfQlJJREdFX0NBTExCQUNLJyxcbiAgJ0dJRlRfQ09ERV9CUk9XU0VSJyxcbiAgJ0dVSUxEX1RFTVBMQVRFX0JST1dTRVInLFxuICAnT1ZFUkxBWScsXG4gICdCUk9XU0VSX0hBTkRPRkYnLFxuICAnU0VUX0NFUlRJRklFRF9ERVZJQ0VTJyxcbiAgJ0dFVF9JTUFHRScsXG4gICdDUkVBVEVfTE9CQlknLFxuICAnVVBEQVRFX0xPQkJZJyxcbiAgJ0RFTEVURV9MT0JCWScsXG4gICdVUERBVEVfTE9CQllfTUVNQkVSJyxcbiAgJ0NPTk5FQ1RfVE9fTE9CQlknLFxuICAnRElTQ09OTkVDVF9GUk9NX0xPQkJZJyxcbiAgJ1NFTkRfVE9fTE9CQlknLFxuICAnU0VBUkNIX0xPQkJJRVMnLFxuICAnQ09OTkVDVF9UT19MT0JCWV9WT0lDRScsXG4gICdESVNDT05ORUNUX0ZST01fTE9CQllfVk9JQ0UnLFxuICAnU0VUX09WRVJMQVlfTE9DS0VEJyxcbiAgJ09QRU5fT1ZFUkxBWV9BQ1RJVklUWV9JTlZJVEUnLFxuICAnT1BFTl9PVkVSTEFZX0dVSUxEX0lOVklURScsXG4gICdPUEVOX09WRVJMQVlfVk9JQ0VfU0VUVElOR1MnLFxuICAnVkFMSURBVEVfQVBQTElDQVRJT04nLFxuICAnR0VUX0VOVElUTEVNRU5UX1RJQ0tFVCcsXG4gICdHRVRfQVBQTElDQVRJT05fVElDS0VUJyxcbiAgJ1NUQVJUX1BVUkNIQVNFJyxcbiAgJ0dFVF9TS1VTJyxcbiAgJ0dFVF9FTlRJVExFTUVOVFMnLFxuICAnR0VUX05FVFdPUktJTkdfQ09ORklHJyxcbiAgJ05FVFdPUktJTkdfU1lTVEVNX01FVFJJQ1MnLFxuICAnTkVUV09SS0lOR19QRUVSX01FVFJJQ1MnLFxuICAnTkVUV09SS0lOR19DUkVBVEVfVE9LRU4nLFxuICAnU0VUX1VTRVJfQUNISUVWRU1FTlQnLFxuICAnR0VUX1VTRVJfQUNISUVWRU1FTlRTJyxcbl0pO1xuXG5leHBvcnRzLlJQQ0V2ZW50cyA9IGtleU1pcnJvcihbXG4gICdDVVJSRU5UX1VTRVJfVVBEQVRFJyxcbiAgJ0dVSUxEX1NUQVRVUycsXG4gICdHVUlMRF9DUkVBVEUnLFxuICAnQ0hBTk5FTF9DUkVBVEUnLFxuICAnUkVMQVRJT05TSElQX1VQREFURScsXG4gICdWT0lDRV9DSEFOTkVMX1NFTEVDVCcsXG4gICdWT0lDRV9TVEFURV9DUkVBVEUnLFxuICAnVk9JQ0VfU1RBVEVfREVMRVRFJyxcbiAgJ1ZPSUNFX1NUQVRFX1VQREFURScsXG4gICdWT0lDRV9TRVRUSU5HU19VUERBVEUnLFxuICAnVk9JQ0VfU0VUVElOR1NfVVBEQVRFXzInLFxuICAnVk9JQ0VfQ09OTkVDVElPTl9TVEFUVVMnLFxuICAnU1BFQUtJTkdfU1RBUlQnLFxuICAnU1BFQUtJTkdfU1RPUCcsXG4gICdHQU1FX0pPSU4nLFxuICAnR0FNRV9TUEVDVEFURScsXG4gICdBQ1RJVklUWV9KT0lOJyxcbiAgJ0FDVElWSVRZX0pPSU5fUkVRVUVTVCcsXG4gICdBQ1RJVklUWV9TUEVDVEFURScsXG4gICdBQ1RJVklUWV9JTlZJVEUnLFxuICAnTk9USUZJQ0FUSU9OX0NSRUFURScsXG4gICdNRVNTQUdFX0NSRUFURScsXG4gICdNRVNTQUdFX1VQREFURScsXG4gICdNRVNTQUdFX0RFTEVURScsXG4gICdMT0JCWV9ERUxFVEUnLFxuICAnTE9CQllfVVBEQVRFJyxcbiAgJ0xPQkJZX01FTUJFUl9DT05ORUNUJyxcbiAgJ0xPQkJZX01FTUJFUl9ESVNDT05ORUNUJyxcbiAgJ0xPQkJZX01FTUJFUl9VUERBVEUnLFxuICAnTE9CQllfTUVTU0FHRScsXG4gICdDQVBUVVJFX1NIT1JUQ1VUX0NIQU5HRScsXG4gICdPVkVSTEFZJyxcbiAgJ09WRVJMQVlfVVBEQVRFJyxcbiAgJ0VOVElUTEVNRU5UX0NSRUFURScsXG4gICdFTlRJVExFTUVOVF9ERUxFVEUnLFxuICAnVVNFUl9BQ0hJRVZFTUVOVF9VUERBVEUnLFxuICAnUkVBRFknLFxuICAnRVJST1InLFxuXSk7XG5cbmV4cG9ydHMuUlBDRXJyb3JzID0ge1xuICBDQVBUVVJFX1NIT1JUQ1VUX0FMUkVBRFlfTElTVEVOSU5HOiA1MDA0LFxuICBHRVRfR1VJTERfVElNRURfT1VUOiA1MDAyLFxuICBJTlZBTElEX0FDVElWSVRZX0pPSU5fUkVRVUVTVDogNDAxMixcbiAgSU5WQUxJRF9BQ1RJVklUWV9TRUNSRVQ6IDUwMDUsXG4gIElOVkFMSURfQ0hBTk5FTDogNDAwNSxcbiAgSU5WQUxJRF9DTElFTlRJRDogNDAwNyxcbiAgSU5WQUxJRF9DT01NQU5EOiA0MDAyLFxuICBJTlZBTElEX0VOVElUTEVNRU5UOiA0MDE1LFxuICBJTlZBTElEX0VWRU5UOiA0MDA0LFxuICBJTlZBTElEX0dJRlRfQ09ERTogNDAxNixcbiAgSU5WQUxJRF9HVUlMRDogNDAwMyxcbiAgSU5WQUxJRF9JTlZJVEU6IDQwMTEsXG4gIElOVkFMSURfTE9CQlk6IDQwMTMsXG4gIElOVkFMSURfTE9CQllfU0VDUkVUOiA0MDE0LFxuICBJTlZBTElEX09SSUdJTjogNDAwOCxcbiAgSU5WQUxJRF9QQVlMT0FEOiA0MDAwLFxuICBJTlZBTElEX1BFUk1JU1NJT05TOiA0MDA2LFxuICBJTlZBTElEX1RPS0VOOiA0MDA5LFxuICBJTlZBTElEX1VTRVI6IDQwMTAsXG4gIExPQkJZX0ZVTEw6IDUwMDcsXG4gIE5PX0VMSUdJQkxFX0FDVElWSVRZOiA1MDA2LFxuICBPQVVUSDJfRVJST1I6IDUwMDAsXG4gIFBVUkNIQVNFX0NBTkNFTEVEOiA1MDA4LFxuICBQVVJDSEFTRV9FUlJPUjogNTAwOSxcbiAgUkFURV9MSU1JVEVEOiA1MDExLFxuICBTRUxFQ1RfQ0hBTk5FTF9USU1FRF9PVVQ6IDUwMDEsXG4gIFNFTEVDVF9WT0lDRV9GT1JDRV9SRVFVSVJFRDogNTAwMyxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRTogMTAwMSxcbiAgVFJBTlNBQ1RJT05fQUJPUlRFRDogMTAwMixcbiAgVU5BVVRIT1JJWkVEX0ZPUl9BQ0hJRVZFTUVOVDogNTAxMCxcbiAgVU5LTk9XTl9FUlJPUjogMTAwMCxcbn07XG5cbmV4cG9ydHMuUlBDQ2xvc2VDb2RlcyA9IHtcbiAgQ0xPU0VfTk9STUFMOiAxMDAwLFxuICBDTE9TRV9VTlNVUFBPUlRFRDogMTAwMyxcbiAgQ0xPU0VfQUJOT1JNQUw6IDEwMDYsXG4gIElOVkFMSURfQ0xJRU5USUQ6IDQwMDAsXG4gIElOVkFMSURfT1JJR0lOOiA0MDAxLFxuICBSQVRFTElNSVRFRDogNDAwMixcbiAgVE9LRU5fUkVWT0tFRDogNDAwMyxcbiAgSU5WQUxJRF9WRVJTSU9OOiA0MDA0LFxuICBJTlZBTElEX0VOQ09ESU5HOiA0MDA1LFxufTtcblxuZXhwb3J0cy5Mb2JieVR5cGVzID0ge1xuICBQUklWQVRFOiAxLFxuICBQVUJMSUM6IDIsXG59O1xuXG5leHBvcnRzLlJlbGF0aW9uc2hpcFR5cGVzID0ge1xuICBOT05FOiAwLFxuICBGUklFTkQ6IDEsXG4gIEJMT0NLRUQ6IDIsXG4gIFBFTkRJTkdfSU5DT01JTkc6IDMsXG4gIFBFTkRJTkdfT1VUR09JTkc6IDQsXG4gIElNUExJQ0lUOiA1LFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCB7IGJyb3dzZXIgfSA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IFdlYlNvY2tldCA9IGJyb3dzZXIgPyB3aW5kb3cuV2ViU29ja2V0IDogcmVxdWlyZSgnd3MnKTtcblxuY29uc3QgcGFjayA9IChkKSA9PiBKU09OLnN0cmluZ2lmeShkKTtcbmNvbnN0IHVucGFjayA9IChzKSA9PiBKU09OLnBhcnNlKHMpO1xuXG5jbGFzcyBXZWJTb2NrZXRUcmFuc3BvcnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMud3MgPSBudWxsO1xuICAgIHRoaXMudHJpZXMgPSAwO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdCgpIHtcbiAgICBjb25zdCBwb3J0ID0gNjQ2MyArICh0aGlzLnRyaWVzICUgMTApO1xuICAgIHRoaXMudHJpZXMgKz0gMTtcblxuICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KFxuICAgICAgYHdzOi8vMTI3LjAuMC4xOiR7cG9ydH0vP3Y9MSZjbGllbnRfaWQ9JHt0aGlzLmNsaWVudC5jbGllbnRJZH1gLFxuICAgICAgYnJvd3NlciA/IHVuZGVmaW5lZCA6IHsgb3JpZ2luOiB0aGlzLmNsaWVudC5vcHRpb25zLm9yaWdpbiB9LFxuICAgICk7XG4gICAgdGhpcy53cy5vbm9wZW4gPSB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3Mub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3Mub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3Mub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgfVxuXG4gIG9uQ2xvc2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50Lndhc0NsZWFuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCBldmVudCk7XG4gIH1cblxuICBvbkVycm9yKGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICB9IGNhdGNoIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxuICAgIGlmICh0aGlzLnRyaWVzID4gMjApIHtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBldmVudC5lcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG5cbiAgb25NZXNzYWdlKGV2ZW50KSB7XG4gICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgdW5wYWNrKGV2ZW50LmRhdGEpKTtcbiAgfVxuXG4gIHNlbmQoZGF0YSkge1xuICAgIHRoaXMud3Muc2VuZChwYWNrKGRhdGEpKTtcbiAgfVxuXG4gIHBpbmcoKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5LWZ1bmN0aW9uXG5cbiAgY2xvc2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyKSA9PiB7XG4gICAgICB0aGlzLm9uY2UoJ2Nsb3NlJywgcik7XG4gICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXZWJTb2NrZXRUcmFuc3BvcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpcGM6IHJlcXVpcmUoJy4vaXBjJyksXG4gIHdlYnNvY2tldDogcmVxdWlyZSgnLi93ZWJzb2NrZXQnKSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgeyBzZXRUaW1lb3V0LCBjbGVhclRpbWVvdXQgfSA9IHJlcXVpcmUoJ3RpbWVycycpO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5jb25zdCB0cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzJyk7XG5jb25zdCB7IFJQQ0NvbW1hbmRzLCBSUENFdmVudHMsIFJlbGF0aW9uc2hpcFR5cGVzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuY29uc3QgeyBwaWQ6IGdldFBpZCwgdXVpZCB9ID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmZ1bmN0aW9uIHN1YktleShldmVudCwgYXJncykge1xuICByZXR1cm4gYCR7ZXZlbnR9JHtKU09OLnN0cmluZ2lmeShhcmdzKX1gO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtSUENDbGllbnRPcHRpb25zfVxuICogQGV4dGVuZHMge0NsaWVudE9wdGlvbnN9XG4gKiBAcHJvcCB7c3RyaW5nfSB0cmFuc3BvcnQgUlBDIHRyYW5zcG9ydC4gb25lIG9mIGBpcGNgIG9yIGB3ZWJzb2NrZXRgXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFpbiBodWIgZm9yIGludGVyYWN0aW5nIHdpdGggRGlzY29yZCBSUENcbiAqIEBleHRlbmRzIHtCYXNlQ2xpZW50fVxuICovXG5jbGFzcyBSUENDbGllbnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtSUENDbGllbnRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgdGhlIGNsaWVudC5cbiAgICogWW91IG11c3QgcHJvdmlkZSBhIHRyYW5zcG9ydFxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICB0aGlzLmNsaWVudElkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpY2F0aW9uIHVzZWQgaW4gdGhpcyBjbGllbnRcbiAgICAgKiBAdHlwZSB7P0NsaWVudEFwcGxpY2F0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuYXBwbGljYXRpb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVXNlciB1c2VkIGluIHRoaXMgYXBwbGljYXRpb25cbiAgICAgKiBAdHlwZSB7P1VzZXJ9XG4gICAgICovXG4gICAgdGhpcy51c2VyID0gbnVsbDtcblxuICAgIGNvbnN0IFRyYW5zcG9ydCA9IHRyYW5zcG9ydHNbb3B0aW9ucy50cmFuc3BvcnRdO1xuICAgIGlmICghVHJhbnNwb3J0KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSUENfSU5WQUxJRF9UUkFOU1BPUlQnLCBvcHRpb25zLnRyYW5zcG9ydCk7XG4gICAgfVxuXG4gICAgdGhpcy5mZXRjaCA9IChtZXRob2QsIHBhdGgsIHsgZGF0YSwgcXVlcnkgfSA9IHt9KSA9PlxuICAgICAgZmV0Y2goYCR7dGhpcy5mZXRjaC5lbmRwb2ludH0ke3BhdGh9JHtxdWVyeSA/IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpIDogJyd9YCwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5hY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbihhc3luYyAocikgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgci5qc29uKCk7XG4gICAgICAgIGlmICghci5vaykge1xuICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3Ioci5zdGF0dXMpO1xuICAgICAgICAgIGUuYm9keSA9IGJvZHk7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5mZXRjaC5lbmRwb2ludCA9ICdodHRwczovL2Rpc2NvcmQuY29tL2FwaSc7XG5cbiAgICAvKipcbiAgICAgKiBSYXcgdHJhbnNwb3J0IHVzZXJkXG4gICAgICogQHR5cGUge1JQQ1RyYW5zcG9ydH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IFRyYW5zcG9ydCh0aGlzKTtcbiAgICB0aGlzLnRyYW5zcG9ydC5vbignbWVzc2FnZScsIHRoaXMuX29uUnBjTWVzc2FnZS5iaW5kKHRoaXMpKTtcblxuICAgIC8qKlxuICAgICAqIE1hcCBvZiBub25jZXMgYmVpbmcgZXhwZWN0ZWQgZnJvbSB0aGUgdHJhbnNwb3J0XG4gICAgICogQHR5cGUge01hcH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2V4cGVjdGluZyA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIE1hcCBvZiBjdXJyZW50IHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAdHlwZSB7TWFwfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKTtcblxuICAgIHRoaXMuX2Nvbm5lY3RQcm9taXNlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhbmQgY29ubmVjdCB0byBSUENcbiAgICovXG4gIGNvbm5lY3QoY2xpZW50SWQpIHtcbiAgICBpZiAodGhpcy5fY29ubmVjdFByb21pc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0UHJvbWlzZTtcbiAgICB9XG4gICAgdGhpcy5fY29ubmVjdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKCdSUENfQ09OTkVDVElPTl9USU1FT1VUJykpLCAxMGUzKTtcbiAgICAgIHRpbWVvdXQudW5yZWYoKTtcbiAgICAgIHRoaXMub25jZSgnY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudHJhbnNwb3J0Lm9uY2UoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9leHBlY3RpbmcuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGUucmVqZWN0KG5ldyBFcnJvcignY29ubmVjdGlvbiBjbG9zZWQnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdjb25uZWN0aW9uIGNsb3NlZCcpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50cmFuc3BvcnQuY29ubmVjdCgpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtSUENMb2dpbk9wdGlvbnN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBDbGllbnQgSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjbGllbnRTZWNyZXRdIENsaWVudCBzZWNyZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2Nlc3NUb2tlbl0gQWNjZXNzIHRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcnBjVG9rZW5dIFJQQyB0b2tlblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rva2VuRW5kcG9pbnRdIFRva2VuIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzY29wZXNdIFNjb3BlcyB0byBhdXRob3JpemUgd2l0aFxuICAgKi9cblxuICAvKipcbiAgICogUGVyZm9ybXMgYXV0aGVudGljYXRpb24gZmxvdy4gQXV0b21hdGljYWxseSBjYWxscyBDbGllbnQjY29ubmVjdCBpZiBuZWVkZWQuXG4gICAqIEBwYXJhbSB7UlBDTG9naW5PcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIGF1dGhlbnRpY2F0aW9uLlxuICAgKiBBdCBsZWFzdCBvbmUgcHJvcGVydHkgbXVzdCBiZSBwcm92aWRlZCB0byBwZXJmb3JtIGxvZ2luLlxuICAgKiBAZXhhbXBsZSBjbGllbnQubG9naW4oeyBjbGllbnRJZDogJzEyMzQ1NjcnLCBjbGllbnRTZWNyZXQ6ICdhYmNkZWYxMjMnIH0pO1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSUENDbGllbnQ+fVxuICAgKi9cbiAgYXN5bmMgbG9naW4ob3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IHsgY2xpZW50SWQsIGFjY2Vzc1Rva2VuIH0gPSBvcHRpb25zO1xuICAgIGF3YWl0IHRoaXMuY29ubmVjdChjbGllbnRJZCk7XG4gICAgaWYgKCFvcHRpb25zLnNjb3Blcykge1xuICAgICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgIGFjY2Vzc1Rva2VuID0gYXdhaXQgdGhpcy5hdXRob3JpemUob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZShhY2Nlc3NUb2tlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY21kIENvbW1hbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzPXt9XSBBcmd1bWVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtldnRdIEV2ZW50XG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVxdWVzdChjbWQsIGFyZ3MsIGV2dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBub25jZSA9IHV1aWQoKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQoeyBjbWQsIGFyZ3MsIGV2dCwgbm9uY2UgfSk7XG4gICAgICB0aGlzLl9leHBlY3Rpbmcuc2V0KG5vbmNlLCB7IHJlc29sdmUsIHJlamVjdCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGhhbmRsZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgbWVzc2FnZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uUnBjTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UuY21kID09PSBSUENDb21tYW5kcy5ESVNQQVRDSCAmJiBtZXNzYWdlLmV2dCA9PT0gUlBDRXZlbnRzLlJFQURZKSB7XG4gICAgICBpZiAobWVzc2FnZS5kYXRhLnVzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbWVzc2FnZS5kYXRhLnVzZXI7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3RlZCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZXhwZWN0aW5nLmhhcyhtZXNzYWdlLm5vbmNlKSkge1xuICAgICAgY29uc3QgeyByZXNvbHZlLCByZWplY3QgfSA9IHRoaXMuX2V4cGVjdGluZy5nZXQobWVzc2FnZS5ub25jZSk7XG4gICAgICBpZiAobWVzc2FnZS5ldnQgPT09ICdFUlJPUicpIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcihtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIGUuY29kZSA9IG1lc3NhZ2UuZGF0YS5jb2RlO1xuICAgICAgICBlLmRhdGEgPSBtZXNzYWdlLmRhdGE7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUobWVzc2FnZS5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V4cGVjdGluZy5kZWxldGUobWVzc2FnZS5ub25jZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YmlkID0gc3ViS2V5KG1lc3NhZ2UuZXZ0LCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb25zLmhhcyhzdWJpZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5nZXQoc3ViaWQpKG1lc3NhZ2UuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgYXV0aG9yaXplKHsgc2NvcGVzLCBjbGllbnRTZWNyZXQsIHJwY1Rva2VuLCByZWRpcmVjdFVyaSB9ID0ge30pIHtcbiAgICBpZiAoY2xpZW50U2VjcmV0ICYmIHJwY1Rva2VuID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5mZXRjaCgnUE9TVCcsICcvb2F1dGgyL3Rva2VuL3JwYycsIHtcbiAgICAgICAgZGF0YTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIHJwY1Rva2VuID0gYm9keS5ycGNfdG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ0FVVEhPUklaRScsIHtcbiAgICAgIHNjb3BlcyxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgIHJwY190b2tlbjogcnBjVG9rZW4sXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2goJ1BPU1QnLCAnL29hdXRoMi90b2tlbicsIHtcbiAgICAgIGRhdGE6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgY29kZSxcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5hY2Nlc3NfdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogQXV0aGVudGljYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY2Nlc3NUb2tlbiBhY2Nlc3MgdG9rZW5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhdXRoZW50aWNhdGUoYWNjZXNzVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdBVVRIRU5USUNBVEUnLCB7IGFjY2Vzc190b2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAgIC50aGVuKCh7IGFwcGxpY2F0aW9uLCB1c2VyIH0pID0+IHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEZldGNoIGEgZ3VpbGRcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIEd1aWxkIElEXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF0gVGltZW91dCByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEd1aWxkPn1cbiAgICovXG4gIGdldEd1aWxkKGlkLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfR1VJTEQsIHsgZ3VpbGRfaWQ6IGlkLCB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIGFsbCBndWlsZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lb3V0XSBUaW1lb3V0IHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8Q29sbGVjdGlvbjxTbm93Zmxha2UsIEd1aWxkPj59XG4gICAqL1xuICBnZXRHdWlsZHModGltZW91dCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX0dVSUxEUywgeyB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNoYW5uZWxcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIENoYW5uZWwgSURcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lb3V0XSBUaW1lb3V0IHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8Q2hhbm5lbD59XG4gICAqL1xuICBnZXRDaGFubmVsKGlkLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfQ0hBTk5FTCwgeyBjaGFubmVsX2lkOiBpZCwgdGltZW91dCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNoYW5uZWxzXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBbaWRdIEd1aWxkIElEXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF0gVGltZW91dCByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbGxlY3Rpb248U25vd2ZsYWtlLCBDaGFubmVsPj59XG4gICAqL1xuICBhc3luYyBnZXRDaGFubmVscyhpZCwgdGltZW91dCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IGF3YWl0IHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfQ0hBTk5FTFMsIHtcbiAgICAgIHRpbWVvdXQsXG4gICAgICBndWlsZF9pZDogaWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoYW5uZWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtDZXJ0aWZpZWREZXZpY2V9XG4gICAqIEBwcm9wIHtzdHJpbmd9IHR5cGUgT25lIG9mIGBBVURJT19JTlBVVGAsIGBBVURJT19PVVRQVVRgLCBgVklERU9fSU5QVVRgXG4gICAqIEBwcm9wIHtzdHJpbmd9IHV1aWQgVGhpcyBkZXZpY2UncyBXaW5kb3dzIFVVSURcbiAgICogQHByb3Age29iamVjdH0gdmVuZG9yIFZlbmRvciBpbmZvcm1hdGlvblxuICAgKiBAcHJvcCB7c3RyaW5nfSB2ZW5kb3IubmFtZSBWZW5kb3IncyBuYW1lXG4gICAqIEBwcm9wIHtzdHJpbmd9IHZlbmRvci51cmwgVmVuZG9yJ3MgdXJsXG4gICAqIEBwcm9wIHtvYmplY3R9IG1vZGVsIE1vZGVsIGluZm9ybWF0aW9uXG4gICAqIEBwcm9wIHtzdHJpbmd9IG1vZGVsLm5hbWUgTW9kZWwncyBuYW1lXG4gICAqIEBwcm9wIHtzdHJpbmd9IG1vZGVsLnVybCBNb2RlbCdzIHVybFxuICAgKiBAcHJvcCB7c3RyaW5nW119IHJlbGF0ZWQgQXJyYXkgb2YgcmVsYXRlZCBwcm9kdWN0J3MgV2luZG93cyBVVUlEc1xuICAgKiBAcHJvcCB7Ym9vbGVhbn0gZWNob0NhbmNlbGxhdGlvbiBJZiB0aGUgZGV2aWNlIGhhcyBlY2hvIGNhbmNlbGxhdGlvblxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gbm9pc2VTdXBwcmVzc2lvbiBJZiB0aGUgZGV2aWNlIGhhcyBub2lzZSBzdXBwcmVzc2lvblxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gYXV0b21hdGljR2FpbkNvbnRyb2wgSWYgdGhlIGRldmljZSBoYXMgYXV0b21hdGljIGdhaW4gY29udHJvbFxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gaGFyZHdhcmVNdXRlIElmIHRoZSBkZXZpY2UgaGFzIGEgaGFyZHdhcmUgbXV0ZVxuICAgKi9cblxuICAvKipcbiAgICogVGVsbCBkaXNjb3JkIHdoaWNoIGRldmljZXMgYXJlIGNlcnRpZmllZFxuICAgKiBAcGFyYW0ge0NlcnRpZmllZERldmljZVtdfSBkZXZpY2VzIENlcnRpZmllZCBkZXZpY2VzIHRvIHNlbmQgdG8gZGlzY29yZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldENlcnRpZmllZERldmljZXMoZGV2aWNlcykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX0NFUlRJRklFRF9ERVZJQ0VTLCB7XG4gICAgICBkZXZpY2VzOiBkZXZpY2VzLm1hcCgoZCkgPT4gKHtcbiAgICAgICAgdHlwZTogZC50eXBlLFxuICAgICAgICBpZDogZC51dWlkLFxuICAgICAgICB2ZW5kb3I6IGQudmVuZG9yLFxuICAgICAgICBtb2RlbDogZC5tb2RlbCxcbiAgICAgICAgcmVsYXRlZDogZC5yZWxhdGVkLFxuICAgICAgICBlY2hvX2NhbmNlbGxhdGlvbjogZC5lY2hvQ2FuY2VsbGF0aW9uLFxuICAgICAgICBub2lzZV9zdXBwcmVzc2lvbjogZC5ub2lzZVN1cHByZXNzaW9uLFxuICAgICAgICBhdXRvbWF0aWNfZ2Fpbl9jb250cm9sOiBkLmF1dG9tYXRpY0dhaW5Db250cm9sLFxuICAgICAgICBoYXJkd2FyZV9tdXRlOiBkLmhhcmR3YXJlTXV0ZSxcbiAgICAgIH0pKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7VXNlclZvaWNlU2V0dGluZ3N9XG4gICAqIEBwcm9wIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB1c2VyIHRoZXNlIHNldHRpbmdzIGFwcGx5IHRvXG4gICAqIEBwcm9wIHs/T2JqZWN0fSBbcGFuXSBQYW4gc2V0dGluZ3MsIGFuIG9iamVjdCB3aXRoIGBsZWZ0YCBhbmQgYHJpZ2h0YCBzZXQgYmV0d2VlblxuICAgKiAwLjAgYW5kIDEuMCwgaW5jbHVzaXZlXG4gICAqIEBwcm9wIHs/bnVtYmVyfSBbdm9sdW1lPTEwMF0gVGhlIHZvbHVtZVxuICAgKiBAcHJvcCB7Ym9vbH0gW211dGVdIElmIHRoZSB1c2VyIGlzIG11dGVkXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZvaWNlIHNldHRpbmdzIGZvciBhIHVzZXIsIGJ5IGlkXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdXNlciB0byBzZXRcbiAgICogQHBhcmFtIHtVc2VyVm9pY2VTZXR0aW5nc30gc2V0dGluZ3MgU2V0dGluZ3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRVc2VyVm9pY2VTZXR0aW5ncyhpZCwgc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTLCB7XG4gICAgICB1c2VyX2lkOiBpZCxcbiAgICAgIHBhbjogc2V0dGluZ3MucGFuLFxuICAgICAgbXV0ZTogc2V0dGluZ3MubXV0ZSxcbiAgICAgIHZvbHVtZTogc2V0dGluZ3Mudm9sdW1lLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIHVzZXIgdG8gYSB2b2ljZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdm9pY2UgY2hhbm5lbFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVvdXRdIFRpbWVvdXQgZm9yIHRoZSBjb21tYW5kXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZm9yY2VdIEZvcmNlIHRoaXMgbW92ZS4gVGhpcyBzaG91bGQgb25seSBiZSBkb25lIGlmIHlvdVxuICAgKiBoYXZlIGV4cGxpY2l0IHBlcm1pc3Npb24gZnJvbSB0aGUgdXNlci5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZWxlY3RWb2ljZUNoYW5uZWwoaWQsIHsgdGltZW91dCwgZm9yY2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTEVDVF9WT0lDRV9DSEFOTkVMLCB7IGNoYW5uZWxfaWQ6IGlkLCB0aW1lb3V0LCBmb3JjZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSB1c2VyIHRvIGEgdGV4dCBjaGFubmVsXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdm9pY2UgY2hhbm5lbFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVvdXRdIFRpbWVvdXQgZm9yIHRoZSBjb21tYW5kXG4gICAqIGhhdmUgZXhwbGljaXQgcGVybWlzc2lvbiBmcm9tIHRoZSB1c2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbGVjdFRleHRDaGFubmVsKGlkLCB7IHRpbWVvdXQgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRUxFQ1RfVEVYVF9DSEFOTkVMLCB7IGNoYW5uZWxfaWQ6IGlkLCB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHZvaWNlIHNldHRpbmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0Vm9pY2VTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9WT0lDRV9TRVRUSU5HUylcbiAgICAgIC50aGVuKChzKSA9PiAoe1xuICAgICAgICBhdXRvbWF0aWNHYWluQ29udHJvbDogcy5hdXRvbWF0aWNfZ2Fpbl9jb250cm9sLFxuICAgICAgICBlY2hvQ2FuY2VsbGF0aW9uOiBzLmVjaG9fY2FuY2VsbGF0aW9uLFxuICAgICAgICBub2lzZVN1cHByZXNzaW9uOiBzLm5vaXNlX3N1cHByZXNzaW9uLFxuICAgICAgICBxb3M6IHMucW9zLFxuICAgICAgICBzaWxlbmNlV2FybmluZzogcy5zaWxlbmNlX3dhcm5pbmcsXG4gICAgICAgIGRlYWY6IHMuZGVhZixcbiAgICAgICAgbXV0ZTogcy5tdXRlLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGF2YWlsYWJsZURldmljZXM6IHMuaW5wdXQuYXZhaWxhYmxlX2RldmljZXMsXG4gICAgICAgICAgZGV2aWNlOiBzLmlucHV0LmRldmljZV9pZCxcbiAgICAgICAgICB2b2x1bWU6IHMuaW5wdXQudm9sdW1lLFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBhdmFpbGFibGVEZXZpY2VzOiBzLm91dHB1dC5hdmFpbGFibGVfZGV2aWNlcyxcbiAgICAgICAgICBkZXZpY2U6IHMub3V0cHV0LmRldmljZV9pZCxcbiAgICAgICAgICB2b2x1bWU6IHMub3V0cHV0LnZvbHVtZSxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZToge1xuICAgICAgICAgIHR5cGU6IHMubW9kZS50eXBlLFxuICAgICAgICAgIGF1dG9UaHJlc2hvbGQ6IHMubW9kZS5hdXRvX3RocmVzaG9sZCxcbiAgICAgICAgICB0aHJlc2hvbGQ6IHMubW9kZS50aHJlc2hvbGQsXG4gICAgICAgICAgc2hvcnRjdXQ6IHMubW9kZS5zaG9ydGN1dCxcbiAgICAgICAgICBkZWxheTogcy5tb2RlLmRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjdXJyZW50IHZvaWNlIHNldHRpbmdzLCBvdmVycmlkaW5nIHRoZSBjdXJyZW50IHNldHRpbmdzIHVudGlsIHRoaXMgc2Vzc2lvbiBkaXNjb25uZWN0cy5cbiAgICogVGhpcyBhbHNvIGxvY2tzIHRoZSBzZXR0aW5ncyBmb3IgYW55IG90aGVyIHJwYyBzZXNzaW9ucyB3aGljaCBtYXkgYmUgY29ubmVjdGVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyBTZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFZvaWNlU2V0dGluZ3MoYXJncykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX1ZPSUNFX1NFVFRJTkdTLCB7XG4gICAgICBhdXRvbWF0aWNfZ2Fpbl9jb250cm9sOiBhcmdzLmF1dG9tYXRpY0dhaW5Db250cm9sLFxuICAgICAgZWNob19jYW5jZWxsYXRpb246IGFyZ3MuZWNob0NhbmNlbGxhdGlvbixcbiAgICAgIG5vaXNlX3N1cHByZXNzaW9uOiBhcmdzLm5vaXNlU3VwcHJlc3Npb24sXG4gICAgICBxb3M6IGFyZ3MucW9zLFxuICAgICAgc2lsZW5jZV93YXJuaW5nOiBhcmdzLnNpbGVuY2VXYXJuaW5nLFxuICAgICAgZGVhZjogYXJncy5kZWFmLFxuICAgICAgbXV0ZTogYXJncy5tdXRlLFxuICAgICAgaW5wdXQ6IGFyZ3MuaW5wdXQgPyB7XG4gICAgICAgIGRldmljZV9pZDogYXJncy5pbnB1dC5kZXZpY2UsXG4gICAgICAgIHZvbHVtZTogYXJncy5pbnB1dC52b2x1bWUsXG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgb3V0cHV0OiBhcmdzLm91dHB1dCA/IHtcbiAgICAgICAgZGV2aWNlX2lkOiBhcmdzLm91dHB1dC5kZXZpY2UsXG4gICAgICAgIHZvbHVtZTogYXJncy5vdXRwdXQudm9sdW1lLFxuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIG1vZGU6IGFyZ3MubW9kZSA/IHtcbiAgICAgICAgbW9kZTogYXJncy5tb2RlLnR5cGUsXG4gICAgICAgIGF1dG9fdGhyZXNob2xkOiBhcmdzLm1vZGUuYXV0b1RocmVzaG9sZCxcbiAgICAgICAgdGhyZXNob2xkOiBhcmdzLm1vZGUudGhyZXNob2xkLFxuICAgICAgICBzaG9ydGN1dDogYXJncy5tb2RlLnNob3J0Y3V0LFxuICAgICAgICBkZWxheTogYXJncy5tb2RlLmRlbGF5LFxuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXB0dXJlIGEgc2hvcnRjdXQgdXNpbmcgdGhlIGNsaWVudFxuICAgKiBUaGUgY2FsbGJhY2sgdGFrZXMgKGtleSwgc3RvcCkgd2hlcmUgYHN0b3BgIGlzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHN0b3AgY2FwdHVyaW5nLlxuICAgKiBUaGlzIGBzdG9wYCBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgZGlzY29ubmVjdGluZyBvciBlbHNlIHRoZSB1c2VyIHdpbGwgaGF2ZVxuICAgKiB0byByZXN0YXJ0IHRoZWlyIGNsaWVudC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgaGFuZGxpbmcga2V5c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGdW5jdGlvbj59XG4gICAqL1xuICBjYXB0dXJlU2hvcnRjdXQoY2FsbGJhY2spIHtcbiAgICBjb25zdCBzdWJpZCA9IHN1YktleShSUENFdmVudHMuQ0FQVFVSRV9TSE9SVENVVF9DSEFOR0UpO1xuICAgIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmRlbGV0ZShzdWJpZCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkNBUFRVUkVfU0hPUlRDVVQsIHsgYWN0aW9uOiAnU1RPUCcgfSk7XG4gICAgfTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnNldChzdWJpZCwgKHsgc2hvcnRjdXQgfSkgPT4ge1xuICAgICAgY2FsbGJhY2soc2hvcnRjdXQsIHN0b3ApO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuQ0FQVFVSRV9TSE9SVENVVCwgeyBhY3Rpb246ICdTVEFSVCcgfSlcbiAgICAgIC50aGVuKCgpID0+IHN0b3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByZXNlbmNlIGZvciB0aGUgbG9nZ2VkIGluIHVzZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIFRoZSByaWNoIHByZXNlbmNlIHRvIHBhc3MuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcGlkXSBUaGUgYXBwbGljYXRpb24ncyBwcm9jZXNzIElELiBEZWZhdWx0cyB0byB0aGUgZXhlY3V0aW5nIHByb2Nlc3MnIFBJRC5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRBY3Rpdml0eShhcmdzID0ge30sIHBpZCA9IGdldFBpZCgpKSB7XG4gICAgbGV0IHRpbWVzdGFtcHM7XG4gICAgbGV0IGFzc2V0cztcbiAgICBsZXQgcGFydHk7XG4gICAgbGV0IHNlY3JldHM7XG4gICAgaWYgKGFyZ3Muc3RhcnRUaW1lc3RhbXAgfHwgYXJncy5lbmRUaW1lc3RhbXApIHtcbiAgICAgIHRpbWVzdGFtcHMgPSB7XG4gICAgICAgIHN0YXJ0OiBhcmdzLnN0YXJ0VGltZXN0YW1wLFxuICAgICAgICBlbmQ6IGFyZ3MuZW5kVGltZXN0YW1wLFxuICAgICAgfTtcbiAgICAgIGlmICh0aW1lc3RhbXBzLnN0YXJ0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aW1lc3RhbXBzLnN0YXJ0ID0gTWF0aC5yb3VuZCh0aW1lc3RhbXBzLnN0YXJ0LmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXN0YW1wcy5lbmQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRpbWVzdGFtcHMuZW5kID0gTWF0aC5yb3VuZCh0aW1lc3RhbXBzLmVuZC5nZXRUaW1lKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzdGFtcHMuc3RhcnQgPiAyMTQ3NDgzNjQ3MDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0aW1lc3RhbXBzLnN0YXJ0IG11c3QgZml0IGludG8gYSB1bml4IHRpbWVzdGFtcCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzdGFtcHMuZW5kID4gMjE0NzQ4MzY0NzAwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGltZXN0YW1wcy5lbmQgbXVzdCBmaXQgaW50byBhIHVuaXggdGltZXN0YW1wJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGFyZ3MubGFyZ2VJbWFnZUtleSB8fCBhcmdzLmxhcmdlSW1hZ2VUZXh0XG4gICAgICB8fCBhcmdzLnNtYWxsSW1hZ2VLZXkgfHwgYXJncy5zbWFsbEltYWdlVGV4dFxuICAgICkge1xuICAgICAgYXNzZXRzID0ge1xuICAgICAgICBsYXJnZV9pbWFnZTogYXJncy5sYXJnZUltYWdlS2V5LFxuICAgICAgICBsYXJnZV90ZXh0OiBhcmdzLmxhcmdlSW1hZ2VUZXh0LFxuICAgICAgICBzbWFsbF9pbWFnZTogYXJncy5zbWFsbEltYWdlS2V5LFxuICAgICAgICBzbWFsbF90ZXh0OiBhcmdzLnNtYWxsSW1hZ2VUZXh0LFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGFyZ3MucGFydHlTaXplIHx8IGFyZ3MucGFydHlJZCB8fCBhcmdzLnBhcnR5TWF4KSB7XG4gICAgICBwYXJ0eSA9IHsgaWQ6IGFyZ3MucGFydHlJZCB9O1xuICAgICAgaWYgKGFyZ3MucGFydHlTaXplIHx8IGFyZ3MucGFydHlNYXgpIHtcbiAgICAgICAgcGFydHkuc2l6ZSA9IFthcmdzLnBhcnR5U2l6ZSwgYXJncy5wYXJ0eU1heF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcmdzLm1hdGNoU2VjcmV0IHx8IGFyZ3Muam9pblNlY3JldCB8fCBhcmdzLnNwZWN0YXRlU2VjcmV0KSB7XG4gICAgICBzZWNyZXRzID0ge1xuICAgICAgICBtYXRjaDogYXJncy5tYXRjaFNlY3JldCxcbiAgICAgICAgam9pbjogYXJncy5qb2luU2VjcmV0LFxuICAgICAgICBzcGVjdGF0ZTogYXJncy5zcGVjdGF0ZVNlY3JldCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRVRfQUNUSVZJVFksIHtcbiAgICAgIHBpZCxcbiAgICAgIGFjdGl2aXR5OiB7XG4gICAgICAgIHN0YXRlOiBhcmdzLnN0YXRlLFxuICAgICAgICBkZXRhaWxzOiBhcmdzLmRldGFpbHMsXG4gICAgICAgIHRpbWVzdGFtcHMsXG4gICAgICAgIGFzc2V0cyxcbiAgICAgICAgcGFydHksXG4gICAgICAgIHNlY3JldHMsXG4gICAgICAgIGJ1dHRvbnM6IGFyZ3MuYnV0dG9ucyxcbiAgICAgICAgaW5zdGFuY2U6ICEhYXJncy5pbnN0YW5jZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBjdXJyZW50bHkgc2V0IHByZXNlbmNlLCBpZiBhbnkuIFRoaXMgd2lsbCBoaWRlIHRoZSBcIlBsYXlpbmcgWFwiIG1lc3NhZ2VcbiAgICogZGlzcGxheWVkIGJlbG93IHRoZSB1c2VyJ3MgbmFtZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwaWRdIFRoZSBhcHBsaWNhdGlvbidzIHByb2Nlc3MgSUQuIERlZmF1bHRzIHRvIHRoZSBleGVjdXRpbmcgcHJvY2VzcycgUElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGNsZWFyQWN0aXZpdHkocGlkID0gZ2V0UGlkKCkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9BQ1RJVklUWSwge1xuICAgICAgcGlkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludml0ZSBhIHVzZXIgdG8gam9pbiB0aGUgZ2FtZSB0aGUgUlBDIHVzZXIgaXMgY3VycmVudGx5IHBsYXlpbmdcbiAgICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSB1c2VyIHRvIGludml0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbmRKb2luSW52aXRlKHVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTkRfQUNUSVZJVFlfSk9JTl9JTlZJVEUsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHRvIGpvaW4gdGhlIGdhbWUgdGhlIHVzZXIgaXMgcGxheWluZ1xuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgVGhlIHVzZXIgd2hvc2UgZ2FtZSB5b3Ugd2FudCB0byByZXF1ZXN0IHRvIGpvaW5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZW5kSm9pblJlcXVlc3QodXNlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VORF9BQ1RJVklUWV9KT0lOX1JFUVVFU1QsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWplY3QgYSBqb2luIHJlcXVlc3QgZnJvbSBhIHVzZXJcbiAgICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSB1c2VyIHdob3NlIHJlcXVlc3QgeW91IHdpc2ggdG8gcmVqZWN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY2xvc2VKb2luUmVxdWVzdCh1c2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DTE9TRV9BQ1RJVklUWV9KT0lOX1JFUVVFU1QsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUxvYmJ5KHR5cGUsIGNhcGFjaXR5LCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuQ1JFQVRFX0xPQkJZLCB7XG4gICAgICB0eXBlLFxuICAgICAgY2FwYWNpdHksXG4gICAgICBtZXRhZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUxvYmJ5KGxvYmJ5LCB7IHR5cGUsIG93bmVyLCBjYXBhY2l0eSwgbWV0YWRhdGEgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5VUERBVEVfTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICAgIHR5cGUsXG4gICAgICBvd25lcl9pZDogKG93bmVyICYmIG93bmVyLmlkKSB8fCBvd25lcixcbiAgICAgIGNhcGFjaXR5LFxuICAgICAgbWV0YWRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVMb2JieShsb2JieSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuREVMRVRFX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0VG9Mb2JieShpZCwgc2VjcmV0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DT05ORUNUX1RPX0xPQkJZLCB7XG4gICAgICBpZCxcbiAgICAgIHNlY3JldCxcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRUb0xvYmJ5KGxvYmJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRU5EX1RPX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgZGlzY29ubmVjdEZyb21Mb2JieShsb2JieSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuRElTQ09OTkVDVF9GUk9NX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVMb2JieU1lbWJlcihsb2JieSwgdXNlciwgbWV0YWRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlVQREFURV9MT0JCWV9NRU1CRVIsIHtcbiAgICAgIGxvYmJ5X2lkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICAgIG1ldGFkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVsYXRpb25zaGlwcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKFJlbGF0aW9uc2hpcFR5cGVzKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9SRUxBVElPTlNISVBTKVxuICAgICAgLnRoZW4oKG8pID0+IG8ucmVsYXRpb25zaGlwcy5tYXAoKHIpID0+ICh7XG4gICAgICAgIC4uLnIsXG4gICAgICAgIHR5cGU6IHR5cGVzW3IudHlwZV0sXG4gICAgICB9KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgTmFtZSBvZiBldmVudCBlLmcuIGBNRVNTQUdFX0NSRUFURWBcbiAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzXSBBcmdzIGZvciBldmVudCBlLmcuIGB7IGNoYW5uZWxfaWQ6ICcxMjM0JyB9YFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB3aGVuIGFuIGV2ZW50IGZvciB0aGUgc3Vic2NyaXB0aW9uIGlzIHRyaWdnZXJlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fVxuICAgKi9cbiAgc3Vic2NyaWJlKGV2ZW50LCBhcmdzLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2sgJiYgdHlwZW9mIGFyZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gYXJncztcbiAgICAgIGFyZ3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU1VCU0NSSUJFLCBhcmdzLCBldmVudCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBzdWJpZCA9IHN1YktleShldmVudCwgYXJncyk7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnNldChzdWJpZCwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5VTlNVQlNDUklCRSwgYXJncywgZXZlbnQpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fc3Vic2NyaXB0aW9ucy5kZWxldGUoc3ViaWQpKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgY2xpZW50XG4gICAqL1xuICBhc3luYyBkZXN0cm95KCkge1xuICAgIGF3YWl0IHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSUENDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENsaWVudDogcmVxdWlyZSgnLi9jbGllbnQnKSxcbiAgcmVnaXN0ZXIoaWQpIHtcbiAgICByZXR1cm4gdXRpbC5yZWdpc3RlcihgZGlzY29yZC0ke2lkfWApO1xuICB9LFxufTtcbiIsImltcG9ydCB7IE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IE9ic2lkaWFuRGlzY29yZFJQQyBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICBwbHVnaW46IE9ic2lkaWFuRGlzY29yZFJQQyA9ICh0aGlzIGFzIGFueSkucGx1Z2luO1xuXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcsIHNob3dQb3B1cHM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc2hvd1BvcHVwcykge1xuICAgICAgbmV3IE5vdGljZShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgZGlzY29yZHJwYzogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgbG9nSWdub3JlTm9Ob3RpY2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbmV3IE5vdGljZShtZXNzYWdlKTtcbiAgICBjb25zb2xlLmxvZyhgZGlzY29yZHJwYzogJHttZXNzYWdlfWApO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGlzY29yZFJQQ1NldHRpbmdzIHtcbiAgc2hvd1ZhdWx0TmFtZTogYm9vbGVhbiA9IHRydWU7XG4gIHNob3dDdXJyZW50RmlsZU5hbWU6IGJvb2xlYW4gPSB0cnVlO1xuICBzaG93UG9wdXBzOiBib29sZWFuID0gdHJ1ZTtcbiAgY3VzdG9tVmF1bHROYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBzaG93RmlsZUV4dGVuc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuICB1c2VMb2FkZWRUaW1lOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbm5lY3RPblN0YXJ0OiBib29sZWFuID0gdHJ1ZTtcbiAgYXV0b0hpZGVTdGF0dXNCYXI6IGJvb2xlYW4gPSB0cnVlO1xufVxuXG5leHBvcnQgZW51bSBQbHVnaW5TdGF0ZSB7XG4gIGNvbm5lY3RlZCxcbiAgY29ubmVjdGluZyxcbiAgZGlzY29ubmVjdGVkLFxufVxuIiwiaW1wb3J0IHsgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJzcmMvbG9nZ2VyXCI7XG5pbXBvcnQgT2JzaWRpYW5EaXNjb3JkUlBDIGZyb20gXCJzcmMvbWFpblwiO1xuXG5leHBvcnQgY2xhc3MgRGlzY29yZFJQQ1NldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHBsdWdpbjogT2JzaWRpYW5EaXNjb3JkUlBDID0gKHRoaXMgYXMgYW55KS5wbHVnaW47XG5cbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDJcIiwgeyB0ZXh0OiBcIkRpc2NvcmQgUmljaCBQcmVzZW5jZSBTZXR0aW5nc1wiIH0pO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IFwiVmF1bHQgTmFtZSBTZXR0aW5nc1wiIH0pO1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJTaG93IFZhdWx0IE5hbWVcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIkVuYWJsZSB0aGlzIHRvIHNob3cgdGhlIG5hbWUgb2YgdGhlIHZhdWx0IHlvdSBhcmUgd29ya2luZyB3aXRoLlwiXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PlxuICAgICAgICBib29sZWFuLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5zaG93VmF1bHROYW1lKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2hvd1ZhdWx0TmFtZSA9IHZhbHVlO1xuICAgICAgICAgIHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xuXG4gICAgICAgICAgaWYgKGJvb2xlYW4uZ2V0VmFsdWUoKSkge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nSWdub3JlTm9Ob3RpY2UoXCJWYXVsdCBOYW1lIGlzIG5vdyBWaXNhYmxlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIlZhdWx0IE5hbWUgaXMgbm8gbG9uZ2VyIFZpc2FibGVcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxuICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvblxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNldCBDdXN0b20gVmF1bHQgTmFtZVwiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIFwiQ2hhbmdlIHRoZSB2YXVsdCBuYW1lIHNob3duIHB1YmxpY2x5LiBMZWF2ZSBibGFuayB0byB1c2UgeW91ciBhY3R1YWwgdmF1bHQgbmFtZS5cIlxuICAgICAgKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHQuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLmN1c3RvbVZhdWx0TmFtZSkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmN1c3RvbVZhdWx0TmFtZSA9IHZhbHVlO1xuICAgICAgICAgIHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xuXG4gICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxuICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvblxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IFwiRmlsZSBOYW1lIFNldHRpbmdzXCIgfSk7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgQ3VycmVudCBGaWxlIE5hbWVcIilcbiAgICAgIC5zZXREZXNjKFwiRW5hYmxlIHRoaXMgdG8gc2hvdyB0aGUgbmFtZSBvZiB0aGUgZmlsZSB5b3UgYXJlIHdvcmtpbmcgb24uXCIpXG4gICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PlxuICAgICAgICBib29sZWFuXG4gICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5zaG93Q3VycmVudEZpbGVOYW1lKVxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zaG93Q3VycmVudEZpbGVOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcblxuICAgICAgICAgICAgaWYgKGJvb2xlYW4uZ2V0VmFsdWUoKSkge1xuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIkZpbGUgTmFtZSBpcyBub3cgVmlzYWJsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiRmlsZSBOYW1lIGlzIG5vIGxvbmdlciBWaXNhYmxlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXG4gICAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxuICAgICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgRmlsZSBFeHRlbnNpb25cIilcbiAgICAgIC5zZXREZXNjKFwiRW5hYmxlIHRoaXMgdG8gc2hvdyBmaWxlIGV4dGVuc2lvbi5cIilcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XG4gICAgICAgIGJvb2xlYW5cbiAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dGaWxlRXh0ZW5zaW9uKVxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zaG93RmlsZUV4dGVuc2lvbiA9IHZhbHVlO1xuICAgICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcbiAgICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJUaW1lIFNldHRpbmdzXCIgfSk7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlVzZSBPYnNpZGlhbiBUb3RhbCBUaW1lXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJFbmFibGUgdG8gdXNlIHRoZSB0b3RhbCB0aW1lIHlvdSBoYXZlIGJlZW4gdXNpbmcgT2JzaWRpYW4sIGluc3RlYWQgb2YgdGhlIHRpbWUgc3BlbnQgZWRpdGluZyBhIHNpbmdsZSBmaWxlLlwiXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PiB7XG4gICAgICAgIGJvb2xlYW4uc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnVzZUxvYWRlZFRpbWUpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy51c2VMb2FkZWRUaW1lID0gdmFsdWU7XG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXG4gICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiBcIlN0YXR1cyBCYXIgU2V0dGluZ3NcIiB9KTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiQXV0b21hdGljYWxseSBoaWRlIFN0YXR1cyBCYXJcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIkF1dG9tYXRpY2FsbHkgaGlkZSBzdGF0dXMgYmFyIGFmdGVyIHN1Y2Nlc3NmdWxseSBjb25uZWN0aW5nIHRvIERpc2NvcmQuXCJcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+IHtcbiAgICAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuYXV0b0hpZGVTdGF0dXNCYXIpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvSGlkZVN0YXR1c0JhciA9IHZhbHVlO1xuICAgICAgICAgIHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xuXG4gICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxuICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvblxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJTdGFydHVwIFNldHRpbmdzXCIgfSk7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkF1dG9tYXRpY2FsbHkgQ29ubmVjdCB0byBEaXNjb3JkXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJBdXRvbWF0aWNhbGx5IGNvbm5lY3QgdG8gRGlzY29yZCBvbiBzdGFydHVwLiBZb3UgY2FuIGFsd2F5cyBjbGljayB0aGUgc3RhdHVzIGJhciB0byBtYW51YWxseSBjb25uZWN0LlwiXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PiB7XG4gICAgICAgIGJvb2xlYW4uc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLmNvbm5lY3RPblN0YXJ0KS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29ubmVjdE9uU3RhcnQgPSB2YWx1ZTtcbiAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcblxuICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcbiAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb25cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IFwiTm90aWNlIFNldHRpbmdzXCIgfSk7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgTm90aWNlc1wiKVxuICAgICAgLnNldERlc2MoXCJFbmFibGUgdGhpcyB0byBzaG93IGNvbm5lY3Rpb24gTm90aWNlcy5cIilcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XG4gICAgICAgIGJvb2xlYW4uc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dQb3B1cHMpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zaG93UG9wdXBzID0gdmFsdWU7XG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIk5vdGljZXMgRW5hYmxlZFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nSWdub3JlTm9Ob3RpY2UoXCJOb3RpY2VzIERpc2FibGVkXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcbiAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb25cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tIFwiLi9zZXR0aW5ncy9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIHtcbiAgcHJpdmF0ZSBzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5zdGF0dXNCYXJFbCA9IHN0YXR1c0JhckVsO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKHN0YXRlOiBQbHVnaW5TdGF0ZSwgYXV0b0hpZGU6IGJvb2xlYW4pIHtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIFBsdWdpblN0YXRlLmNvbm5lY3RlZDpcbiAgICAgICAgdGhpcy5kaXNwbGF5Q29ubmVjdGVkKGF1dG9IaWRlID8gMTAwMDAgOiAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBsdWdpblN0YXRlLmNvbm5lY3Rpbmc6XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgQ29ubmVjdGluZyB0byBEaXNjb3JkLi4uYCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5kaXNjb25uZWN0ZWQ6XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgXFx1ezFGNUQ4fSBSZWNvbm5lY3QgdG8gRGlzY29yZGApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5Q29ubmVjdGVkKHRpbWVvdXQ6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgXFx1ezFGMzBEfSBDb25uZWN0ZWQgdG8gRGlzY29yZGApO1xuXG4gICAgaWYgKHRpbWVvdXQgJiYgdGltZW91dCA+IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiXCIpO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBcXHV7MUYzMER9YCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJkaXNjb3JkLXJwY1wiO1xyXG5pbXBvcnQgeyBQbHVnaW4sIFBsdWdpbk1hbmlmZXN0LCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRGlzY29yZFJQQ1NldHRpbmdzLCBQbHVnaW5TdGF0ZSB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IERpc2NvcmRSUENTZXR0aW5nc1RhYiB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzLXRhYlwiO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9zdGF0dXMtYmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNpZGlhbkRpc2NvcmRSUEMgZXh0ZW5kcyBQbHVnaW4ge1xyXG4gIHB1YmxpYyBzdGF0ZTogUGx1Z2luU3RhdGU7XHJcbiAgcHVibGljIHNldHRpbmdzOiBEaXNjb3JkUlBDU2V0dGluZ3M7XHJcbiAgcHVibGljIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG4gIHB1YmxpYyBycGM6IENsaWVudDtcclxuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcbiAgcHVibGljIGN1cnJlbnRGaWxlOiBURmlsZTtcclxuICBwdWJsaWMgbG9hZGVkVGltZTogRGF0ZTtcclxuXHJcbiAgc2V0U3RhdGUoc3RhdGU6IFBsdWdpblN0YXRlKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0ZSgpOiBQbHVnaW5TdGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBcHAoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmFwcDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQbHVnaW5NYW5pZmVzdCgpOiBQbHVnaW5NYW5pZmVzdCB7XHJcbiAgICByZXR1cm4gdGhpcy5tYW5pZmVzdDtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgIGxldCBzdGF0dXNCYXJFbCA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xyXG4gICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHN0YXR1c0JhckVsKTtcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzID0gKGF3YWl0IHRoaXMubG9hZERhdGEoKSkgfHwgbmV3IERpc2NvcmRSUENTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcclxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKFwiZmlsZS1vcGVuXCIsIHRoaXMub25GaWxlT3BlbiwgdGhpcylcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckRvbUV2ZW50KHN0YXR1c0JhckVsLCBcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0U3RhdGUoKSA9PSBQbHVnaW5TdGF0ZS5kaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3REaXNjb3JkKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRTdGF0ZSgpID09IFBsdWdpblN0YXRlLmNvbm5lY3RlZCl7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5kaXNjb25uZWN0RGlzY29yZCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IERpc2NvcmRSUENTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcInJlY29ubmVjdC1kaXNjb3JkXCIsXHJcbiAgICAgIG5hbWU6IFwiUmVjb25uZWN0IHRvIERpc2NvcmRcIixcclxuICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IGF3YWl0IHRoaXMuY29ubmVjdERpc2NvcmQoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImRpc2Nvbm5lY3QtZGlzY29yZFwiLFxyXG4gICAgICBuYW1lOiBcIkRpc2Nvbm5lY3QgZnJvbSBEaXNjb3JkXCIsXHJcbiAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiBhd2FpdCB0aGlzLmRpc2Nvbm5lY3REaXNjb3JkKCksXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuY29ubmVjdE9uU3RhcnQpe1xyXG4gICAgICBhd2FpdCB0aGlzLmNvbm5lY3REaXNjb3JkKCk7XHJcblxyXG4gICAgICBsZXQgYWN0aXZlTGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xyXG4gICAgICBsZXQgZmlsZXM6IFRGaWxlW10gPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XHJcblxyXG4gICAgICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbGUuYmFzZW5hbWUgPT09IGFjdGl2ZUxlYWYuZ2V0RGlzcGxheVRleHQoKSkge1xyXG4gICAgICAgICAgdGhpcy5vbkZpbGVPcGVuKGZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZCk7XHJcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlTdGF0ZSh0aGlzLmdldFN0YXRlKCksIHRoaXMuc2V0dGluZ3MuYXV0b0hpZGVTdGF0dXNCYXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkZpbGVPcGVuKGZpbGU6IFRGaWxlKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGaWxlID0gZmlsZTtcclxuICAgIGlmICh0aGlzLmdldFN0YXRlKCkgPT09IFBsdWdpblN0YXRlLmNvbm5lY3RlZCkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNldEFjdGl2aXR5KFxyXG4gICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcclxuICAgICAgICBmaWxlLmJhc2VuYW1lLFxyXG4gICAgICAgIGZpbGUuZXh0ZW5zaW9uXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbnVubG9hZCgpIHtcclxuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgICB0aGlzLnJwYy5jbGVhckFjdGl2aXR5KCk7XHJcbiAgICB0aGlzLnJwYy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb25uZWN0RGlzY29yZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMubG9hZGVkVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBcclxuICAgIHRoaXMucnBjID0gbmV3IENsaWVudCh7XHJcbiAgICAgIHRyYW5zcG9ydDogXCJpcGNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29ubmVjdGluZyk7XHJcbiAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUodGhpcy5nZXRTdGF0ZSgpLCB0aGlzLnNldHRpbmdzLmF1dG9IaWRlU3RhdHVzQmFyKTtcclxuXHJcbiAgICB0aGlzLnJwYy5vbmNlKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmNvbm5lY3RlZCk7XHJcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlTdGF0ZSh0aGlzLmdldFN0YXRlKCksIHRoaXMuc2V0dGluZ3MuYXV0b0hpZGVTdGF0dXNCYXIpO1xyXG4gICAgICB0aGlzLmxvZ2dlci5sb2coXCJDb25uZWN0ZWQgdG8gRGlzY29yZFwiLCB0aGlzLnNldHRpbmdzLnNob3dQb3B1cHMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5ycGMubG9naW4oe1xyXG4gICAgICAgIGNsaWVudElkOiBcIjc2MzgxMzE4NTAyMjE5NzgzMVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdGhpcy5zZXRBY3Rpdml0eSh0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksIFwiLi4uXCIsIFwiXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5kaXNjb25uZWN0ZWQpO1xyXG4gICAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUodGhpcy5nZXRTdGF0ZSgpLCB0aGlzLnNldHRpbmdzLmF1dG9IaWRlU3RhdHVzQmFyKTtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKFwiRmFpbGVkIHRvIGNvbm5lY3QgdG8gRGlzY29yZFwiLCB0aGlzLnNldHRpbmdzLnNob3dQb3B1cHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGlzY29ubmVjdERpc2NvcmQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLnJwYy5jbGVhckFjdGl2aXR5KCk7XHJcbiAgICB0aGlzLnJwYy5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZCk7XHJcbiAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUodGhpcy5nZXRTdGF0ZSgpLCB0aGlzLnNldHRpbmdzLmF1dG9IaWRlU3RhdHVzQmFyKTtcclxuICAgIHRoaXMubG9nZ2VyLmxvZyhcIkRpc2Nvbm5lY3RlZCBmcm9tIERpc2NvcmRcIiwgdGhpcy5zZXR0aW5ncy5zaG93UG9wdXBzKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNldEFjdGl2aXR5KFxyXG4gICAgdmF1bHROYW1lOiBzdHJpbmcsXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgZmlsZUV4dGVuc2lvbjogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgpID09PSBQbHVnaW5TdGF0ZS5jb25uZWN0ZWQpIHtcclxuICAgICAgbGV0IHZhdWx0OiBzdHJpbmc7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmN1c3RvbVZhdWx0TmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHZhdWx0ID0gdmF1bHROYW1lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhdWx0ID0gdGhpcy5zZXR0aW5ncy5jdXN0b21WYXVsdE5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBmaWxlOiBzdHJpbmc7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dGaWxlRXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgZmlsZSA9IGZpbGVOYW1lICsgXCIuXCIgKyBmaWxlRXh0ZW5zaW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGUgPSBmaWxlTmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGRhdGU6IERhdGU7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUxvYWRlZFRpbWUpIHtcclxuICAgICAgICBkYXRlID0gdGhpcy5sb2FkZWRUaW1lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93VmF1bHROYW1lICYmIHRoaXMuc2V0dGluZ3Muc2hvd0N1cnJlbnRGaWxlTmFtZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucnBjLnNldEFjdGl2aXR5KHtcclxuICAgICAgICAgIGRldGFpbHM6IGBFZGl0aW5nICR7ZmlsZX1gLFxyXG4gICAgICAgICAgc3RhdGU6IGBWYXVsdDogJHt2YXVsdH1gLFxyXG4gICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGRhdGUsXHJcbiAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImxvZ29cIixcclxuICAgICAgICAgIGxhcmdlSW1hZ2VUZXh0OiBcIk9ic2lkaWFuXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5zaG93VmF1bHROYW1lKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ycGMuc2V0QWN0aXZpdHkoe1xyXG4gICAgICAgICAgc3RhdGU6IGBWYXVsdDogJHt2YXVsdH1gLFxyXG4gICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGRhdGUsXHJcbiAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImxvZ29cIixcclxuICAgICAgICAgIGxhcmdlSW1hZ2VUZXh0OiBcIk9ic2lkaWFuXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5zaG93Q3VycmVudEZpbGVOYW1lKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ycGMuc2V0QWN0aXZpdHkoe1xyXG4gICAgICAgICAgZGV0YWlsczogYEVkaXRpbmcgJHtmaWxlfWAsXHJcbiAgICAgICAgICBzdGFydFRpbWVzdGFtcDogZGF0ZSxcclxuICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwibG9nb1wiLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnJwYy5zZXRBY3Rpdml0eSh7XHJcbiAgICAgICAgICBzdGFydFRpbWVzdGFtcDogZGF0ZSxcclxuICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwibG9nb1wiLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsImdsb2JhbCIsInV1aWQiLCJuZXQiLCJmZXRjaCIsIkV2ZW50RW1pdHRlciIsImJyb3dzZXIiLCJSUENDb21tYW5kcyIsIlJQQ0V2ZW50cyIsIlJlbGF0aW9uc2hpcFR5cGVzIiwicmVxdWlyZSQkMSIsInNldFRpbWVvdXQiLCJyZXF1aXJlJCQyIiwiTm90aWNlIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJDbGllbnQiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBb0ZEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO0FBQ3RELFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFB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
