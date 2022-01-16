import { Comments } from "../components";

export default function Home() {
  return (
    <div
      id="container"
      className="px-2 font-rubik flex gap-3 flex-col items-center"
    >
      <Comments />
    </div>
  );
}
