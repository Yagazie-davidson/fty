"use client";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const FAQs = () => {
  const questions = [
    {
      question: "What is Frootify?",
      answer:
        "Frootify is a health technology company seeking to democratise access to preventive health and wellness to Nigeria’s emerging population.",
    },
    {
      question: "Is Frootify an HMO?",
      answer: `No, Frootify isn’t an HMO. An HMO (Health Maintenance Organization) provides health insurance coverage for a monthly or annual fee. Frootify provides preventive healthcare services.`,
    },
    {
      question: "How do I get started with Frootify?",
      answer:
        "Getting started with Frootify is easy! Simply download the Frootify app, sign up and create your healthcare account. Then explore exciting range of healthcare products and services and find the solutions that align with your health and wellness goals.",
    },
    {
      question: "Can I customize my experience with Frootify?",
      answer:
        "Absolutely! Frootify believes in the power of personalization, which is why we offer customizable solutions to meet your specific needs and preferences with the create my blend feature. You can tailor your experience with Frootify to suit your individual goals, personal preferences including allergies and budget.",
    },
    {
      question: "Who is Frootify designed for?",
      answer:
        " You! Frootify is made for everyone. From bubbly toddlers to energetic youths, to viby and glamorous adults. Frootify is crafted for anyone desiring to make their healthcare experience refreshing. Our healthcare solutions cater to individuals of all ages and fitness levels. Whether you’re just starting your wellness journey or you’re a seasoned health champion, Frootify empowers everyone to live their best life. Dive into a world where health meets vitality and let Frootify guide you to a healthier, happier you.",
    },
    {
      question: "What Products and Services does Frootify offer",
      answer:
        "Frootify offers personalized preventive health and wellness products and services covering mental health, nutrition and diet, physical fitness, Telehealth, health-commerce, health-financing amongst others to ensure wholesome health.",
    },
    {
      question: "How can I access customer support if I need assistance?",
      answer:
        "You’re in luck! Frootify offers dedicated customer support to assist you with any questions or concerns you may have. Simply visit your user profile on the mobile app and scroll down to chat with us. Our dedicated customer success team is on standby to help with issues such as setting up your account, navigating the platform, or troubleshooting technical issues on the go.",
    },
    {
      question: "How can Frootify help me improve my health?",
      answer:
        "At Frootify, we’re all about making your health journey fun and accessible. Our user app offers a range of features to support your well-being. Join our vibrant community to access easy educational content and connect with health enthusiasts like you. Need a listening ear? Our Health Buddy feature provides a safe space for mental, physical, or emotional support. Customize your health with our Create My Blend tool, crafting tasty and nutritious blends tailored to your preferences. Plus, our Blends-On-The-Go service ensures you get healthy, delicious options delivered right to your doorstep. Wait…there’s a lot because with Frootify, improving your health is not just easy but enjoyable too!.",
    },
  ];
  const [currentFaq, setCurrentFaq] = useState(0);
  const [isFaqOpen, setIsFaqOpen] = useState(Array(3).fill(false));

  const toggleIsFaqOpen = (index: number) => {
    const updatedIsFaqOpen = [...isFaqOpen];
    updatedIsFaqOpen[index] = !updatedIsFaqOpen[index];
    setIsFaqOpen(updatedIsFaqOpen);
  };

  return (
    <div className="px-10 py-10 md:px-28 md:py-20 2xl:px-48 2xl:py-8 text-center">
      <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full mx-auto  mb-8 inline-block">
        <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl hidden md:block">
          Frequently Asked Questions
        </p>
        <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl md:hidden">
          FAQs
        </p>
      </div>

      <div className="hidden bg-primaryGreen md:grid grid-cols-2 md:rounded-[60px] 2xl:rounded-[96px] gap-6 p-16 2xl:gap-10 2xl:p-14">
        <div>
          {questions.map((q, index) => (
            <div
              className={`${
                index === currentFaq
                  ? "bg-white text-[#4F4F4F]"
                  : "bg-white bg-opacity-30 text-white"
              } flex items-center rounded-full text-start h-24 px-8 mb-2 hover:cursor-pointer`}
              key={index}
              onClick={() => setCurrentFaq(index)}
            >
              <p className="font-semibold text-xl">{q.question}</p>
              <FaAngleRight className="ml-auto w-6 h-6" />
            </div>
          ))}
        </div>
        <div className="bg-white self-start rounded-3xl py-8 px-12">
          <p className="font-bold text-3xl text-[#4F4F4F] text-start mb-4">
            {questions[currentFaq].question}
          </p>
          <p className="text-[#868686] font-medium text-start">
            {questions[currentFaq].answer}
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-gradient-to-r from-lightGreen to-primaryGreen p-4 rounded-3xl md:hidden">
        <div>
          {questions.map((q, index) => (
            <div
              className={
                "bg-white bg-opacity-30 rounded-3xl text-start p-8 mb-4"
              }
              key={index}
              onClick={() => {
                setCurrentFaq(index);
                toggleIsFaqOpen(index);
              }}
            >
              <div className="flex items-center">
                <p
                  className={`font-semibold text-white md:text-wrap max-w-[80%]`}
                >
                  {q.question}
                </p>
                <FaAngleDown className="ml-auto w-6 h-6 text-white" />
              </div>
              <p
                className={`${
                  isFaqOpen[index] === true ? "" : "hidden"
                } text-white mt-6`}
              >
                {q.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
