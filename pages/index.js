import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/party-parrot">
        <p>View party parrot</p>
      </Link>
    </div>
  );
}
