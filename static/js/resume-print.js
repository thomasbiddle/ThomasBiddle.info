/*
    Print all resume info
*/
function loadTerminalPrint( x ) {
    for (var i=0; i<x; i++) setTimeout("addInput('.')",i*500);
    setTimeout(function() { 
        addInput("</br>"); 
        addInput("Parsing File </br>");
        addInput("Moving file to /usr/bin </br>");
        addInput("File Status: [Loaded]</br></br>");
        addInput("recruiter@resume ~> about</br></br>Last Name: Biddle</br>First Name: Thomas</br>Major: Computer Science</br></br>I am currently a student at the University of Cincinnati working towards my BS in Computer Science. Software development is one of my greatest interests, and I always strive to not only increase my knowledge and experience in the field; but find new ways to apply it.</br></br>Independent Ventures:</br></br>In 2011 I was able to successfully found two web hosting companies centered around Virtual Private Servers. Between the two companies, I catered to over 500 individual monthly customers and held a reputation for outstanding customers service and going the extra mile in order to make sure my services were the best available.</Specialties:Java, C++, Javascript, Linux, Android</br></br></br>recruiter@resume ~> education</br></br>University of Cincinnati</br>BS, Computer Science</br>2010-2015 (expected)</br></br>Sycamore High School</br>2006-2010</br>Enrolled in Honors and Advanced Placement (AP) courses. Entire senior year was deciated to the Post Secondary Enrollment Options Program (PSEOP)</br></br>recruiter@resume ~> workhistory</br></br>Seapine Software</br>Software Development Co-op</br>January 2012 - Present</br>Worked as a part of the Surround SCM Development Team and was responsible for fixing submitted defects with the SCM software. Work was mainly done in C++; however while working with certain features knowledge of Java, Javascript, HTML, and CSS were needed.</br></br>MinecraftLayer.com</br>Co-Founder</br>September 2011 - December 2011</br>Company was built around being a hosting platform for the popular Indie game, 'Minecraft'. Even with dozens of competitors in this field, we were able to quickly grow a reputation for having fast and reliable solutions for our customers. With my familiarity of VPSs, and my partner's knowledge of the game and experience in web-hosting - we became a deadly duo to have the company gain a strong foothold in a tough market. While the company was, and still is, running very smoothly - I chose to leave MinecraftLayer in order to focus on other endeavors.I officially left MinecraftLayer December 31, 2011.</br></br>VPSInfinity.com</br>Founder</br>February 2011 - December 2011</br>VPSInfinity was founded in early 2011 as a hosting company for the niche group in game macros. Over 300 individuals clients were served over the period of operation, many leaving our competitor's services to join us due to our superior customer support and feature advancement. The company turned a successful profit from day one and was experiencing incredible growth throughout the period of operation. Many lessons were learned; however unfortunately doors were closed due to the market taking a very swift downturn as our prime target user became unable to run macros as the 3rd party game had implemented a way to prevent this.Officially shut down December 31, 2011.</br></br>Boulder Landscaping</br>Division Manager</br>January 2008 - June 2011</br>Duties included: Lawn-care, tree removal, mulching, and other landscaping necessities.Was the company's first hire from their founding, helped with initial marketing and customer relations.</br></br>Cold Stone Creamery</br>Server</br>November 2007 - April 2009</br>Served a multitude of customers as this was the most profitable franchise in the company during peak seasons, practiced teamwork with fellow colleagues, and worked the cash register.</br></br>recruiter@resume ~> portfolio</br></br>As my experience in Computer Science and programming continues to grow, I will be adding as much to my portfolio as possible. As a supporter of open source communities, I plan to release the source code for any personal projects I take on. The majority, if not all, of my independent projects can be found at: <span class='inLink'><a href='http://www.ThomasBiddle.com/#work'>http://www.ThomasBiddle.com/#work</a></span></br></br>At the above address, you will find a collection of my independent projects, such as 'Project Euler' problems, as well as Android Applications. I also have a few small school assignments that I found to be interesting.</br></br></br></br></br></br></br>&nbsp;");
    }, x*510);
}
/*
    Add to the terminal div
*/
function addInput( x ) {
    document.getElementById('terminalEmu').innerHTML = document.getElementById('terminalEmu').innerHTML + x;
}
/*
    Loading animation then call to print our info.
*/
function startEmuPrint() {
    document.getElementById('terminalEmu').innerHTML = "";
    addInput("recruiter@resume ~> ");
    addInput("</br>");
    addInput("Loading Resume_Thomas_Biddle ..");
    loadTerminalPrint(10);
}