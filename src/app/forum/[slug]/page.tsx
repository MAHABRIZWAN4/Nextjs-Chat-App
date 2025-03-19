import React from 'react'
import ChatForum from "@/app/component/ChatForum";

interface Params {
  slug: string;
}

export default function Slug({ params }: { params: Params }) {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <section className="relative overflow-hidden text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <ChatForum slug={params.slug} />
          </div>
        </section>
      </div>
    </main>
  );
}









            {
              /* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      My Post: {slug}

                </div> */
            }