import { useToastersStore } from "@react-lab-mono/ui";

export const useFormSubmit = () => {
  const { enQueueToast } = useToastersStore();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams(
      Array.from(formData.entries()) as [string, string][]
    ).toString();

    enQueueToast("sucess", "Your message was sent successfully!");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      });

      form.reset();
      enQueueToast("sucess", "Your message was sent successfully!");
    } catch (err) {
      console.error(err);
      enQueueToast("error", "Something went wrong sending your message!");
    }
  };

  return {
    onSubmit
  };
};
