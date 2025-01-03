// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};
		
// function myFunction() {
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("myBar").style.width = scrolled + "%"; 
// }

function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;
  
  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if(imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}
function goBack() {
  window.history.back();
}
window.addEventListener('scroll', scrollAppear);

// For switching between navigation menus in mobile mode
var i = 2;
function switchTAB() {
	var x = document.getElementById("list-switch");
	if(i%2 == 0) {
		document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
		document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
	}else {
		document.getElementById("list-switch").style= "display: none;";
		document.getElementById("search-switch").style= "display: none;";
	}
	i++;
}

// For LOGIN
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}
  
// CheckBox Function
function goFurther(){
  if (document.getElementById("chkAgree").checked == true) {
    document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
  }
  else{
    document.getElementById('btnSubmit').style = 'background: lightgray;';
  }
}

function google() {
  	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}


document.addEventListener("DOMContentLoaded", function() {
  const chatIcon = document.getElementById("chat-icon");
  const chatContainer = document.getElementById("chat-container");
  const closeButton = document.getElementById("close-button");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const sendButton = document.getElementById("send-button");

  // Show chat when user clicks the icon
  chatIcon.addEventListener("click", function() {
      chatContainer.style.display = "block";
      chatIcon.style.display = "none"; // Hide icon when chat is open
  });

  // Close chat when user clicks the close button
  closeButton.addEventListener("click", function() {
      chatContainer.style.display = "none";
      chatIcon.style.display = "flex"; // Show icon again when chat is closed
  });

  // Function to display messages in the chat
  function sendMessage(message, sender = "user") {
      const messageElement = document.createElement("div");
      messageElement.classList.add(sender);
      messageElement.innerHTML = (sender === "user" ? "You: " : "Amy: ") + message;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
  }

  // Function to generate Amy's response
  function generateBotResponse(userMessage) {
      let botMessage = "";
      const lowerCaseMessage = userMessage.toLowerCase().trim();

      // Define the keyword-based responses
      const keywordResponses = [
        {
        keywords: ['what is', 'purpose', 'benefits'],
        response: `E-learning platforms are digital learning environments that provide:
  • Flexible, self-paced education from anywhere
  • Access to diverse courses and learning materials
  • Interactive learning experiences
  • Cost-effective education compared to traditional methods
  • Opportunity to learn from global experts
  • Immediate feedback and progress tracking`
        },
        {
          keywords: ['types', 'different', 'kinds', 'platforms', 'e-learning'],
          response: `There are several types of e-learning platforms:
  • MOOCs (Massive Open Online Courses) - Open platforms for large-scale learning
  • LMS (Learning Management Systems) - Structured platforms for organizations
  • Virtual Classrooms - Real-time interactive learning environments
  • Microlearning Platforms - Bite-sized learning modules
  • Adaptive Learning Platforms - Personalized learning paths
  • Social Learning Platforms - Collaborative learning communities`
        },
        {
          keywords: ['features', 'characteristics', 'functions'],
          response: `Key features of e-learning platforms include:
  • Interactive content delivery
  • Progress tracking and analytics
  • Discussion forums and peer interaction
  • Assessment and feedback systems
  • Mobile learning support
  • Content management tools
  • Learning path customization
  • Achievement certificates and badges`
        },
        {
          keywords: ['advantages', 'benefits'],
          response: `E-learning platforms offer numerous advantages:
  • Flexibility in learning schedule
  • Cost-effective education
  • Global access to quality content
  • Self-paced learning
  • Immediate feedback
  • Regular updates to content
  • Interactive learning experiences
  • Professional networking opportunities`
        },
        {
          keywords: ['how', 'work', 'function', 'operate'],
          response: `E-learning platforms work by:
  • Providing digital infrastructure for content delivery
  • Offering various learning formats (video, text, quizzes)
  • Tracking learner progress and engagement
  • Facilitating interaction between learners and instructors
  • Managing assessments and certifications
  • Personalizing learning experiences based on user needs
  • Enabling content sharing and collaboration`
        }
      ];

      // Check the user message for matching keywords
      for (let i = 0; i < keywordResponses.length; i++) {
          const { keywords, response } = keywordResponses[i];
          
          // Check if any of the keywords are present in the user message
          if (keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
              botMessage = response;
              sendMessage(botMessage, "bot");
              return;  // Stop further checking once a match is found
          }
      }

      // Default responses for common queries
      if (botMessage === "") {
        if (lowerCaseMessage.includes("eduvibe") && lowerCaseMessage.includes("purpose")) {
          botMessage = "EduVibe is designed to provide engaging, interactive learning resources to students. It supports learning through teaching, training, storytelling, and interactive content!";
      } else if (lowerCaseMessage.includes("eduvibe") && lowerCaseMessage.includes("features")) {
          botMessage = "EduVibe offers a range of features including educational games, videos, quizzes, real-time feedback, and a progress-tracking dashboard to make learning enjoyable and effective.";
      } else if (lowerCaseMessage.includes("interactive") || lowerCaseMessage.includes("engaging")) {
          botMessage = "EduVibe includes interactive elements like games and quizzes that help students learn in an enjoyable way. It combines fun with learning for better outcomes.";
      } else if (lowerCaseMessage.includes("how") && lowerCaseMessage.includes("use")) {
          botMessage = "Using EduVibe is simple! Just browse through the resources, take quizzes, play games, and keep track of your progress in real-time. Let me know if you need help with a specific feature!";
      } else if (lowerCaseMessage.includes("quiz") || lowerCaseMessage.includes("quizzes")) {
          botMessage = "EduVibe's quizzes are designed to reinforce learning in a fun way. You can take quizzes on various topics and get instant feedback on your performance.";
      } else if (lowerCaseMessage.includes("track progress") || lowerCaseMessage.includes("progress")) {
          botMessage = "EduVibe allows you to track your learning progress with a dashboard that displays your activity, quiz scores, and overall progress to help you stay motivated!";
      } else if (lowerCaseMessage.includes("games") || lowerCaseMessage.includes("educational games")) {
          botMessage = "Our educational games make learning fun! They’re a great way to reinforce what you've learned in an interactive format.";
      } else if (lowerCaseMessage.includes("videos")) {
          botMessage = "EduVibe offers a variety of educational videos to support different learning styles. Visual learning can help reinforce key concepts!";
      } else if (lowerCaseMessage.includes("adaptive assessments")) {
          botMessage = "EduVibe's adaptive assessments adjust to your skill level, providing personalized questions to help you learn better.";
      } else if (lowerCaseMessage.includes("what are") || lowerCaseMessage.includes("available courses")) {
        botMessage = "EduVibe offers a variety of courses to help you develop your skills and knowledge. Some popular courses include algorithms, data structures, java, and python.";
      } else if (lowerCaseMessage.includes("accessibility") || lowerCaseMessage.includes("available for everyone")) {
          botMessage = "EduVibe aims to be accessible to everyone, providing a platform that supports different learning styles and paces. Education should be available for all!";
      } else if (lowerCaseMessage.includes("provide") || lowerCaseMessage.includes("course")) {
        botMessage = "I'm glad you're interested in learning! Some popular courses available on EduVibe include algorithms, data structures, java, python and more you can access it by clicking on the 'Courses' tab.under resources section.";
      } else if (lowerCaseMessage.includes("what is") || lowerCaseMessage.includes("purpose")) {
        botMessage = "EduVibe is designed to provide engaging, interactive learning resources to students. It supports learning through teaching, training, storytelling, and interactive content!";
      } else if (lowerCaseMessage.includes("what is") || lowerCaseMessage.includes("benefits")) {
        botMessage = "EduVibe offers numerous advantages: flexibility in learning schedule, cost-effective education, global access to quality content, self-paced learning, immediate feedback, regular updates to content, interactive learning experiences, professional networking opportunities.";
      } else if (lowerCaseMessage.includes("how") && lowerCaseMessage.includes("work")) {
        botMessage = "EduVibe works by providing digital infrastructure for content delivery, offering various learning formats (video, text, quizzes), tracking learner progress and engagement, facilitating interaction between learners and instructors, managing assessments and certifications, personalizing learning experiences based on user needs, and enabling content sharing and collaboration.";
      } 
        
      // Greetings and general responses
       else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
          botMessage = "Hello! Welcome to EduVibe. I'm Amy, your learning companion. How can I assist you today?";
      } else if (lowerCaseMessage.includes("how are you")) {
          botMessage = "I'm here to help you with all things EduVibe! How can I assist you today?";
      } else if (lowerCaseMessage.includes("what is") || lowerCaseMessage.includes("about")) {
        botMessage = "EduVibe is a platform designed to support learning and teaching. It offers a range of features, courses, and interactive elements to help students develop their skills and knowledge.";
      }else if (lowerCaseMessage.includes("help")) {
          botMessage = "Sure, I can help! You can ask me about EduVibe’s features, courses, quizzes, or anything you’d like to know about using EduVibe!";
      } else if (lowerCaseMessage.includes("goodbye") || lowerCaseMessage.includes("bye")) {
          botMessage = "Goodbye! Don’t hesitate to reach out whenever you need assistance with EduVibe!";
      } else {
          // Fallback response for questions not yet covered
          botMessage = "I am still learning, but feel free to ask me about EduVibe's features, courses, quizzes, or any other topic related to learning on this platform!";
          botMessage = "I'm sorry, but I didn't understand your question. Please try asking a more specific or general question about EduVibe!";
      }
      }

      sendMessage(botMessage, "bot");
  }

  // Event listener for the "Send" button (to send a message)
  sendButton.addEventListener("click", function() {
      const userMessage = userInput.value.trim();
      if (userMessage) {
          sendMessage(userMessage, "user");
          generateBotResponse(userMessage);
      }
      userInput.value = ""; // Clear the input field after sending
  });

  // Optional: Allow pressing "Enter" to send the message
  userInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          sendButton.click();
      }
  });
});



  // Trigger response when the user sends a message
  sendButton.addEventListener("click", function() {
      const userMessage = userInput.value.trim();
      if (userMessage) {
          sendMessage(userMessage, "user");
          generateBotResponse(userMessage);
          userInput.value = ""; // Clear input after sending
      }
  });

  // Optional: Trigger response with Enter key
  userInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
          sendButton.click();
      }
  });



// QUIZ Page
function quizt(frame) {
  document.getElementById('f1').style='display: none;';
  document.getElementById('f2').style='display: none;';
  document.getElementById('f3').style='display: none;';
  document.getElementById('f4').style='display: none;';
  document.getElementById('f5').style='display: none;';
  document.getElementById('f6').style='display: none;';
  document.getElementById('f7').style='display: none;';
  document.getElementById('f8').style='display: none;';
  document.getElementById('f9').style='display: none;';
  document.getElementById('f10').style='display: none;';
  document.getElementById('f11').style='display: none;';
  if(frame == 1) document.getElementById('f1').style = 'display: block';
  else if(frame == 2) document.getElementById('f2').style = 'display: block';
  else if(frame == 3) document.getElementById('f3').style = 'display: block';
  else if(frame == 4) document.getElementById('f4').style = 'display: block';
  else if(frame == 5) document.getElementById('f5').style = 'display: block';
  else if(frame == 6) document.getElementById('f6').style = 'display: block';
  else if(frame == 7) document.getElementById('f7').style = 'display: block';
  else if(frame == 8) document.getElementById('f8').style = 'display: block';
  else if(frame == 9) document.getElementById('f9').style = 'display: block';
  else if(frame == 10) document.getElementById('f10').style = 'display: block';
  else if(frame == 11) document.getElementById('f11').style = 'display: block'; 
  else alert('error');
}

function startquiz() {
  document.getElementById('title').style = 'display: none;'; 

  document.getElementById('panel').style = 'display: inline-flex;'; 
  document.getElementById('left').style = 'display: block;'; 
  document.getElementById('right').style = 'display: block;'; 
}
function searchdisplay() {
  document.getElementById('searchpanel').style.display="block";
}

function display(n) {
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var s1 = document.getElementById('s1');
  var s2 = document.getElementById('s2');
  var s3 = document.getElementById('s3');
  var s4 = document.getElementById('s4');

  img1.style = 'display: none;';
  img2.style = 'display: none;';
  img3.style = 'display: none;';
  img4.style = 'display: none;';
  s1.style = 'background: #DF2771; color: #FFF;';
  s2.style = 'background: #DF2771; color: #FFF;';
  s3.style = 'background: #DF2771; color: #FFF;';
  s4.style = 'background: #DF2771; color: #FFF;';

  if(n==1) {
    img1.style = 'display: block;';
    s1.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==2) {
    img2.style = 'display: block;';
    s2.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==3) {
    img3.style = 'display: block;';
    s3.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==4) {
    img4.style = 'display: block;';
    s4.style = 'background: #E5E8EF; color: #DF2771;';
  } 
}


function sideMenu(side) {
  var menu = document.getElementById('side-menu');
  if(side==0) {
    menu.style = 'transform: translateX(0vh); position:fixed;';
  }
  else {
    menu.style = 'transform: translateX(-100%);';
  }
  side++;
}