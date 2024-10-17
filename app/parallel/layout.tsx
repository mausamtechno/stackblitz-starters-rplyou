export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      <p>This is Parallel Layout</p>
      {children}
      {team}
      {analytics}
    </>
  );
}
