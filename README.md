# [WebShell | Terminal Portfolio Website](https://webshell.aditi.codes/)

> Forked from [https://github.com/nasan016/webshell](https://github.com/nasan016/webshell)

![webshell.aditi.codes](webshell.png)

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Features
* **[Tab]** for auto completion.
* **[Esc]** to clear the input line.
* **[↑][↓]** to scroll through your command history.

## ???
![webshell.aditi.codes](secret.png)
How did we get here?

## Configuration

Most of the configuration is done in the `config.json` file.

> Generate ascii [here](https://patorjk.com/software/taag/). ANSI Shadow is the current font family.

```json
{
  "ascii": [
    " █████╗ ██████╗ ██╗████████╗██╗",
    "██╔══██╗██╔══██╗██║╚══██╔══╝██║",
    "███████║██║  ██║██║   ██║   ██║",
    "██╔══██║██║  ██║██║   ██║   ██║",
    "██║  ██║██████╔╝██║   ██║   ██║",
    "╚═╝  ╚═╝╚═════╝ ╚═╝   ╚═╝   ╚═╝"
  ],
  "title": "WebShell",
  "repoLink": "https://github.com/aditi-dsi/webshell",
  "social": {
    "x": "halfacupoftea_",
    "linkedin": "aditi-bindal",
    "github": "aditi-dsi",
    "devto":"aditi_b",
    "email": "aditii.b6@email.com"
  },
  "aboutGreeting": "Hi, I am Aditi Bindal, a developer/devrel speciailizing in web3 and ai.",
  "projects": [
    [
      "AISuite",
      "AI powered content management suite, currently on waitlist, built with Next.js, Supabase.",
      "https://aisuite.shwetlabs.com"
    ],
    [
      "BlackWell",
      "A token utility dapp for staking tokens, earning, redeeming rewards & getting credit score for wallet.",
      "https://github.com/aditi-dsi/blackwell"
    ]
  ]
}
```

## Run the Project Locally:

Clone the repository
```shell
git clone https://github.com/aditi-dsi/webshell.git
```
Go to the project directory
```shell
cd webshell
```
Install the dependencies
```shell
npm install
```
Start the server
```shell
npm run dev
```
