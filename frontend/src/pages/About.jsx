import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            labore quidem, dolorum mollitia vel animi quis aut illum maiores
            odit omnis rerum corporis facilis, voluptatum ipsam itaque quos.
            Maiores, eius. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ipsa, labore quidem, dolorum mollitia vel animi quis aut illum
            maiores odit omnis rerum corporis facilis, voluptatum ipsam itaque
            quos. Maiores, eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            iusto dolores quidem autem officiis quam facere, corporis obcaecati
            exercitationem nulla voluptatibus iure sunt libero odit est omnis
            maxime debitis inventore. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsa, labore quidem, dolorum mollitia vel animi
            quis aut illum maiores odit omnis rerum corporis facilis, voluptatum
            ipsam itaque quos. Maiores, eius.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            excepturi molestias repellat, quam repellendus minus rerum amet
            maiores iusto laudantium. orem ipsum dolor sit, amet consectetur
            adipisicing elit. Minima excepturi molestias repellat, quam
            repellendus minus rerum amet maiores iusto laudantium.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            beatae dolorum ducimus porro sequi amet?
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            beatae dolorum ducimus porro sequi amet?
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt in
            tempora voluptatum ipsum facere iste!
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
