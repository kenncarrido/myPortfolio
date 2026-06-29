const output = document.getElementById("terminal-output");

const commands = `

Windows PowerShell
Copyright (C) Microsoft Corporation.

PS C:\\Users\\Kenn> whoami

kenn-carrido

PS C:\\Users\\Kenn> job

BSCS Graduate
Front-End Web Developer

PS C:\\Users\\Kenn> skills

✓ Windows Administration
✓ Active Directory (Learning)
✓ Microsoft Office 365
✓ Networking
✓ Hardware Troubleshooting
✓ HTML
✓ CSS
✓ CSS Frameworks (React, Tailwind)
✓ JavaScript
✓ PHP
✓ MySQL

PS C:\\Users\\Kenn> status

Open To Work

PS C:\\Users\\Kenn>
`;

let i = 0;

function typeTerminal(){

    if(i < commands.length){

        output.innerHTML += commands.charAt(i);

        i++;

        setTimeout(typeTerminal,20);

    }

    else{

        output.innerHTML += '<span class="cursor"></span>';

    }

}

typeTerminal();