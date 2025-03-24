import React from "react";
import ChatForum from "@/app/component/ChatForum";
import { currentUser } from "@clerk/nextjs/server";

interface Params {
  slug: string;
}

export default async function Slug({ params }: { params: Params }) {
  const user = await currentUser();
  const { slug } = await params;

  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <section className="relative overflow-hidden text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <ChatForum
              slug={slug}
              clerkUser={{
                id: user?.id,
                firstName: user?.firstName,
                token: user?.publicMetadata.token,
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
