import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import pic from "../public/images/empresa.avif";

const About = () => {
  return (
    <Layout title="about">
      <div className="flex justify-center text-3xl py-8 bg-red-500 text-white">
        <h1>Who we are</h1>
      </div>
      <div className="flex justify-center p-5">
        <Image src={pic} width={700} height={700} alt="/"></Image>
      </div>

      <div className="flex justify-center text-lg py-12">
        <p>
          We are a family business that was born in New York with over 60 years
          of experience in the industry. Through hard work and determination, we
          have become one of the largest candy manufacturing and import/export
          companies in USA. Focusing on quality, innovation, and creativity,
          Sugar Momma attributes its success to clear objectives. Today, it is
          one of the leading companies in the region, boasting a modern factory
          and industrial plant. Its own brand, has become one of the most
          recognized in the market, and its distribution chain is seen as an
          innovative idea in sales channels.
        </p>
      </div>

      <div className="flex justify-center text-3xl py-8 bg-red-500 text-white">
        <h1>Our Goals</h1>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-6 md:gap-4 py-8">
        <div className="flex justify-center text-center text-lg py-3 bg-orange-500 font-bold">
          1. Multiply global business opportunities.
        </div>

        <div className="flex justify-center text-center text-lg py-3 bg-lime-400 font-bold">
          2. Increase market share in both local and international markets.
        </div>

        <div className="flex justify-center text-center text-lg py-3 bg-pink-500 font-bold">
          3. Evolve from a family business to a family of companies.
        </div>

        <div className="flex justify-center text-center text-lg py-3 bg-violet-600 font-bold">
          4. Provide products and services of the highest quality.
        </div>

        <div className="flex justify-center text-center text-lg py-3 bg-amber-400 font-bold">
          5. Attain sufficient profit to finance the growth of our companies,
          create value for our shareholders, and allocate resources necessary to
          achieve our objectives.
        </div>
        <div className="flex justify-center text-center text-lg py-3 bg-cyan-400 font-bold">
          6. Share the success of the company with our employees, ensuring their job
          satisfaction and appreciation for their accomplishments.
        </div>
      </div>
    </Layout>
  );
};

export default About;
