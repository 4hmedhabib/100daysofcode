import Image from "next/image";
import { Card, Comments } from "../components";

export default function Home() {
  const data = {
    currentUser: {
      image: {
        png: "/avatars/image-juliusomo.png",
        webp: "/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    comments: [
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        score: 12,
        user: {
          image: {
            png: "/avatars/image-amyrobson.png",
            webp: "/avatars/image-amyrobson.webp",
          },
          username: "amyrobson",
        },
        replies: [],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        score: 5,
        user: {
          image: {
            png: "/avatars/image-maxblagun.png",
            webp: "/avatars/image-maxblagun.webp",
          },
          username: "maxblagun",
        },
        replies: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: "maxblagun",
            user: {
              image: {
                png: "/avatars/image-ramsesmiron.png",
                webp: "/avatars/image-ramsesmiron.webp",
              },
              username: "ramsesmiron",
            },
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2 days ago",
            score: 2,
            replyingTo: "ramsesmiron",
            user: {
              image: {
                png: "/avatars/image-juliusomo.png",
                webp: "/avatars/image-juliusomo.webp",
              },
              username: "juliusomo",
            },
          },
        ],
      },
    ],
  };

  return (
    <div
      id="container"
      className="px-2 font-rubik flex gap-3 flex-col items-center "
    >
      <Comments data={data} currentUser={data.currentUser} />
      <div className="mt-2 mb-3 w-full flex justify-center">
        <Card>
          <div className="flex  w-full">
            <div>
              <Image
                src={data.currentUser.image.png}
                alt={data.currentUser.username}
                width="34"
                height="34"
              />
            </div>
            <form className="flex w-full ml-3">
              <div className="w-full mr-5">
                <textarea
                  className="px-3 py-2 flex min-w-full  rounded-md border-lightGray border resize-none"
                  rows={4}
                  placeholder="Add a comment"
                />
              </div>
              <div>
                <button className=" bg-moderateBlue px-6 text-white uppercase tracking-wide py-2 rounded-lg">
                  Send
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
