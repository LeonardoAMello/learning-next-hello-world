import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <img
        src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif"
        alt="Party Parrot"
      />

      <Link href="/">
        <p>Return to home page</p>
      </Link>
    </div>
  );
}
