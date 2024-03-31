import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
            <div>
              <a
                href={t.github}
                className="flex justify-center items-center text-3xl w-full"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
