module.exports = {
    sidenavs: [
        ["Home"],
        ["Learn Hacash", "Introduction", "Value Proposition"],
        ["3 PoW Coins","HAC", "HACD", "BTC"],
        ["Getting Started", "Wallet", "Trading", "Full Node", "Mining"],
        ["Community", "Social Medias", "Funding", "Roadmap", "People with ㄜ", "Development"],
        ["Resources", "Information", "Projects", "Tools", "Articles", "Videos", "Documents"],
    ],

    learn: [
        "Quick Understand Hacash", "Mastering Hacash's key technologies and core values",
        "What is Hacash?", 
        `<p>Hacash is a proof-of-work and programmable crypto monetary system. It is the first cryptocurrency that both decentralizes and adjusts the money supply to keep purchasing power stable.The entire monetary system is composed of three distinct types of PoW coins: HACD, BTC, and HAC, each possessing unique attributes. Notably, HACD serves as the first PoW NFT and PoW generative art.</p>
        <p>Hacash has three layers. Layer 1 includes the ASIC-resistant X16RS mining algorithm, the Beacon Tower Protocol with 51% attack resistance, readable contracts, optional privacy, equity account model, and BTC one-way transfer. Layer 2 functions as a channel chain settlement network, enabling large-scale instant payments of HAC and BTC. Layer 3 is an application ecosystem scaling layer based on Layer 1 and Layer 2, supporting various Rollup technologies and multi-chain protocols.</p>`,
        "What are the core values of Hacash?",
        `<ul>
            <li><b>The Future World Currency</b>: Similar to the value logic of Bitcoin, Hacash has even greater potential to become the future's global circulating currency, presenting the opportunity for substantial returns on investment. Early investment may yield higher profits. Holding more shares of the new currency implies owning a larger stake in future wealth. Failing to embrace monetary change could result in wealth erosion due to the obsolescence of the old monetary system.
            </li>
            <li><b>Ultimate PoW Asset Paradigm</b>: The PoW endows digital assets with intrinsic value, making them usable as currency, constituting a disruptive asset paradigm. Hacash's three PoW coins – HAC, BTC, and HACD – form a comprehensive monetary system and digital asset framework under the PoW paradigm. Notably, HACD represents the first PoW NFT with the strongest store of value power and asset innovation.</li>
            <li><b>Compatibility, Inheritance and Scaling of Bitcoin</b>: Hacash surpasses Bitcoin in terms of technical architecture maturity, decentralization degree, and fairness of the economic model. Transitioning from Bitcoin to Hacash assists in addressing Bitcoin's challenges of poor scalability, unadjustable currency quantity, and unsustainable economic model. Hacash aims to enhance the value of both through BTC one-way transfer.</li>
            <li><b>Decentralized Financial System Based on Sound Money</b>: A sound money and financial infrastructure are paramount in the crypto industry. Within the Hacash ecosystem, built upon the most robust currency system, open decentralized currency and a financial world can be constructed through various levels of scalability technology.
            </li>
            <li><b>Cypherpunk's Historical Orthodoxy</b>: Just as Bitcoin resolved decentralization and double-spending issues, Hacash solves both decentralization and the problem of adjusting the money supply to maintain the stability of purchasing power. HAC embodies Wei Dai's B-Money, while HACD realizes Hal Finney's crypto trading card and Nick Szabo's Bit Gold. Hacash stands as the ultimate realization of historical cypherpunk ideals and objectives.</li>
        </ul>
        `,
    ],

    coins3: [
        `The Financial Ecology of Three PoW Coins in One Chain`,
        `<p>Hacash is composed of three distinct PoW coins: HAC, HACD, and BTC. If we arrange HACD, BTC, and HAC from left to right, we can observe a shift from lower to higher liquidity, from lower to higher value stability, and a decreasing level of speculation.</p>
        <p>The monetary system they form resembles the era when gold, silver, and copper served as mainstream currencies, where the interplay and utilization of these different currencies were driven by the free market.
        </p>
        <p>We can delineate these three currencies from perspectives such as divisibility, quantity, production methods, production rules, quantity adjustment, primary utility, and current circulation.</p>`,
        `<ul>
            <li><b>Primary Utility</b>: Payment settlement</li>
            <li><b>Divisibility</b>: 10^248, approaching unlimited divisibility</li>
            <li><b>Quantity</b>: Unlimited</li>
            <li><b>Supply Mechanism</b>: Supply can be increased, decreased, or maintained.<br/>
            Increase: 1. Block rewards 2. Bitcoin one-way transfer incentives 3. HACD and BTC collateralized lending 4. Layer2 payment network staking interest<br/>
            Decrease: 1. HACD auction destruction 2. Redemption and destruction of collateralized HACD and BTC 3. Destruction of interest from collateralized HACD and BTC lending 4. Destruction of transaction fees from special category transactions</li>
            <li><b>Block Reward Rules</b>: Follows the Fibonacci principle of increasing and then decreasing, with one block every 5 minutes, yielding 288 blocks per day.</li>
        </ul>
        <p>Production of the first block began on February 4, 2019.</p>
        <p>Phase One: Quantity adjusts approximately every 100,000 blocks (about 0.95 years), with gradually increasing rewards;
        Block rewards were 1 HAC in 2020, 2 HAC in 2021, 3 HAC in 2022, 5 HAC in 2023, and 8 HAC in 2024.</p>
        <p>Phase Two: Quantity adjusts approximately every 1,000,000 blocks (about 9.5 years), with gradually decreasing rewards;<br/>Entering the second phase, from 2025, the reward remains at 8 HAC for a continuous period of ten years. Starting in 2035, the reward decreases to 5 HAC, followed by 3 HAC in 2045, 2 HAC in 2055, 1 HAC in 2065, and another continuous ten years of 1 HAC from 2075.</p>
        <p>Phase Three: Ultimately settles at a constant block reward of 1 HAC.<br/>
        Within the 66 years leading up to the third phase, the total block rewards amount to 22 million. The next change in block rewards can be checked through the community tool. </p>
        <p>How to Mint: HAC follows the X16RS algorithm, which is resistant to ASIC miners. Mining began with CPUs and there is now a team that has developed GPU mining tools.</p>
        <p>Circulation: Approximately 1 million total supply, with 510,000 destroyed. Statistical data is subject to change and can be verified through the <a href="https://explorer.hacash.org">Block Explorer</a>.</p>`,
        
        `<ul>
            <li><b>Primary Utility</b>: Regulating HAC quantity, value storage, artistic creation, identity representation</li>
            <li><b>Divisibility</b>: Indivisible, each HACD consists of 6 letters.</li>
            <li><b>Total Supply</b>: Comprising 6 letters from the set "WTYUIAHXVMEKBSZN" out of 16 letters, and non-repeating, the total supply is 16^6 = 16,777,216.</li>
            <li><b>Supply Mechanism</b>: Production can be halted based on supply and demand.</li>
            <li><b>Reward Rules</b> HACD production involves mining and bidding. One HACD is produced every 5 blocks, averaging 25 minutes. Within this 5-block interval, the highest-bidding HACD is included. However, HACD mining difficulty continually increases and does not decrease, production can be halted at any time based on market conditions. A maximum of 58 HACD can be produced daily, approximately 21,000 per year. Assuming sufficient computational power is invested, it is estimated that a maximum of less than 1.7 million HACD would be mined by the year 2100.</li>
        </ul>
        <p>How to Mint: HACD follows the X16RS+Diamond mining algorithm, which is resistant to ASIC miners. CPU mining is currently predominant. If multiple miners compete to mine simultaneously, on-chain bidding is required.</p>
        <p>Circulation: Over 70,000, specific data can be verified through the <a href="https://explorer.hacash.org">Block Explorer</a>.</p>`,

        `<ul>
            <li><b>Primary Utility</b>: Regulating HAC quantity, scaling Bitcoin</li>
            <li><b>Divisibility</b>: Divisible, with divisibility of 10^8</li>
            <li><b>Total Supply</b>: Total supply of 21 million, dependent on how many BTC are unilaterally transferred to the Hacash mainnet</li>
            <li><b>Supply Mechanism</b>: Transfer can be halted based on supply and demand</li>
            <li><b>Reward</b>: Unilateral BTC transfers can receive HAC risk compensation.</li>
        </ul>        
        <p>How to Mint: Hacash and Bitcoin share the same account model. Using a Bitcoin address to unilaterally transfer whole BTC to a Bitcoin mainnet address without private key, generating BTC in Hacash before the transfer.</p>`,
    ],

    start: [
        "A simple and fast introductory operation manual",
        `<p>Once you have a general understanding of Hacash, you can participate in Hacash through activities like trading, wallet address creation, and mining.</p>`,
        `<p>Currently, Hacash primarily relies on community-developed wallets, which have undergone extensive validation and can be found at <a href="https://wallet.hacash.org"></a>. There are mainly four types of wallets.</p>
        <ul>
            <li>
                <b>One-Click Generation</b><br/>
                Suitable for: Users who only need to create an address to receive assets<br/>
                Supported Devices: Latest browsers on various smartphones and computers<br/>
                <a class="btn" href="https://wallet.hacash.org/#create">Go to use ➟</a>
            </li>
            <li>
                <b>Online Web Wallet</b><br/>
                Suitable for: Users who seek convenience and need to perform transactions<br/>
                Supported Devices: Latest browsers on various smartphones and computers<br/>
                <a class="btn" href="https://wallet.hacash.org/#create">Go to use ➟</a>
            </li>
            <li>
                <b>Offline Web Wallet</b><br/>
                Suitable for: Users who seek convenience and need to perform transactions<br/>
                Supported Devices: Latest browsers on various smartphones and computers<br/>
                <a class="btn" href="https://wallet.hacash.org/#create">Go to use ➟</a>
            </li>
            <li>
                <b>Offline Desktop Wallet</b><br/>
                Suitable for: Experienced users and those who prioritize absolute security, as it contains the most comprehensive features<br/>
                Supported Devices: Windows/Ubuntu/MacOS<br/>
                <a class="btn" href="https://wallet.hacash.org/#create">Go to use ➟</a>
            </li>
        </ul>`,
        `<p>Hacash is composed of three PoW coins: HAC, HACD, and BTC. Before you start trading Hacash, you need to determine which coin you want to trade, as different trading platforms support different coins. After purchasing on a centralized trading platform, if you wish to securely store your Hacash, create your wallet address.</p>
        <a name="trading_hac"></a>
        <p><b>HAC:</b></p>
        <ul>
            <li>Xeggex: <a href="https://xeggex.com/market/HAC_USDT"></a></li> 
            <li>Vindax: <a href="https://vindax.com/exchange-base.html?symbol=HAC_USDT"></a></li>
            <li>HacashSea: <a href="https://sea.hacash.diamonds"></a></li>
            <!--DEX-Trade:-->
        </ul>
        <a name="trading_hacd"></a>
        <p><b>HACD:</b></p>
        <ul>
            <li>Hacash.Diamonds QuickBuy: <a href="https://www.hacash.diamonds/quickbuy"></a> Suitable for users who prefer anonymity and need a small amount of random HACD</li>

            <li>HacashSea: <a href="https://sea.hacash.diamonds"></a> Suitable for users who prefer to select specific HACD</li>

            <li>HacashPool: <a href="https://hacpool.com/hacd"></a> Suitable for users who prefer to select premium HACD</li>

            <li>Hacash.Diamonds Opensea: <a href="https://opensea.io/collection/hacashdiamond"></a> Suitable for users familiar with OpenSea and interested in collecting specific HACD</li>

            <li>去中心化交易所 <a href="https://dex.hacash.diamonds/dex"></a> Suitable for users seeking anonymity and security, and who want to collect HACD with a basis in HAC</li>
        </ul>
        <a name="trading_btc"></a>
        <p><b>BTC:</b></p>
        <p>BTC one-way transfer has not yet been initiated, so trading is not currently available. You can learn about BTC one-way transfer through <a href="https://hacash.money/btc"></a> .</p>
        `,
        `<p>You don't need to worry about the security of the Hacash network. You can run a full node of the Hacash network in just three steps to increase the decentralization and security of the network. Before setting up an HAC mining pool or engaging in HACD mining, you must first set up a full node.</p>
        <p><a class="btn" href="https://hacash.org/get_started#minernode">搭建 Hacash 全节点</a>`,
        `<p>For HAC and HACD in Hacash, mining requires mining machines and electricity, and they need to be mined separately. Currently, HACD mining is only possible solo.</p>
        <p>
            <a class="btn" href="https://hacash.org/get_started#minernode">Solo Mining HAC
            <a class="btn" href="https://hacash.org/get_started#diamond">Mining HACD</a>
        </p>
        <p>HAC mining can be done solo or by joining a mining pool. </p>
        <ul>
            <li>Hacash.Diamonds Pool: <a href="https://www.hacash.diamonds/pool"></a></li>
            <li>WoW Pool: <a href="https://hacpool.com"></a></li>
        </ul>
        `,
    ],

    community: [
        "Join us and see where everyone is and what they are saying",
        `<p>If you find it challenging to locate an official Hacash community, that's normal. Just as Hacash is decentralized in its technology like Bitcoin, it is equally decentralized in its community. This is why establishing HacashDAO is one of our key endeavors – to bring together these scattered entities and collectively discover and follow an effective path for advancing Hacash's development.</p>`,
        `<p><b>Twitter:</b></p>
        <ul>
            <li>Overall: <a href="https://twitter.com/search?q=Hacash"></a></li>
            <li>HacashDAO: <a href="https://twitter.com/HacashDAO"></a></li>
            <li>HacashNews: <a href="https://twitter.com/HacashNews"></a></li>
            <li>HacashCom: <a href="https://twitter.com/HacashCom"></a></li>
            <li>HacashDiamond: <a href="https://twitter.com/HacashDiamond"></a></li>
        </ul>
        <p><b>Discord:</b></p>
        <ul>
            <li>Owner kafkacell: <a href="https://discord.com/invite/evtt4bDfKu"></a></li>
            <li>Owner KenYou: <a href="https://discord.gg/6wH9KJeDFC"></a></li>
        </ul>
        <p><b>Telegram:</b></p>
        <ul>
            <li>Owner Joe: <a href="https://t.me/hacash"></a></li>
            <li>Owner wow0527: <a href="https://t.me/hacashhacd"></a></li>
            <li>Owner Ken You: <a href="https://t.me/HacashCom "></a></li>
        </ul>
        <p><b>Forums:</b></p>
        <ul>
            <li>HacashTalk: <a href="https://hacashtalk.com/"></a></li>
        </ul>
        <p><b>Reddit: </b></p>
        <ul>
            <li><a href="https://www.reddit.com/search/?q=Hacash"></a></li>
            </ul>`,
        `<p>Given that the project lacks token incentives, pre-mining, and a dedicated team, there are no additional funds available for driving this project. It solely relies on community crowdfunding to propel forward. Currently, the community has crowdfunded three exchanges and a media article. Crowdfunding initiatives are typically initiated on HacashTalk. We are currently proposing a standardized community crowdfunding execution plan.</p>`,
        `<p>Hacash lacks founders and teams, signifying that its development will be entirely community-driven. Anyone can propose optimizations and improvements for Hacash, and if formally discussed, a HIP (Hacash Improvement Proposal) number will be assigned, making it accessible for proposal across various community platforms. </p>
        <p>Presently, exchanges and markets are frequently discussed on HacashTalk and Telegram, while tech development matters are more often raised on Discord. We will follow the progress of proposers and consolidate it on the HacashDAO site.</p>`,
        
        `<p>ㄜ is Hacash's currency symbol, and using it in social media names can help garner attention from the Hacash community.</p>
        <p>
            <a href="https://twitter.com/LeonardoHacash "></a><br/>
            <a href="https://twitter.com/Jackxxx216"></a><br/>
            <a href="https://twitter.com/Dr_T_123"></a><br/>
            <a href="https://twitter.com/HacashWizard"></a><br/>
            <a href="https://twitter.com/spec01010"></a><br/>
            <a href="https://twitter.com/andy99feng"></a><br/>
            <a href="https://twitter.com/YouKenTrust"></a><br/>
            <a href="https://twitter.com/Hacashi_248"></a><br/>
            <a href="https://twitter.com/AquilaXBT"></a><br/>
        </p>`,
        `<p>Hacash's three-coin, three-layer structure involves extensive development and innovation for each coin and layer.</p>

        <p>Hacash Development Documentation: <a href="https://hacash.org/develop"></a></p>
        
        <p>If you wish to join the core Hacash development team, you can currently follow this process: <a href="https://discord.com/channels/757976908653920299/844038285260619797/1080030124965122098"></a></p>
        
        <p>Hacash Proposals: <a href="https://github.com/hacash/paper/blob/master/HIP/HIP-table.md "></a></p>
        
        <p>If you intend to make a HIP proposal, you can initiate a well-discussed proposal within the community.</p>`,
    ],

    resource: [
        "Learn more about Hacash",
        `<ul>
            <li>Hacash's earliest website: <a href="https://hacash.org/ "></a></li>
            <li>Understanding Hacash from a monetary perspective: <a href="https://hacash.money/"></a></li>
            <li>Understanding HACD: <a href="https://hacd.art/"></a></li>
            <li>Aggregating all Hacash information: <a href="https://hacashdao.org/"></a></li>
            <li>Focusing on Hacash news: <a href="https://hacashnews.com/"></a></li>
            <li>Hacash.Hacash.Diamonds on Medium: <a href="https://medium.com/hacash-diamonds"></a></li>
            <li>Hacash.com on Substack: <a href="https://hacashcom.substack.com/"></a></li>
            <li>Master Hacash: <a href="https://master.hacash.com/"></a></li>
        </ul>`,
        `<ul>
            <li>Hacash scaling project:<a href="https://hacash.com/"></a></li>
            <li>Projects dedicated to Hacash services:<a href="https://hacash.diamonds/"></a></li>
            <li>Hacash mining pool project: <a href="https://hacpool.com/"></a></li>
            <li>Focusing on Hacash news: <a href="https://hacashnews.com/"></a></li>
            <li>Hacash mining pool (Paused):<a href="https://hacashpool.com/"></a></li>
            <li>Hacash market (Paused): <a href="http://www.hacashmarket.com/"></a></li>
            <li>Hacash cross-chain (Paused):<a href="HACSwap"></a></li>
        </ul>`,
        `<ul>
            <li>Hacash block reward countdown: <a href="https://hacash.brizy.site"></a></li>
            <li>Primary Hacash block explorer: <a href="https://explorer.hacash.org/"></a></li>
            <li>Hacash.Diamonds block explorer: <a href="https://explorer.hacash.diamonds/"></a></li>
            <li>Hacash unit conversion: <a href="https://hacash.org/hac_unit"></a></li>
            <li>Hacash mining information: <a href="https://miningpoolstats.stream/hacash"></a></li>
        </ul>`,
        `<p></p>
        <ul>
            <li>Hacash.org article list: <a href="https://hacash.org/articles"></a></li>
            <li>Ken You's Hackernoon: <a href="https://hackernoon.com/u/kenyou"></a></li>
        </ul>`,
        `<ul>
            <li><a href="https://www.youtube.com/watch?v=ABrxpALsNPE">What is Hacash? By Trevor</a></li>
            <li><a href="https://www.youtube.com/watch?v=zXo9E3hxDGo">What is Hacash? Money, Payment and Store of Value</a></li>
            <li><a href="https://www.youtube.com/watch?v=SOwL6buMfeg">What is HACD? Hacash Diamond Explained in Two Minutes</a></li>
        </ul>`,
        `<ul>
            <li>Hacash whitepaper: <a href="https://hacash.org/file/hacash_white_paper_en.pdf"></a></li>
            <li>Hacash development documentation: <a href="https://hacash.org/develop"></a></li>
            <li>HacashNews 2022 report: <a href="https://hacashnews.com/file/report/hacash_2023_en.pdf"></a></li>
            <li>HACD collection guide: <a href="https://docs.hacash.diamonds/"></a></li>
            <li>HacashSea usage guide: <a href="https://docs-sea.hacash.diamonds/"></a></li>
        </ul>`,
        "To delve deeper into Hacash, you can explore the materials we have compiled.",

    ],


}