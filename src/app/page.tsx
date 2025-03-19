// app/page.tsx

import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Connect & Collaborate with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  ChatHive
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Experience seamless communication with real-time messaging, file
                sharing, and intelligent AI integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
                <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/5">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Chat Mockup */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/10 animate-float">
                <div className="flex flex-col gap-4">
                  {/* Chat Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="bg-blue-500 p-2 rounded-full">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">Team Channel</h3>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 bg-blue-500 rounded-full" />
                      <div className="bg-white/5 p-4 rounded-2xl max-w-[70%]">
                        <p className="text-white text-sm">
                          Hey team! Let's brainstorm some ideas for the new
                          project 🚀
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-purple-500/10 p-4 rounded-2xl max-w-[70%]">
                        <p className="text-purple-400 text-sm">
                          I've got some concepts ready to share! 💡
                        </p>
                      </div>
                      <div className="h-8 w-8 bg-purple-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <RocketLaunchIcon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-300">
                Real-time messaging with ultra-low latency powered by WebSockets
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <SparklesIcon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">AI Powered</h3>
              <p className="text-gray-300">
                Smart replies, translation, and conversation insights using AI
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-pink-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">
                Unlimited Channels
              </h3>
              <p className="text-gray-300">
                Organize your teams and projects with custom channels
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatHive",
  description: "A chat application built with Next.js",
};
