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
    "contact_info": {
      "mobile" : "18795881683",
      "email" : "xsy512@gmail.com",
      "github" : "xsy1995steven",
    },
    "picture_url": "images/me.jpg",
    "skills":"java, JavaScript, c++, matlab, python",

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

var project = {
  "projects":[
    {
      "title":"Display R&D Centre of Southeast University",
      "role":"Student Researcher",
      "dates":"11/2015---11/2016",
      "description":"Calculated hologram with modified IFTA(Iterative Flourier Transform Algorithm) by Matlab\nDesigned 4F optical system and used LCOS for Augmented Reality display imagining.\nFamiliar with GS algorithm and holographic imaging principle."

    },
    {
      "title":"2016 Interdisciplinary Contest In Modeling(ICM)",
      "role":"Team leader",
      "dates":"01/2016---02/2016",
      "description":"Used Interval Value-based Variable Fuzzy Assessment Method by Matlab to evaluate the scarcity of Water Resources in South Africa\nUsed Logistic Prediction and Time Series Prediction by Matlab to predict it until 2025.\nGot Meritorious Winner, familiar with math modeling method like SVM and BP neural net algorithm."
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
      "major":"Electrical Engineering",
      "url":"http://www.seu.edu.cn"
    },
    {
      "name":"National Chiao Tung University",
      "location":"Hsinchu Taiwan",
      "degree":"Exchange Student",
      "dates":"09/2014-01/2015",
      "major":"ElectroPhysics",
      "url":"http://www.nctu.edu.tw"
    }
  ],
  "online_courses":
    {
      "title":"basic front-end web development",
      "school":"Udacity",
      "dates":"2017/07---2017/08",
      "url":"https://cn.udacity.com/"

  }
};

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedPic = HTMLbioPic.replace("%data%",bio.picture_url);
  var formattedskills = HTMLskills.replace("%data%",bio.skills);

  var formattedmobile = HTMLmobile.replace("%data%",bio.contact_info.mobile);
  var formattedemail = HTMLemail.replace("%data%",bio.contact_info.email);
  var formattedgithub = HTMLgithub.replace("%data%",bio.contact_info.github);
  $("#header").prepend(formattedName+formattedRole);
  $("#topContacts").append(formattedmobile+formattedemail+formattedgithub);
  $("#header").append(formattedPic);
  $("#header").append(HTMLskillsStart);
  $("#header").append(formattedskills);
};

work.display = function(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedDescription);

  }
};


education.display = function(){
  for(i in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);

    $(".education-entry:last").append(formattedschoolName+formattedschoolDegree+formattedschoolDates+formattedschoolLocation+formattedMajor);

  };
  $(".education-entry:last").append(HTMLonlineClasses);
  var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.online_courses.title);
  var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.online_courses.school);
  var formattedonlineDates =HTMLonlineDates.replace("%data%",education.online_courses.dates);
  var formattedonlineURL = HTMLonlineURL.replace("%data%",education.online_courses.url);
  $(".education-entry:last").append(formattedonlineTitle+formattedonlineSchool+formattedonlineDates+formattedonlineURL);

};

project.display = function(){
  for(i in project.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.projects[i].title);
    var formattedprojectDates = HTMLprojectDates.replace("%data%",project.projects[i].dates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%",project.projects[i].description);

    $(".project-entry:last").append(formattedprojectTitle+formattedprojectDates+formattedprojectDescription);
    //  $("project-entry:last").append("i love music");

  }
};
bio.display();
work.display();
education.display();
project.display();
