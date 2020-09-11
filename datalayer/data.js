import { func } from "prop-types";
function examaterialst() {
  return examlst;
}

function couponslst() {
  return coupons;
}
function admitlst() {
  return admitcards;
}
function Jobs() {
  return Jobs1;
}
function joblst() {
  return joblst1;
}
function jobLstShw() {
  return jobLstShw1;
}
function courseslst() {
  return courses;
}
function navPaths(){
  return navPaths1;
}
function pathcompMap(){
  return pathcomp;
}
// Data Creation Started
  // Nav Bar data started:
  const navPaths1=[
    {id:"jobsid",name:"Jobs",path:"/"},
    {id:"admtcard",name:"Admit Cards",path:"/admitcards"},
    {id:"exammid",name:"Exam Materials",path:"/examtrls"},
    {id:"courseid",name:"Courses",path:"/courses"},
    {id:"couponid",name:"Coupons",path:"/coupons"}
  ];
  // Nav Bar data ended:
  
  const pathcomp=[
    {id:1,path:"/examtrls",comp:'<ExamMaterial/>'},
    {id:4,path:"/admitcards",comp:'<AdmitCards/>'},
    {id:2,path:"/coupons",comp:'<Coupons/>'},
    {id:5,path:"/courses",comp:'<Courses/>'},
    {id:3,path:"/",comp:'<JobCards Jobs={this.state.Jobs} jobLstShw={this.state.jobLstShw} />'}
  ];
  const examlst=[
    {id:1,name:"SSCExam",state:"Raj",detail:"Crash Course",qual:"Crash Course",cost:"1500/-"},
    {id:4,name:"ITI",state:"Raj",detail:"Objective Material",qual:"Objective Material",cost:"1400/-"},
    {id:2,name:"Bank",state:"Guj",detail:"Mock test",qual:"Mock test",cost:"2500/-"},
    {id:3,name:"Army",state:"Chennai",detail:"10 Years",qual:"10 Years",cost:"150/-"}
  ];

  const coupons=[
    {id:1,name:"Course for SSC",state:"Raj",detail:"One month",qual:"Any Graduate, Other Course",discount:"20%"},
    {id:2,name:"Course for ITI",state:"Raj",detail:"SSC in details",qual:"Any Graduate, Other Course",discount:"40%"},
    {id:3,name:"Course for Bank",state:"Guj",detail:"Bank in details",qual:"BEd",discount:"30%"},
    {id:4,name:"Course for Army",state:"Chennai",detail:"Army in details",qual:"12th",discount:"20%"}
  ];
  const courses=[
    {id:1,name:"SSC",state:"Raj",detail:"SSC in details",qual:"Any Graduate, Other Course",lastdate:"7/12/2020"},
    {id:4,name:"ITI",state:"Raj",detail:"SSC in details",qual:"Any Graduate, Other Course",lastdate:"7/12/2020"},
    {id:2,name:"Bank",state:"Guj",detail:"Bank in details",qual:"BEd",lastdate:"17/9/2020"},
    {id:3,name:"Army",state:"Chennai",detail:"Army in details",qual:"12th",lastdate:"17/2/2021"}
  ];
  const admitcards=[
    {id:1,name:"SSC",state:"Raj",detail:"Admit Card in details",qual:"Admit Card in details",lastdate:"7/12/2020"},
    {id:4,name:"ITI",state:"Raj",detail:"Admit Card in details",qual:"Admit Card in details",lastdate:"7/12/2020"},
    {id:2,name:"Bank",state:"Guj",detail:"Admit Card in details",qual:"Admit Card in details",lastdate:"17/9/2020"},
    {id:3,name:"Army",state:"Chennai",detail:"Admit Card in details",qual:"Admit Card in details",lastdate:"17/2/2021"}
  ];

  const Jobs1=[
    {id:"jobDetail_1",name:"SSC",state:"Rajasthan",seats:115,detail:"SSC in details",qual:"Any Graduate, Other Course",
        lastdate:"7/12/2020",posteddate:"3/9/2020",agelimit:"20-25",qual:"BEd",postname:"Forest office",
        jobDateID:"jobDetail_1_d" ,expired:false, category:"general",   
    },
    {id:"jobDetail_2",name:"Bank",state:"Gujarat",seats:18,detail:"Bank in details",qual:"BEd",lastdate:"17/9/2020",
        posteddate:"17/11/2020",agelimit:"20-55",qual:"Any Graduation",postname:"IBPS PO/ MT-X Online Form 2020",
        jobDateID:"jobDetail_2_d" ,expired:false, category:"general", 
    },
    {id:"jobDetail_3",name:"Army",state:"Chennai",seats:17,detail:"Army in details",qual:"12th",lastdate:"17/2/2021",
        posteddate:"27/11/2020",agelimit:"no limit",qual:"Post- Graduation",postname:"Border Security Force",
        jobDateID:"jobDetail_3_d" ,expired:false, category:"general", 
    },
    {id:"jobDetail_4",name:"ITI",state:"Maharashtra",seats:109,detail:"SSC in details",qual:"Any Graduate, Other Course",
        lastdate:"7/12/2020",posteddate:"7/06/2020",agelimit:"25-30",qual:"BA,MA",postname:"Electric fitter",
        jobDateID:"jobDetail_4_d",expired:false, category:"general", 
    }
  ];
  const jobLstShw1=[
    {id:"jobDetail_1",name:"SSC",state:"Rajasthan",seats:115,detail:"SSC in details",qual:"Any Graduate, Other Course",
        lastdate:"7/12/2020",posteddate:"3/9/2020",agelimit:"20-25",qual:"BEd",postname:"Forest office",
        jobDateID:"jobDetail_1_d",expired:false, category:"general", 
    },
    {id:"jobDetail_2",name:"Bank",state:"Gujarat",seats:18,detail:"Bank in details",qual:"BEd",lastdate:"17/9/2020",
        posteddate:"17/11/2020",agelimit:"20-55",qual:"Any Graduation",postname:"IBPS PO/ MT-X Online Form 2020",
        jobDateID:"jobDetail_2_d",expired:false, category:"general",
    },
    {id:"jobDetail_3",name:"Army",state:"Chennai",seats:17,detail:"Army in details",qual:"12th",lastdate:"17/2/2021",
        posteddate:"27/11/2020",agelimit:"no limit",qual:"Post- Graduation",postname:"Border Security Force",
        jobDateID:"jobDetail_3_d" ,expired:false, category:"general",
    },
    {id:"jobDetail_4",name:"ITI",state:"Maharashtra",seats:109,detail:"SSC in details",qual:"Any Graduate, Other Course",
        lastdate:"7/12/2020",posteddate:"7/06/2020",agelimit:"25-30",qual:"BA,MA",postname:"Electric fitter",
        jobDateID:"jobDetail_4_d" ,expired:false, category:"general",
    }
  ];
  const joblst1=["SSC","Bank","Army","ITI"];


// Data Creation End


export {examaterialst,couponslst,admitlst,Jobs,joblst,jobLstShw,navPaths,courseslst,pathcompMap}; 