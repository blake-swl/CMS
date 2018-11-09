import React, { Component } from 'react';
import "./home.scss";
import db from '../../../../db/index';


export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
    }
  }
  async UNSAFE_componentWillMount() {
    let { questions } = this.state;
    // this.handleDropdown();
    // console.log(this.state.questions)
    const docRef =  db.collection("cms").doc("studyguide").collection('toc').doc('Accessibility Questions');
    // const docRef = db.collection("cms/studyguide/toc/Accessibility Questions")

    docRef.get().then(function(doc) {
      const object = doc.data();
      for (var key in object) {
        questions.push(object[key])
      }
      // object.forEach((items) => {
      //   console.log(items)
      // })
        console.log(questions);
    })
    
  //   await docRef.get().then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       console.log(doc.data());
  //       // this.setState({questions: doc.id})
  //       // this.state.questions.push(doc.id)
  //   })
  // })
  //   console.log('component will mount')
  }

  render() {
    let { questions } = this.state;

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
            {questions.map((question) => 
                  <li>{question}</li>
                  )} 
            {/* {questions} */}
          </div>
        </div>
      </div>
    )
  }
};

          //   text