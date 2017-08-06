 /*
This is empty on purpose! Your code to build the resume will go here.
 */
// var formattedName = HTMLheaderName.replace("%data%","steven");
// var formattedRole = HTMLheaderRole.replace("%data%","computer vision");
//
// $("#header").append(formattedName);
// $("#header").append(formattedRole);



var bio = {
    "name":"steven",
    "role":"student",
    "contacts": {
      "mobile" : "18795881683",
      "email" : "xsy512@gmail.com",
      "github" : "xsy1995steven",
      "location":"Ann Arbor, Michigan"
    },
    "biopic": "images/me.jpg",
    "skills":["java", "JavaScript", "c++", "matlab", "python"],
    "welcomeMessage":"Smart is the new sexy"

};

var work = {
	"jobs": [
    {
			"employer": "Xilinx",
			"title": "internship",
			"location": "Nanjing",
			"dates": "2016/08---2016/09 ",
      "description":"Used FPGA in ZedBoard from Xilinx to achieve hardware acceleration, realized real-time rapid better edge detection on Eaglego.\nSuccessfully wrote C programs of improved Canny edge detector based on regular perona-malik filter and improved gradient calculation considering 8 adjacent points on SDsoc\nFinally got A, evaluated by Xilinx engineers and professors from Southeast Universit"
		},
		{
			"employer": "Technical Development Department of DFEM Control Equipment co.,LTD",
			"title": "internship",
			"location": "Deyang",
			"dates": "2016/07---2016/08 ",
      "description":"Helped expert engineers to design and test computer controlled electronic circuit"
		}
	]
};

var projects = {
  "projects":[
    {
      "title":"Display R&D Centre of Southeast University",
      "role":"Student Researcher",
      "dates":"11/2015---11/2016",
      "description":"Calculated hologram with modified IFTA(Iterative Flourier Transform Algorithm) by Matlab\nDesigned 4F optical system and used LCOS for Augmented Reality display imagining.\nFamiliar with GS algorithm and holographic imaging principle.",
      "images":["images/project1.jpg"]
    },
    {
      "title":"2016 Interdisciplinary Contest In Modeling(ICM)",
      "role":"Team leader",
      "dates":"01/2016---02/2016",
      "description":"Used Interval Value-based Variable Fuzzy Assessment Method by Matlab to evaluate the scarcity of Water Resources in South Africa\nUsed Logistic Prediction and Time Series Prediction by Matlab to predict it until 2025.\nGot Meritorious Winner, familiar with math modeling method like SVM and BP neural net algorithm.",
      "images":["images/project2.jpg"]
    }

  ]

};

var education = {
  "schools":[
    {
      "name":"Southeast University",
      "location":"Nanjing China",
      "degree":"Bachelor of Engineering",
      "dates":"2013/09---2017/06",
      "majors":["Electrical Engineering"],
      "url":"http://www.seu.edu.cn"
    },
    {
      "name":"National Chiao Tung University",
      "location":"Hsinchu Taiwan",
      "degree":"Exchange Student",
      "dates":"09/2014-01/2015",
      "majors":["ElectroPhysics"],
      "url":"http://www.nctu.edu.tw"
    }
  ],
  "onlineCourses":[
    {
      "title":"basic front-end web development",
      "school":"Udacity",
      "dates":"2017/07---2017/08",
      "url":"https://cn.udacity.com/"

  }]
};

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
  // var formattedskills = HTMLskills.replace("%data%",bio.skills);
  var formattedlocation =  HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedwelcomeMsg =  HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

  var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
  $("#header").prepend(formattedName+formattedRole);
  $("#topContacts,#footerContacts").append(formattedmobile+formattedemail+formattedgithub+formattedlocation);
  $("#header").append(formattedPic);
  $("#header").append(formattedwelcomeMsg);
  $("#header").append(HTMLskillsStart);
  // $("#header").append(formattedskills);
  bio.skills.forEach(function(skill){
    var formattedskills = HTMLskills.replace("%data%",skill);
    $("#skills").append(formattedskills);
  });
};


work.display = function(){
  // for(var job in work.jobs){
  //   $("#workExperience").append(HTMLworkStart);
  //   var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  //   var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  //   var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
  //   var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
  //   var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
  //
  //   $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedDescription);
  //
  // }
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
    var formattedDates = HTMLworkDates.replace("%data%",job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%",job.description);

    $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedDescription);
  })
};


education.display = function(){
  education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%",school.name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%",school.dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%",school.location);
    var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);

    $(".education-entry:last").append(formattedschoolName+formattedschoolDegree+formattedschoolDates+formattedschoolLocation+formattedMajor);
  });
  education.onlineCourses.forEach(function(course){
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%",course.title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%",course.school);
    var formattedonlineDates =HTMLonlineDates.replace("%data%",course.dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%",course.url);
    $(".education-entry:last").append(formattedonlineTitle+formattedonlineSchool+formattedonlineDates+formattedonlineURL);

  })

};

projects.display = function(){
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.title);
    var formattedprojectDates = HTMLprojectDates.replace("%data%",project.dates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%",project.description);
    // var formattedprojectImage = HTMLprojectImage.replace("%data%",project.images);

    $(".project-entry:last").append(formattedprojectTitle+formattedprojectDates+formattedprojectDescription);
    project.images.forEach(function(image){
      var formattedprojectImage = HTMLprojectImage.replace("%data%",image);
      $(".project-entry:last").append(formattedprojectImage);
    });

    //  $("project-entry:last").append("i love music");
  });

};
bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);
