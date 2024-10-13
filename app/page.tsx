import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/dashboard" prefetch>
        Go to Dashboard
      </Link>
    </div>
  );
}
