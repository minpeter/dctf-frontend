import { challengeCard } from "@/components/challenge-card";

export default function Page() {
  return (
    <div>
      <h1>Challenges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {challengeCard()}
        {challengeCard()}
        {challengeCard()}
        {challengeCard()}
        {challengeCard()}
        {challengeCard()}
      </div>
    </div>
  );
}
