/* eslint-disable @next/next/no-img-element */
import React from "react";
import Page from "../components/Page";

function Profile() {
  return (
    <Page>
      <img
        src="https://i.pinimg.com/originals/f1/3f/b3/f13fb34cc03956b16ad356f8122b9621.jpg"
        className="h-full w-full object-cover fixed inset-0 z-0"
        alt=""
      />
      <div className="pb-32 fixed inset-0 h-screen w-screen overflow-auto z-10 flex flex-col items-center pt-6 bg-black/20">
        <div className="flex items-center justify-center w-full px-7 mb-7 text-xl text-white"></div>
        <img
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
          alt=""
          className="w-28 h-28 rounded-full object-cover border-2 border-white shrink-0"
        />
        <h1 className="text-3xl text-white font-semibold mt-6">
          Priyangsu Banerjee
        </h1>
        <h2 className="text-sm text-neutral-200 mt-2">
          Developer advocate | @FSD
        </h2>
        <button className="flex items-center text-sm lg:hover:underline text-black bg-white rounded-full px-5 py-1 mt-6 border-b-4 active:border-transparent active:translate-y-1 border-black select-none transition-all">
          <i class="bi bi-envelope-heart text-lg"></i>
          <span className="-mt-0 ml-2">Send anonymous message</span>
        </button>
        <ul className="text-2xl mt-10 text-white flex items-center flex-wrap gap-6">
          <li>
            <i class="bi bi-facebook"></i>
          </li>
          <li>
            <i class="bi bi-instagram"></i>
          </li>
          <li>
            <i class="bi bi-youtube"></i>
          </li>
          <li>
            <i class="bi bi-spotify"></i>
          </li>
          <li>
            <i class="bi bi-snapchat"></i>
          </li>
          <li>
            <i class="bi bi-linkedin"></i>
          </li>
          <li>
            <i class="bi bi-github"></i>
          </li>
          <li>
            <i class="bi bi-twitter"></i>
          </li>
        </ul>
        <ul className="w-full lg:w-[600px] mt-14 text-center px-7 space-y-4">
          <li>
            <button className="p-3 rounded-full border text-white w-full active:bg-white active:text-slate-900 transition-all select-none">
              Lorem ipsum dolor sit amet consectetur.
            </button>
          </li>
        </ul>
      </div>
    </Page>
  );
}

export default Profile;
