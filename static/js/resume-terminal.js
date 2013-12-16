/*global echo */
/*jslint browser:true */

var INMAIL = false,                                                                 // Boolean for if we are in the "mail" application.
    USERNAME = "recruiter",                                                         // The username string used in the terminal prompt.
    BOXNAME = "resume",                                                             // The hostname string used in the terminal prompt.
    MESSAGETIME = 6,                                                                // The "loading" time in seconds.
    SHELLSTART = USERNAME + "@" + BOXNAME + " ~> ",                                 // The string for the terminal prompt.
    SHELLINPUT = '<input type="text" id="terminalInputId" autocomplete="off"/>',    // The terminals input box.
    SHELLNEW = SHELLSTART + SHELLINPUT;                                             // The terminal prompt and the input box, so we can change the prompt.


function setTerminal() {
    "use strict";
    echo(SHELLNEW);
    document.getElementById('terminalInputId').focus();
}
function messageTimer() {
    "use strict";
    document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
    echo('');
    echo("You have new mail waiting for you in /var/spool/mail/recruiter ");
    echo('');
    setTerminal();
}
function resetVars() {
    "use strict";
    SHELLSTART = USERNAME + "@" + BOXNAME + " ~> ";
    SHELLNEW = SHELLSTART + SHELLINPUT;
}
function currentText() {
    "use strict";
    var x = document.getElementById('terminalEmu').innerHTML;
    return x;
}
function echo(x) {
    "use strict";
    document.getElementById('terminalEmu').innerHTML = currentText() + x + "</br>";
}
function startEmu() {
    "use strict";
    document.getElementById('terminalEmu').innerHTML = "";
    echo('');
    echo('');
    echo("ThomasBiddleResume 1.2");
    echo('');
    echo("Welcome!");
    echo('');
    echo("   * Project URL: https://github.com/thomasbiddle/ThomasBiddle.info");
    echo('');
    echo("Enter 'help' for a list of available commands.");
    setTerminal();
    setTimeout(messageTimer, MESSAGETIME * 1000);
}
function printOutput(terminalInput) {
    "use strict";
    if (terminalInput === "about") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("about");
        echo('');
        echo("Last Name: Biddle");
        echo("First Name: Thomas");
        echo("Major: Computer Science");
        echo('');
        echo("Computer Science & Software Development:");
        echo('');
        echo("I am currently a student at the University of Cincinnati working towards my BS in Computer Science. Software development is one of my greatest interests, and I always strive to not only increase my knowledge and experience in the field, but find new ways to apply it.");
        echo('');
        echo("Independent Ventures:");
        echo('');
        echo("In 2011 I was able to successfully found two web hosting companies centered around Virtual Private Servers. Between the two companies, I catered to over 500 individual monthly customers and held a reputation for outstanding customers service and going the extra mile in order to make sure my services were the best available.");
        echo('');
        echo("Specialties:");
        echo("Java, C++, Javascript, Linux, Android");
        echo('');
        setTerminal();
    } else if (terminalInput === "education") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("education");
        echo('');
        echo("University of Cincinnati");
        echo("BS, Computer Science");
        echo("2010-2015 (expected)");
        echo('');
        echo("Sycamore High School");
        echo("2006-2010");
        echo('');
        echo("Enrolled in Honors and Advanced Placement (AP) courses. Entire senior year was deciated to the Post Secondary Enrollment Options Program (PSEOP)");
        echo('');
        setTerminal();
    } else if (terminalInput === "workhistory") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("workhistory");
        echo('');
        echo("Inflection, LLC");
        echo("Software Engineer Intern");
        echo("July 2012 - Present");
        echo("Working in the Los Ops Development Team.");
        echo('');
        echo("Seapine Software");
        echo("Software Development Co-op");
        echo("January 2012 - May 2012");
        echo("Worked as a part of the Surround SCM Development Team and was responsible for fixing submitted defects with the SCM software. Work was mainly done in C++; however while working with certain features knowledge of Java, Javascript, HTML, and CSS were needed.");
        echo('');
        echo("MinecraftLayer.com");
        echo("Co-Founder");
        echo("September 2011 - December 2011");
        echo("Company was built around being a hosting platform for the popular Indie game, 'Minecraft'. Even with dozens of competitors in this field, we were able to quickly grow a reputation for having fast and reliable solutions for our customers. With my familiarity of VPSs, and my partner's knowledge of the game and experience in web-hosting - we became a deadly duo to have the company gain a strong foothold in a tough market. While the company was, and still is, running very smoothly - I chose to leave MinecraftLayer in order to focus on other endeavors.");
        echo('');
        echo("I officially left MinecraftLayer December 31, 2011.");
        echo('');
        echo("VPSInfinity.com");
        echo("Founder");
        echo("February 2011 - December 2011");
        echo("VPSInfinity was founded in early 2011 as a hosting company for the niche group in game macros. Over 300 individuals clients were served over the period of operation, many leaving our competitor's services to join us due to our superior customer support and feature advancement. The company turned a successful profit from day one and was experiencing incredible growth throughout the period of operation. Many lessons were learned; however unfortunately doors were closed due to the market taking a very swift downturn as our prime target user became unable to run macros as the 3rd party game had implemented a way to prevent this.");
        echo('');
        echo("Officially shut down December 31, 2011.");
        echo('');
        echo("Boulder Landscaping");
        echo("Division Manager");
        echo("January 2008 - June 2011");
        echo("Duties included: Lawn-care, tree removal, mulching, and other landscaping necessities.");
        echo('');
        echo("Was the company's first hire from their founding, helped with initial marketing and customer relations.");
        echo('');
        echo("Cold Stone Creamery");
        echo("Server");
        echo("November 2007 - April 2009");
        echo("Served a multitude of customers as this was the most profitable franchise in the company during peak seasons, practiced teamwork with fellow colleagues, and worked the cash register.");
        echo('');
        setTerminal();
    } else if (terminalInput === "recommendations") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("recommendations");
        echo('');
        echo("Samual Stine, Web Engineer & Founder, SeerVirtual, LLC. says...");
        echo('');
        echo("“For the better part of 2011, Thomas Biddle and I competed with each other at our respective companies. While I oversaw operations at SeerHost (a service of SeerVirtual, LLC.) Thomas managed his company, VPSInfinity. There were several other competitors in our market but Thomas's company was the only one I had to worry about. His creative style and charismatic attitude helped him gain and retain clients.");
        echo("On several occasions I had the pleasure to discuss our business approaches and market conditions with Thomas. Although we were competitors, we were happy to recommend clients to one another in times of full capacity. I always knew customers would be better off at Thomas's company than with one of the other competitors.");
        echo("Thomas is a responsible and dedicated businessman so I hope that I have the pleasure of either working with or against him in the future. I'm sure he will carry these qualities to other establishments and I certainly would recommend him for other positions.”");
        echo('');
        echo("Zach LaGreca, Jr Web Designer, Vezign, LLC says...");
        echo('');
        echo("“Thomas J Biddle is a creative worker. He doesn't just do the job - he looks for ways to do things more efficiently. His ingenuity and professionalism are evident in his company VPSInfinity and all his ventures. I highly recommend him.”");
        echo('');
        setTerminal();
    } else if (terminalInput === "portfolio") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("portfolio");
        echo('');
        echo("As my experience in Computer Science and programming continues to grow, I will be adding as much to my portfolio as possible. As a supporter of open source communities, I plan to release the source code for any personal projects I take on. The majority, if not all, of my independent projects can be found at: <span class='inLink'><a href='http://www.ThomasBiddle.com/#work'>http://www.ThomasBiddle.com/#work</a></span>");
        echo('');
        echo("At the above address, you will find a collection of my independent projects, such as 'Project Euler' problems, as well as Android Applications. I also have a few small school assignments that I found to be interesting.");
        echo('');
        setTerminal();
    } else if ((terminalInput === "help") || (terminalInput === "?")) {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("help");
        echo('');
        echo("The following commands are supported:");
        echo('');
        echo("   ***********");
        echo("<pre>about\t\t-\tGeneral information about 'Thomas Biddle'.\neducation\t-\tPast and current education information.\nworkhistory\t-\tRetrieve an up-to-date history of employment.\nportfolio\t-\tProject portfolio and code snippets.\nrecommendations\t-\tRecommendations for Thomas from others.\nmail\t\t-\tRead the system's messages.</pre>");
        echo("   ***********");
        echo('');
        setTerminal();
    } else if (terminalInput === "mail") {
        INMAIL = true;
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("mail");
        echo('');
        echo("Mail version 5.6 6/1/95. Type '?' or 'help' for a list of commands.");
        echo("/var/spool/mail/recruiter: 1 message");
        echo(">  1 ThomasBiddle@resume Sat 2/11/2011 20:54 Subj: 'Hello there!'");
        SHELLNEW = "& " + SHELLINPUT;
        echo('');
        setTerminal();
    } else if (terminalInput === "clear") {
        document.getElementById("terminalEmu").innerHTML = "";
        setTerminal();
    } else if (terminalInput.substring(0, 2) === "su" && (terminalInput.substring(0, 4) !== "sudo")) {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        if ((terminalInput.substring(3, 7) === "root") || (terminalInput.substring(3, 8) === "admin") || (terminalInput.substring(3, 16) === "administrator")) {
            echo("Seriously, it's not that easy.");
        } else {
            if (terminalInput.substring(3, terminalInput.length).length !== 0) {
                USERNAME = terminalInput.substring(3, terminalInput.length);
            } else {
                echo(BOXNAME + "");
            }
        }
        resetVars();
        setTerminal();
    } else if (terminalInput.substring(0, 8) === "hostname") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        if (terminalInput.substring(9, terminalInput.length).length !== 0) {
            BOXNAME = terminalInput.substring(9, terminalInput.length);
            echo("Message from root@" + BOXNAME + ": Hey, what's going on here!?");
        } else {
            echo("Hostname cannot be empty.");
        }
        echo('');
        resetVars();
        setTerminal();
    } else if (terminalInput.substring(0, 2) === "ls") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo("<pre>passw0rds.txt\nskynet.py\n</pre>");
        setTerminal();
    } else if ((terminalInput.substring(0, 4) === "sudo")) {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        echo("Did you really think it was going to be that easy?");
        setTerminal();
    } else if ((terminalInput.substring(0, 2) === "cp") || (terminalInput.substring(0, 2) === "mv") || (terminalInput.substring(0, 4) === "wget") || (terminalInput.substring(0, 4) === "grep") || (terminalInput.substring(0, 3) === "gcc") || (terminalInput.substring(0, 3) === "c++") || (terminalInput.substring(0, 3) === "tar") || (terminalInput.substring(0, 4) === "gzip") || (terminalInput.substring(0, 3) === "ssh") || (terminalInput.substring(0, 5) === "bzip2") || (terminalInput.substring(0, 5) === "rsync") || (terminalInput.substring(0, 3) === "sed") || (terminalInput.substring(0, 3) === "rpm") || (terminalInput.substring(0, 3) === "yum") || (terminalInput.substring(0, 2) === "cd")) {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        echo("Access denied.");
        setTerminal();
    } else if ((terminalInput.substring(0, 4) === "nano") || (terminalInput.substring(0, 3) === "vi")) {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        if (terminalInput.substring(0, 4) === "nano") {
            echo(terminalInput.substring(0, 4) + " is not installed on this machine. Try using 'cat' to read the contents of a file. ");
        } else if (terminalInput.substring(0, 3) === "vi") {
            echo(terminalInput.substring(0, 3) + " is not installed on this machine. Try using 'cat' to read the contents of a file. ");
        }
        setTerminal();
    } else if (terminalInput.substring(0, 3) === "cat") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        if (terminalInput.substring(4, 8) === "pass") {
            echo("<pre>benken0bi\nqwerty\npassword123</pre>");
        } else if (terminalInput.substring(4, 7) === "sky") {
            echo("<pre>def getSolutionCosts(navigationCode):\n\tfuelStopCost=15\n\textraComputationCost=8\n\tthisAlgorithmBecomingSkynetCost=999999999\n\twaterCrossingCost=45</pre>");
        } else if (terminalInput.substring(4, 5) === "/") {
            echo(terminalInput.substring(4, terminalInput.length) + " is not a file.");
        } else if (terminalInput.substring(4, terminalInput.length) === "") {
            echo("Please enter a filename (e.g. cat MyFile.txt)");
        }
        setTerminal();
    } else if ((terminalInput === "passw0rds.txt") || (terminalInput === "skynet.cpp")) {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        echo(terminalInput + " is a text file. Try opening it with another command. ");
        echo('');
        setTerminal();
    } else {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        if (terminalInput.length > 0) {
            echo('');
            echo(terminalInput + ": command not found - Type 'help' for a list of commands.");
        }
        echo('');
        setTerminal();
    }
}
function printMail(terminalInput) {
    "use strict";
    if ((terminalInput === "quit") || (terminalInput === "home") || (terminalInput === "end")) {
        INMAIL = false;
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("quit");
        SHELLNEW = SHELLSTART + SHELLINPUT;
        echo('');
        setTerminal();
    } else if (terminalInput === "inbox") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo("inbox");
        echo('');
        echo("Mail version 5.6 6/1/95. Type '?' or 'help' for a list of commands.");
        echo("/var/spool/mail/recruiter: 1 message");
        echo(">  1 ThomasBiddle@resume Sat 2/11/2011 20:54 Subj: 'Hello there!'");
        SHELLNEW = "& " + SHELLINPUT;
        echo('');
        setTerminal();
    } else if (terminalInput === "read") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        echo('');
        echo("Date: Sat, 2/11/2011 22:16 -0500");
        echo("From: ThomasBiddle@resume");
        echo("To: recruiter@resume");
        echo("Subject: Hello there!");
        echo("Hello! I'm so glad to see you have found my message here. I hope you're having a fun time navigating through my resume; as I write the code for it now I am having an absolute blast thinking of new things to implement - if you play around a bit, I'm sure you'll find them (I think there's actually more easter eggs than there is information about myself, go figure).");
        echo('');
        echo("I can only assume you've read through the information I've provided about myself earlier so I won't bother repeating myself here - but what I will tell you is, you simply won't find someone more enthusiastic about this field. I'm not here to simply get a job and hack away at a desk; I <s>enjoy</s> love creating and developing new things; I keep a list of ideas for new projects that I would love to jump on, and needless to say - it's growing faster than I can cross things off.");
        echo('');
        echo("Needless to say I'm passionate about development and am always seeking new opportunities to learn more and truly apply myself - and I'd love to do so by working for your company.");
        echo('');
        setTerminal();
    } else if (terminalInput === "?" || terminalInput === "help") {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        echo("The mail application supports the following commands:");
        echo('');
        echo("   ***********");
        echo("<pre>read\t-\tRead any unopened messages.\ninbox\t-\tList the system's messages.\nquit\t-\tQuit the mail application.</pre>");
        echo("   ***********");
        setTerminal();
    } else if (terminalInput === "clear") {
        document.getElementById("terminalEmu").innerHTML = "";
        setTerminal();
    } else {
        document.getElementById('terminalEmu').removeChild(document.getElementById('terminalInputId'));
        echo(terminalInput);
        echo('');
        echo(terminalInput + ": mail does not support that command - Type '?' or 'help' for a list of commands. Type 'quit' to quit.");
        echo('');
        setTerminal();
    }
}

function returnKey(evt) {
    "use strict";
    if (!evt) {
        if (event) {
            evt = event;
        } else {
            evt = null;
        }
    }
    if (evt.keyCode === 13) {
        if (INMAIL) {
            printMail(document.getElementById('terminalInputId').value);
        } else {
            printOutput(document.getElementById('terminalInputId').value);
        }
    }
}

