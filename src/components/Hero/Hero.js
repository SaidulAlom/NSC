import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import investorImg from "../../Assets/Investor.jpg";
import FounderImg from "../../Assets/Founder.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Navojyoti Sports Club
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Your sports journey begins here.
      </motion.p>

      {/* Cards in Column */}
      <div className="cards-container">
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={FounderImg} alt="Maidul Islam" className="person-image maidul" />
          <h3>Maidul Islam</h3>
          <p className="designation">Founder, Navojyoti Sports Club</p>
          <p className="message">
            "Dear members and supporters of Navojyoti Sports Club, As the proud
            founder of our esteemed club since its establishment in 1996, I am
            excited to share that we are actively working on developing a
            website. This digital space will serve as a hub for our vibrant
            community, capturing the essence of our shared passion for sports.{" "}
            <br /> <br />
            I invite each of you to join me in this exciting endeavor. Let's use
            the upcoming website to showcase our achievements, foster
            connections, and keep the Navojyoti spirit alive in the virtual
            realm.
            <br /> <br />
            Thank you for your continued dedication to our club. Together, we'll
            make our online presence as dynamic as our on-field achievements.{" "}
            <br /> <br />
            Best regards, "
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={investorImg}
            alt="Harun All Rashid"
            className="person-image"
          />
          <h3>Harun All Rashid</h3>
          <p className="designation">Investor, Navojyoti Sports Club</p>
          <p className="message">
            "Dear Members and Supporters, I am thrilled to join Navojyoti Sports
            Club as a new investor and to be part of this incredible community.
            Together, we have an exciting journey ahead. <br /> <br />
            As we look to the future, my goal is to enhance our club's
            facilities and programs, ensuring that we provide an exceptional
            environment for all our members. Together, we will focus on
            promoting sportsmanship, teamwork, and personal development.
            <br /> <br />
            I am eager to hear your ideas and suggestions as we embark on this
            journey together. Thank you for your continued support; with your
            help, I am confident that Navojyoti Sports Club will reach new
            heights.
            <br /> <br />
            Best regards, "
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
