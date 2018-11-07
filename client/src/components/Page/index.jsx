import React, { Component } from 'react';
import './page.scss';
import coding from '../../../dist/coding.jpg'
import db from '../../../../db/index';
import firebase from 'firebase';
require("firebase/firestore");



export default class Page extends Component {
  render() {
    db.collection("cms").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
  });

    return(
      <div className="page" id="page-wrap">
        <div className="page-container">
          <h1>Software Engineer as an Unemployed Bootcamp Grad</h1>
          <img src={coding} alt=""/>
          <article>
          I know how many blogs or posts there are in the world wide web detailing what it’s like to attend, graduate, and look for a job as a fresh coding bootcamp graduate. To be completely frank, I know I had the same motivation and drive, just like the countless amount of other graduates that chose my path: I am going learn MORE, work HARDER, apply to MORE POSITIONS compared to my peers to get that COVETED JOB as a software engineer. I know, I felt those same convictions.</article> 

  <article>This post, however, is not to lament on how I don’t have a software engineering job, nor how no one will take a chance on me as a web developer when I think I have the talent, dedication, and the creativity to be one. I know everyone else who is also seeking a job feels the same way about themselves. This post is to offer some sort of inspiration to those who fell in love with this craft but cannot seem to find a breakthrough. It is for those who put in the countless hours to</article> 


  <article>It is for those who are let down by the promises of what life will be as a software engineer. 

  It is, however, NOT for those who thought that life would fix itself simply by choosing to join a career in something that they thought would reap cheap gains off of.

  As a software bootcamp graduate, I asked myself why I loved coding or how I fell in love with this career choice. When I thought about it, my answer was probably not the type of answer you would expect to hear as someone who’s diving into the industry: 1) I did not fall in love with it since the first time I started coding. 2) The bootcamp did not make me fall in love with it either, 3) I DID, however, fall in love with the IDEA of the opportunity it would allow me to live the life I wanted because of the HIGH PERCEIVED INCOME and REMOTE work possibilities (who wouldn’t want to go on a vacation while traveling and taking their work with them, literally said by everyone who has a job??). If I were to answer that question in earnest at an earlier point of time, it would probably be bunch of BS that I would want to come up with in an interview setting just to sound interesting or impressive. But either way, I could not answer the question. Not at that moment, and not for a while. Not till I just started coding. Building. And exploring.
          </article>

        </div>
      </div>
    )
  }
};
