import { redirect } from "next/navigation";

export default function HomePage() {
  // The interactive portfolio is authored in preview.html / preview.css.
  // The prepare-preview lifecycle script copies those files into /public before
  // development and production builds so the same experience works everywhere.
  redirect("/preview.html");
}
