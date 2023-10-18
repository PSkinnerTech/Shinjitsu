![Shinjitsu](https://cdn.hashnode.com/res/hashnode/image/upload/v1697637531432/dba763c7-184e-417a-95b2-833b46d3f7e5.png?auto=compress,format&format=webp)

# Shinjitsu

Shinjitsu is a Web3 application aimed at objectifying rank and skill within the Brazilian Jiu Jitsu (BJJ) community. It leverages blockchain technology to address various issues such as subjective promotions, rank misrepresentation, and unfair competition in BJJ.

## Demo Video

[![Demo Video](./assets/demo-video-image.png)](https://www.loom.com/share/a8335a5cbbb841868c4624ca2d27c2cd)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Contribution Guidelines](#contribution-guidelines)
7. [Testing](#testing)
8. [License](#license)
9. [Contact](#contact)

## Introduction

Shinjitsu, translating to "truth" or "reality" in Japanese, embodies the essence of authenticity and verification in the realm of Brazilian Jiu Jitsu (BJJ). In a martial art where rank and skill level are traditionally perceived as objective truths, the reality often reveals a subjective essence, heavily influenced by the opinions of individuals responsible for promotions. Not all Black Belts are created equal. The disparity in skill, experience, and the standards held for promotions often lead to a muddled understanding of a practitioner's true capability.

This Web3 application endeavors to bring a tangible measure to the subjective nature of skill levels and belt ranks within the BJJ community. By leveraging blockchain technology, Shinjitsu aims to create a decentralized, verifiable platform where the rank, skill level, and experience of BJJ practitioners can be authenticated in a transparent and immutable manner.

The core challenges Shinjitsu seeks to address include:

- **Subjective Promotions**: The value of a practitioner's belt rank can vary significantly depending on the standards of the promoting individual or institution.
- **Rank Misrepresentation**: Individuals claiming false ranks pose a challenge to the integrity and safety within the BJJ community.

- **Unfair Competition**: "Sandbagging," where higher rank individuals compete in lower rank brackets, undermines the spirit of fair competition and poses safety risks.

- **Inaccurate Skill Assessment**: The lack of a standardized, objective measure of skill and experience hampers the accurate assessment of a practitioner's capability, affecting competition brackets and the intake of new students with previous training experience.

Shinjitsu proposes a solution where rank and skill level are objectified based on verifiable data, ensuring a more accurate representation of a practitioner's ability and contributions to the BJJ community. Through a user-friendly interface, Shinjitsu allows for the creation, attestation, and querying of claims regarding a practitioner's rank and skills. This structured, verifiable approach aims to foster a culture of integrity, transparency, and respect for true skill and merit within the BJJ community.

Explore more about Shinjitsu, its vision, and technical architecture in the [whitepaper](https://pskinnertech.hashnode.dev/shinjitsu-whitepaper), and engage with the community to contribute towards making this vision a reality.

## Features

Shinjitsu comes with a suite of features designed to foster a transparent and merit-based BJJ community. Here are the core features of the application:

- **Verifiable Claims Creation**:

  - Create claims regarding a practitioner's rank, skill level, and experience.
  - Structured claim format making it easy to understand and verify.

- **Community-driven Attestations**:

  - Attest to the claims made by others based on personal experience or verifiable evidence.
  - Engage in discussions around claims to garner a broader perspective.

- **Rank and Skill Objectification**:

  - Quantify and objectify rank and skill levels based on community attestations and verifiable metrics.
  - Provide a clear and understandable representation of a practitioner's abilities.

- **Competition Circuit Integration**:

  - Enable competition circuits to verify the ranks of competitors easily.
  - Display past disqualifications to ensure fair play and safety in competitions.

- **Professor Verification**:

  - Verify the rank and skill level of professors to uphold the standards of BJJ training.
  - Allow new students to understand the level of proficiency and experience of their professors.

- **Cross-Application Identity and Reputation**:

  - Port identity and reputation across various applications, providing a unified and convenient user experience.

- **Advanced Querying**:

  - Search through a decentralized registry of identity data to find and verify individuals easily.
  - Filter searches by trusted sources for authentic and relevant results.

- **Easy Integration**:

  - Seamless integration with existing applications through a developer-friendly API.
  - Enhance existing systems with verifiable rank and skill data from Shinjitsu.

- **Transparent Promotion Standards**:

  - Showcase the standards held by professors and gyms for promoting students.
  - Make promotion criteria transparent, fostering a culture of meritocracy.

- **Safety Measures**:

  - Highlight potential safety risks by exposing previous training and competition history.
  - Enable gyms and competitions to make informed decisions to ensure participant safety.

- **NewCoin's WATTs Integration**:

  - Utilize NewCoin's WATTs to generate value from claims and attestations.
  - Create a rewarding ecosystem for truthful and verifiable information.

- **Mobile Application**:
  - Access Shinjitsu on-the-go with a user-friendly mobile application.
  - Stay updated and engage with the community anytime, anywhere.

Explore these features and more as you delve into the Shinjitsu ecosystem, contributing to a more transparent and honest BJJ community.

## Technology Stack

- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ceramic's ComposeDB](https://blog.ceramic.network/composedb-using-ceramic-as-a-graph-database/)
- [Intuition](https://intuition.systems/)
- [NewCoin's WATTs](https://docs.google.com/document/d/17brnNGEOaRedthFskkFbK__hsIE7JndwlzLi_WvbW6o/edit)

## Setup and Installation

Follow these steps to set up and install the Shinjitsu project locally on your machine:

1. **Clone the Repository**:

   - Clone the repository to your local machine using the following command:
     ```bash
     git clone https://github.com/PSkinnerTech/Shinjitsu.git
     ```
   - Navigate to the project directory:
     ```bash
     cd Shinjitsu
     ```

2. **Install Dependencies**:

   - Ensure you have [Node.js](https://nodejs.org/) installed.
   - Install project dependencies using the following command:
     ```bash
     npm install
     ```

3. **Run the Application**:

   - To start the development server, use the following command:
     ```bash
     npx expo start
     ```
   - This will open the Expo DevTools in your web browser where you can choose to run the application on your phone using the Expo app, or in an emulator.

4. **Running on Emulator or Real Device**:

   - To run the app on an Android emulator or real device, use the following command:
     ```bash
     npx expo run:android
     ```
   - To run the app on an iOS simulator or real device, ensure you have XCode updated to the latest version and your preferred iOS simulator installed. Then use the following command:
     ```bash
     npx expo run:ios
     ```

5. **Running on Web**:

   - To start the application for web, use the following command:
     ```bash
     npx expo start --web
     ```

6. **TypeScript Check**:

   - To perform a TypeScript check, use the following command:
     ```bash
     npx run ts:check
     ```

7. **Environment Variables**:

   - Ensure to set up necessary environment variables as per the project requirements.

8. **Simulating on Mobile Device**:
   - To simulate the application directly on your phone (preferred to test the wallet connect feature), install [Expo](https://expo.dev/client) on your mobile device.
   - Scan the QR code displayed in the Expo DevTools on your web browser to open the application on your mobile device.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## License

This project is licensed under the MIT License. The MIT License is a permissive license that allows for reuse of code with proper attribution and is very open to modifications and redistribution.

For more details, see the [LICENSE](https://github.com/PSkinnerTech/Shinjitsu/blob/main/LICENSE) file in the project repository.

## Contact

For any further inquiries, feel free to reach out:

- Website: [Shinjitsu.app](https://shinjitsu.app)
- GitHub Profile: [Patrick Skinner (PSkinnerTech)](https://github.com/PSkinnerTech)
- Twitter: [@PSkinnerTech](https://twitter.com/PSkinnerTech)
- LinkedIn: [Patrick Skinner](https://linkedin.com/in/patrickaskinner)
- Blog: [patrickskinner.tech](https://blog.patrickskinner.tech)
