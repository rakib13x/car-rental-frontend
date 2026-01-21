import { useId, useState } from "react";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.4a2 2 0 0 1-.5 2.1L9 10a16 16 0 0 0 5 5l.8-1.1a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.4.6A2 2 0 0 1 21 16.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M4 6h16v12H4V6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m4 7 8 6 8-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SocialIcon = ({ label, path }: { label: string; path: string }) => (
  <a
    href="#"
    aria-label={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/90 transition hover:bg-white/10 hover:text-white"
  >
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
);

export default function ContactForm() {
  const ids = {
    firstName: useId(),
    lastName: useId(),
    email: useId(),
    phone: useId(),
    message: useId(),
  };

  const [form, setForm] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto w-full max-w-6xl rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          {/* LEFT */}
          <aside className="relative overflow-hidden rounded-[28px] bg-black p-8 text-white lg:col-span-5">
            <h1 className="text-4xl font-bold leading-[1.05] md:text-5xl">
              Contact
              <br />
              information
            </h1>
            <p className="mt-4 max-w-sm text-white/70">
              Say something to start a live chat!
            </p>

            <ul className="mt-10 space-y-6 text-base">
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <IconPhone className="h-6 w-6" />
                </span>
                <span className="text-white/90">(+01) 789 854 856</span>
              </li>

              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <IconMail className="h-6 w-6" />
                </span>
                <span className="text-white/90">info@domain.com</span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <IconPin className="h-6 w-6" />
                </span>
                <span className="text-white/90">
                  1234 Elm Street, Suite 567
                  <br />
                  Springfield, United States
                </span>
              </li>
            </ul>

            <div className="mt-14 flex items-center gap-3">
              <SocialIcon
                label="Facebook"
                path="M14 8h2V6h-2c-1.7 0-3 1.3-3 3v2H9v2h2v6h2v-6h2l1-2h-3V9c0-.6.4-1 1-1Z"
              />
              <SocialIcon label="X" path="M7 17 17 7M9 7h3l5 10h-3L9 7Z" />
              <SocialIcon
                label="LinkedIn"
                path="M6.5 10.5V18M6.5 7.5v.5M10 18v-4a2.5 2.5 0 0 1 5 0v4M10 11.5V18"
              />
              <SocialIcon
                label="Instagram"
                path="M8 7h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Zm8.5 4.5v.01M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
            </div>

            {/* blobs */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute bottom-10 right-8 h-40 w-40 rounded-full bg-white/10" />
          </aside>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="h-full">
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor={ids.firstName}
                    className="text-sm font-semibold text-black"
                  >
                    First Name
                  </label>
                  <input
                    id={ids.firstName}
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    placeholder="Enter Your Name"
                    className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm text-black outline-none placeholder:text-gray-400 focus:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor={ids.lastName}
                    className="text-sm font-semibold text-black"
                  >
                    Last Name
                  </label>
                  <input
                    id={ids.lastName}
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    placeholder="Enter Your Name"
                    className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm text-black outline-none placeholder:text-gray-400 focus:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor={ids.email}
                    className="text-sm font-semibold text-black"
                  >
                    Email
                  </label>
                  <input
                    id={ids.email}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Enter Your Email"
                    className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm text-black outline-none placeholder:text-gray-400 focus:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor={ids.phone}
                    className="text-sm font-semibold text-black"
                  >
                    Phone
                  </label>
                  <input
                    id={ids.phone}
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Enter Your Number"
                    className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm text-black outline-none placeholder:text-gray-400 focus:border-black"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor={ids.message}
                    className="text-sm font-semibold text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id={ids.message}
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Write Your Message"
                    rows={5}
                    className="w-full resize-none border-b border-gray-200 bg-transparent pb-3 text-sm text-black outline-none placeholder:text-gray-400 focus:border-black"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
