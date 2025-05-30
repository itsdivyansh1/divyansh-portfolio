import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, Instagram, Linkedin } from "lucide-react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message must be less than 1000 characters"),
});

// TypeScript types
type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  // EmailJS configuration - Replace these with your actual values
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      // Validate form data with Zod
      const validatedData = contactSchema.parse(formData);

      setIsSubmitting(true);
      setErrors({});
      setSubmitError("");

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          message: validatedData.message,
          to_name: "Divyansh Mishra", // Replace with your name
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle Zod validation errors
        const fieldErrors: FormErrors = {};
        error.errors.forEach((err) => {
          const fieldName = err.path[0] as keyof FormData;
          if (fieldName) {
            fieldErrors[fieldName] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Handle EmailJS errors
        console.error("EmailJS Error:", error);
        setSubmitError("Failed to send message. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-h-screen md:p-8">
      <div className="my-container">
        <div className="grid place-items-baseline sm:place-items-center md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side - Contact Form */}
          <div>
            <div className="flex items-baseline  gap-x-2">
              <img
                src="/images/calling.gif"
                alt="Let's connect"
                className="saturate-0 w-13"
              />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Contact Me
              </h2>
            </div>

            <p className="leading-7 mb-8 [&:not(:first-child)]:mt-6">
              Feel free to contact me and I will get back to you as soon as I
              can.
            </p>

            {submitSuccess && (
              <Alert className="mb-6 bg-green-900/50 border-green-700">
                <AlertDescription className="text-green-200">
                  Thank you for your message! I'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}

            {submitError && (
              <Alert className="mb-6 bg-red-900/50 border-red-700">
                <AlertDescription className="text-red-200">
                  {submitError}
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me all about it"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={12}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                variant={"secondary"}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="md:space-y-8">
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground">
                Email
              </h3>
              <div className="space-y-1">
                <p>itsdivyansh201@gmail.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-baseline gap-2 pt-8">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground">
                Socials
              </h3>
              <Button asChild variant={"link"}>
                <a
                  href="https://www.linkedin.com/in/divyanshmishra57/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant={"link"}>
                <a
                  href="https://github.com/itsdivyansh1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                  Github
                </a>
              </Button>
              <Button asChild variant={"link"}>
                <a
                  href="https://x.com/divyansh400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                  X.com
                </a>
              </Button>
              <Button asChild variant={"link"}>
                <a
                  href="https://www.instagram.com/_divyansh_57/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
