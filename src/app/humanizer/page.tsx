import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const HumanizerPage = () => {
  const onSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      TextInput: formData.get("input1"),
    };
    return console.log(rawFormData.TextInput);
  };

  return (
    <main className="flex flex-col items-center max-w-screen-xl px-10 mx-auto">
      <Link
        href="/"
        className="absolute top-5 left-5 font-bold hover:underline"
      >
        Back to Home
      </Link>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-5xl font-bold tracking-tight">Humanizer</h1>
        <p className="text-foreground/70">by Article Pal</p>
      </div>
      <div className="flex flex-col items-center bg-foreground  text-background w-[800px] h-fit pb-10 rounded-xl mt-10 shadow-inner">
        <h2 className="mt-5 text-2xl font-bold tracking-tight">
          Humanize AI Content in SECONDS.{" "}
        </h2>
        <p className="text-background/70">Paste your AI content below:</p>
        <form className="w-2/3 mx-auto text-foreground mt-10" action={onSubmit}>
          <div>
            <Textarea
              placeholder="Paste your AI Content here.."
              className="shadow-2xl"
              name="input1"
            />
            <Button
              className="w-full mt-4 bg-background text-foreground hover:bg-background/90 active:scale-90 transition-transform"
              type="submit"
            >
              Humanize Text
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default HumanizerPage;
