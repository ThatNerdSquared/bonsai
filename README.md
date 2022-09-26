# Bonsai: A Discord bot for calm.

### This project is in its very, very, early stages. Check back in later for a more polished bot that you can add to your server.


## Dependencies
- OpenSSL (`brew install openssl` on macOS)
- Boost (`brew install boost` on macOS)
- DPP (included as submodule)

## Setup
```bash
brew install openssl
brew install boost
git clone --recurse-submodules https://github.com/ThatNerdSquared/bonsai.git
mkdir cmake-build-debug
cd cmake-build-debug
cmake ..
cmake --build .
```

## Setup
*Note: these instructions may or may not work. Did I mention the project was in
its early stages?* 😉
1) Follow steps 1-3 [here](https://developers.cloudflare.com/workers/get-started/guide/)
2)
```bash
git clone https://github.com/ThatNerdSquared/bonsai.git
npm ci
wrangler secret put APPLICATION_ID
# input your application ID when instructed
wrangler secret put APPLICATION_SECRET
# input your bot token when instructed
wrangler secret put PUBLIC_KEY
# input your application public key when instructed
npm run deploy
```