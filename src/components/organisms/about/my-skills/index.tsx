"use client";
import { motion } from "framer-motion";
import { appearsLeft, appearsRight, appearsTop } from "@/src/animation";
import { RoleText } from "@/src/components/atoms/role-text";
import { SKILLS, ACHIEVEMENTS } from "@/src/constants/my-skills";
import React from "react";

export default function MySkillsSection() {
  return (
    <section className="container mx-auto py-24">
      {/* Skills Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={appearsTop}
        viewport={{ amount: 0 }}
      >
        <h1 className="text-4xl uppercase font-semibold">tech stack</h1>
        <div className="my-3 border-[1px] border-teal-600 w-16" />
        <RoleText
          text="front-end developer based in indonesia"
          className="mb-8"
        />
      </motion.div>

      <div className="flex flex-col items-center xl:flex-row gap-10 xl:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsLeft}
          viewport={{ amount: 0 }}
          className="w-full"
        >
          {SKILLS.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1.5">
                <span className="font-normal">{skill.title}</span>
                <span className="text-zinc-600 font-normal">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-light rounded-full h-1.5">
                <div
                  className="bg-teal-600 h-1.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsRight}
          viewport={{ amount: 0 }}
          className="grid grid-cols-2 gap-4 w-full"
        >
          {ACHIEVEMENTS.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200 ease-in-out rounded-lg p-4 text-center"
            >
              <div className="text-3xl mb-1 mr-2">
                {React.createElement(achievement.icon)}
              </div>
              <div className="text-sm font-medium uppercase cursor-default">
                {achievement.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
