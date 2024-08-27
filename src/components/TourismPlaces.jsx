import React, { useState } from "react";
import { places } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Places = () => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (title, text) => {
    setSelectedTitle(title);
    setSelectedText(text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTitle("");
    setSelectedText("");
  };

  return (
    <Section id="places">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Pha Luong's Tourism Places"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {places.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <TextWithToggle 
                  text={item.text} 
                  title={item.title} 
                  limit={100} 
                  openModal={openModal} 
                />
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal title={selectedTitle} text={selectedText} closeModal={closeModal} />
      )}
    </Section>
  );
};

const TextWithToggle = ({ text, title, limit, openModal }) => {
  return (
    <div>
      <p className="body-2 mb-6 text-n-3">
        {text.substring(0, limit)} ...
      </p>
      {text.length > limit && (
        <button
          onClick={() => openModal(title, text)}
          className="text-blue-500 underline focus:outline-none pointer-events-auto"
        >
          More
        </button>
      )}
    </div>
  );
};

const Modal = ({ title, text, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black text-white p-8 rounded-lg max-w-[66vw] mx-auto">
        <h2 className="text-2xl mb-4">{title}</h2>
        <p className="mb-6">{text}</p>
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Places;
