
import React, { Component } from 'react';
import "./home.scss";
// import db from '../../../../db/index';


let data = [
  {
    title: "General Questions",
    subtitle: "General frontend interview questions",
    date: '01/01/2017'
  },
  {
    title: "HTML Questions",
    subtitle: "Common HTML questions & solutions",
    date: '04/12/2018',
  },
  {
    title: "CSS Questions",
    subtitle: "Common CSS questions & solutions",
    date: "10/12/2018"
  }
]

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      title: [],
      subtitle: '',
      date_posted: ''
    }
  }
  componentDidMount() {
    this.setState({title: data.title, subtitle: data.subtitle, date_posted: data.date});
  }
  // async UNSAFE_componentWillMount() {
  //   let { questions } = this.state;
  //   // this.handleDropdown();
  //   // console.log(this.state.questions)
  //   const docRef =  db.collection("cms").doc("studyguide").collection('toc').doc('Accessibility Questions');
  //   // const docRef = db.collection("cms/studyguide/toc/Accessibility Questions")

  //   docRef.get().then(function(doc) {
  //     const object = doc.data();
  //     for (var key in object) {
  //       questions.push(object[key])
  //     }
  //     // object.forEach((items) => {
  //     //   console.log(items)
  //     // })
  //       console.log(questions);
  //   })
    
  //   await docRef.get().then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       console.log(doc.data());
  //       // this.setState({questions: doc.id})
  //       // this.state.questions.push(doc.id)
  //   })
  // })
  //   console.log('component will mount')
  // }

  render() {

    let { title, subtitle, date_posted } = this.state;

    return(
      <div id="page-wrap" className="home">
        <div className="home-left">
          <div className="title">
            <h1>BLAKE S LEE</h1>
            <p>Software engineer, coffee addict, LeBron James fanatic.</p>
            <a href="https://blakeswl.me" target="_blank">
             <button>VISIT WEBSITE</button>
            </a>
          </div>
        </div>
        <div className="home-right">
          <div>
            <div>{title.map(titles => {
              <li>{titles}</li>
              })}</div>
            <h3>{this.state.subtitle}</h3>
            
            {/* {questions.map((question) => 
                  <li>{question}</li>
                  )}  */}
            {/* {questions} */}
          </div>
        </div>
      </div>
    )
  }
};
