# SkillBounty

> Build. Contribute. Earn.

SkillBounty is a decentralized freelancing and development bounty marketplace built on the Stellar network. It enables project owners and creators to securely lock reward funds in automated, on-chain escrows and automates payments to contributors once milestones are met and verified, bypassing centralized platforms, high fees, and payment delays.

---

## 1. Project Overview

*   **What SkillBounty is:** A Web3 dApp for launching, discovering, and managing smart contract-backed task bounties.
*   **Problem Statement:** High platform middleman fees (often 10-20%), delayed payment processing, arbitrary escrow account freezes, and lack of transparency on traditional centralized freelancing sites.
*   **Solution:** Direct peer-to-peer escrow funding and milestone validation executed through automated Soroban smart contracts, assuring developers that rewards are fully locked before they start work, and paying them instantly upon selection.
*   **Why Stellar was used:** Fast ledger confirmation times (under 5 seconds) allowing real-time app responsiveness, exceptionally low transaction fees, and native Soroban smart contract support for secure programmable value transfer.

---

## 2. Key Features

### Level 1: Basic Stellar Integration
*   **Wallet Connection:** Secure connection to Stellar account credentials.
*   **Wallet Disconnection:** Instant local session logout and disconnect.
*   **Balance Display:** Live XLM native token balance display.
*   **XLM Transaction:** Simple peer-to-peer XLM token transfers directly in-app.

### Level 2: Contract & Live State
*   **Multi-Wallet Support:** Direct integrations with Freighter, Albedo, and xBull.
*   **Smart Contract Deployment:** Automated interface for interacting with deployed Soroban escrows.
*   **Contract Interaction:** Instantly invoke functions to fund, submit to, and complete bounties.
*   **Transaction Status:** Real-time visual feedback overlays showing transaction submission progress.
*   **Real-Time Updates:** Immediate UI updates using reactive Zustand state stores.

### Level 3: Production Readiness
*   **Advanced Smart Contracts:** Fully integrated `BountyEscrow` and `SubmissionRegistry` smart contracts.
*   **Inter-Contract Communication:** Escrow logic queries the submission registry to verify contractor status.
*   **Event Streaming:** Real-time ledger event monitoring for contract states.
*   **CI/CD:** Automated GitHub Actions pipeline verifying Rust tests and React build status on every commit.
*   **Mobile Responsive Design:** Clean, adaptable mobile-first interface styled with Tailwind CSS.
*   **Error Handling:** Custom exception parsing for wallet rejects and blockchain RPC errors.
*   **Loading States:** Skeletons and progress overlays for async operations.
*   **Testing:** Complete Rust unit testing suites with mocked execution environments.

### Level 4: MVP Launch & Audits
*   **Production Deployment:** Client application hosted on Vercel.
*   **Analytics Integration:** Web metrics monitoring.
*   **Monitoring Integration:** Client-side exception tracking.
*   **User Feedback Collection:** Centralized feedback loop via Google Forms and Sheets.
*   **10+ User Wallet Interactions:** 10 verified transactions recorded on Stellar Testnet.

---

## 3. Technology Stack

| Component | Technology |
|---|---|
| **Frontend** | React, TypeScript, Vite, Tailwind CSS, Zustand |
| **Blockchain** | Soroban, Rust, Stellar SDK |
| **Wallets** | Freighter, Albedo, xBull |
| **Deployment** | Vercel |
| **Testing** | Rust cargo test (Soroban environment) |
| **CI/CD** | GitHub Actions |

---

## 4. Architecture

```
Frontend (React + TypeScript)
       ↓ (Request Connection / Sign XDR)
Wallet Interface (Freighter / Albedo / xBull SDK)
       ↓ (Submit Signed XDR Transaction)
Soroban Smart Contracts (BountyEscrow ↔ SubmissionRegistry)
       ↓ (Read / Write State changes)
Stellar Network (Ledger State)
```

The React frontend utilizes the Stellar SDK to generate transactions. The user signs these via their chosen wallet extension, and the signed XDR is submitted to the Stellar network to execute contract logic and update the ledger.

---

## 5. Smart Contracts

### BountyEscrow Contract
*   **Purpose:** Manages the lockup and payout of bounty rewards to contributors, including deadlines and refunds.
*   **Main Functions:**
    *   `create_bounty()`: Registers a new bounty with the creator's address and deadline.
    *   `lock_reward()`: Transfers reward tokens from the creator's wallet into the escrow contract.
    *   `select_winner()`: Payouts the locked escrow funds directly to the designated winner address.
    *   `cancel_bounty()`: Returns the locked funds to the creator if the deadline expires without submissions.

### SubmissionRegistry Contract
*   **Purpose:** Acts as a verifiable, immutable index of developer submissions for all bounties.
*   **Main Functions:**
    *   `add_submission()`: Allows developers to upload their proof-of-work link to the ledger.
    *   `get_submissions_by_bounty()`: Fetches all registered submissions for a given bounty.
    *   `get_submissions_by_user()`: Retrieves all submissions uploaded by a specific user wallet.
    *   `update_submission_status()`: Updates submission states (e.g., accepted, rejected).

---

## 6. Wallet Support & Integration

SkillBounty integrates three major Stellar wallets:
*   **Freighter:** Uses the `@stellar/freighter-api` interface to retrieve the public key and sign transaction envelopes securely.
*   **Albedo:** Employs Albedo’s web/popup flow to request user permissions and secure transaction signatures.
*   **xBull:** Integrates as a developer-focused wallet selection for transaction signing.

*Wallet Flow:* The app requests connection → Wallet extension prompts user approval → App retrieves public key and queries balances → App compiles transaction XDR → Wallet extension requests signature → Signed transaction is broadcast via Stellar RPC.

---

## 7. Setup Instructions

### Clone Repository
```bash
git clone https://github.com/krish-na-21/SkillBounty.git
cd SkillBounty
```

### Install Dependencies
```bash
cd client
npm install
```

### Run Locally
```bash
npm run dev
```

### Build Project
```bash
npm run build
```

---

## 8. Environment Variables

Create a `.env` file in the `client` folder:
```ini
VITE_RPC_URL=https://soroban-testnet.stellar.org
VITE_NETWORK_PASSPHRASE="Test SDF Network ; September 2015"
VITE_ESCROW_CONTRACT_ID=CDOYRKTT5FYR22K5AQ3HHMX4YKDTXH2K4OVUVOXSLCIFF3XUFG6LMRO2
VITE_REGISTRY_CONTRACT_ID=CAZP2YRZ7W45AU4FJNHNAJ5L4D6DW3CYTXP2V2BOGCMGRVSGVK7DBO23
```

---

## 9. Deployment Information

*   **Live Demo Link:** [https://bounty-bridge-three.vercel.app](https://bounty-bridge-three.vercel.app)
*   **Network:** Stellar Testnet
*   **Deployment Platform:** Vercel

### Smart Contract Deployment

| Contract | Network | Contract Address | Explorer Link |
|---|---|---|---|
| **BountyEscrow** | Stellar Testnet | `CDOYRKTT5FYR22K5AQ3HHMX4YKDTXH2K4OVUVOXSLCIFF3XUFG6LMRO2` | [Stellar.Expert Explorer Link](https://stellar.expert/explorer/testnet/contract/CDOYRKTT5FYR22K5AQ3HHMX4YKDTXH2K4OVUVOXSLCIFF3XUFG6LMRO2) |
| **SubmissionRegistry** | Stellar Testnet | `CAZP2YRZ7W45AU4FJNHNAJ5L4D6DW3CYTXP2V2BOGCMGRVSGVK7DBO23` | [Stellar.Expert Explorer Link](https://stellar.expert/explorer/testnet/contract/CAZP2YRZ7W45AU4FJNHNAJ5L4D6DW3CYTXP2V2BOGCMGRVSGVK7DBO23) |

---

## 10. Screenshots

### Product UI
<img width="1917" height="937" alt="image" src="https://github.com/user-attachments/assets/a3e46e50-c152-4f1c-a3d1-59ab1c352048" />

*Main dashboard showcasing the core functionality of SkillBounty.*
---

### Wallet Connection & Balance
<img width="1919" height="932" alt="image" src="https://github.com/user-attachments/assets/ab2ef6a2-afda-490d-95a3-fda0f97bf01b" />

*Connected Stellar wallet displaying the user's XLM balance.*

---
### Dashboard
<img width="1919" height="934" alt="image" src="https://github.com/user-attachments/assets/5df1c47c-889f-4a06-b03f-eb9395fb14e6" />

---

### Mobile Responsive Design
<img width="268" height="581" alt="image" src="https://github.com/user-attachments/assets/7e3fff62-2454-42f7-a472-316fead1a4c4" />
*Responsive layout across mobile devices.*

---

### CI/CD Pipeline & Test Results
<img width="1899" height="980" alt="image" src="https://github.com/user-attachments/assets/ee48a823-88ec-436c-a923-f75dc8812055" />


*GitHub Actions workflow showing successful builds and passing tests.*

---

## 11. Testing

### Contract Tests
The smart contracts include a complete Rust unit testing suite mimicking Soroban ledger environments.
Run smart contract unit tests:
```bash
cd contracts
cargo test
```

### Test Results
```text
running 2 tests in bounty_escrow...
test test::test_bounty_lifecycle ... ok
test test::test_cancel_bounty ... ok

running 1 test in submission_registry...
test test::test_submissions_registry_lifecycle ... ok

test result: ok. 3 passed; 0 failed;
```

---

## 12. CI/CD

We use **GitHub Actions** to automate CI/CD processes. The workflow runs on every push and pull request to the `main` or `master` branches.
*   **Build:** Verifies compilation of the React application.
*   **Test:** Executes the smart contract cargo tests.
*   **Quality:** Scans dependencies for known vulnerabilities.

---

## 13. User Testing & Feedback Summary

*   **Number of Users Tested:** 10
*   **Feedback Collection Process:** Users completed a Google Form detailing usability, transaction delays, and feature suggestions. Data was automatically aggregated in a Google Sheet.
*   **Feedback Summary:** Average payout settlement duration measured under 4.5 seconds. Adding a simulator login option significantly resolved onboarding friction. UI components were optimized based on mobile responsive feedback.
*   **Google Form Link:** [Feedback Survey Link](https://forms.gle/MNYo85R8fzzeK3zr7)
*   **Google Sheet Link:** [Feedback Audit Sheet Link](https://docs.google.com/spreadsheets/d/1i9bzlhLF1mw-sP8A7HsA-zQTjSvyAKTXBW0qVwiU_BM/edit?usp=sharing)
---

## 14. Demo Video

*   **Demo Video Link:** [SkillBounty Walkthrough Video](https://drive.google.com/file/d/1fbhQJ6QdfHoqLE0FzW3Kabxwui8cXR0N/view?usp=sharing)
*   **Description:** A 5-minute video walkthrough showcasing wallet logins, creating a bounty, depositing rewards into escrow, developer submissions, and contract-based winner payouts.

---

## 15. Stellar Hackathon Compliance Checklist

### Level 1 Requirements
- [x] Connect a Stellar Wallet.
- [x] Retrieve and display native XLM balances.
- [x] Send successful peer-to-peer payments.

### Level 2 Requirements
- [x] Deployed custom smart contracts on Stellar Testnet.
- [x] Call smart contract functions from the UI.
- [x] Real-time state updates in client.
- [x] Integration with multiple wallets (Freighter, Albedo, xBull).

### Level 3 Requirements
- [x] Advanced smart contract features (Escrows & Registries).
- [x] Inter-contract communication logic.
- [x] Automated testing suite with mocked components.
- [x] Full mobile responsive viewports.
- [x] CI/CD build actions configured.

### Level 4 Requirements
- [x] Deployed and active production URL.
- [x] Analytics and error monitoring integrations.
- [x] Verified feedback sheet from 10+ user tests.

---

## 16. Project Structure

```
SkillBounty/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI configuration
├── client/
│   ├── public/                # Static assets & icons
│   └── src/
│       ├── components/        # Layout, modals, overlays
│       ├── pages/             # App dashboard pages
│       ├── services/          # Stellar service logic
│       ├── store/             # Zustand application state
│       └── types/             # TypeScript configurations
├── contracts/
│   ├── bounty-escrow/         # Rust escrow contract
│   └── submission-registry/   # Rust registry contract
├── docs/
│   └── screenshots/           # Screenshot image assets
├── netlify.toml               # Netlify configuration
└── README.md                  # System Documentation
```

---

## 17. License

Distributed under the MIT License. See `LICENSE` for more information.
